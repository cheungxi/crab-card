require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const Card = require('./models/Cards')
// const bodyParser = require("body-parser")
const cors = require("cors")

// For https://mongoosejs.com/docs/deprecations.html#useunifiedtopology
mongoose.set('useUnifiedTopology', true)
// For https://mongoosejs.com/docs/deprecations.html#the-usenewurlparser-option
mongoose.set('useNewUrlParser', true);

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB_HOST);
}

// create our express app
const app = express()
// middleware
app.use(cors())
app.use(express.json())
const mongodbSim = {
    cardId: "43432",
    cardPassword: "123456789",
    addressee: "张曦",
    addresseePhone: "15279115820",
    address: "北京市海淀区"
}
// routesu
app.get("/", (req,res)=>{
    res.json(mongodbSim)
})

app.post("/", (req, res) => {
    let reqCardDetail = {
        id : req.body.cardId, 
        password:  req.body.cardPassword,
        addressee: req.body.addressee,
        phone: req.body.addresseePhone,
        address: req.body.address
    };

    (async () => {
        let doc = await Card.findOne({id: reqCardDetail.id});
        console.log(doc);
        if (doc === null ){
            res.json({message: "卡号有误"});
        } else if (doc && doc.password !== reqCardDetail.password) {
            res.json({message: "密码错误"});
        } else if (doc && doc.password == reqCardDetail.password && (doc.status == "未销售" || !doc.status)) {
            res.json({message: "未销售"})
        } else if (doc && doc.password == reqCardDetail.password && doc.status == "已兑换") {
            res.json({message: "已兑换"})
        } else if (doc && doc.password == reqCardDetail.password && doc.status == "未兑换" ) {
            //&& doc.status == "未兑换"
            let {id, password, ...addressDetail} = reqCardDetail;
            await Card.updateOne(
                {id: reqCardDetail.id},
                {...addressDetail, status: "已兑换", exchangeDate: Date.now()});
            res.json({message: "兑换成功"});
        } else {
            res.json({message: "其他错误"})
        }
        // if(doc  && doc.password == reqCardDetail.password ) {
        //     //&& doc.status == "未兑换"
        //     let {id, password, ...addressDetail} = reqCardDetail;
        //     await Card.updateOne(
        //         {id: reqCardDetail.id},
        //         {...addressDetail, status: "已兑换"});
        //     res.json({message: "兑换成功"});
        // } else if (doc && doc.password !== reqCardDetail.password) {
        //     res.json({message: "密码错误"});
        // } else if (doc === null ){
        //     res.json({message: "卡号有误"});
        // }
    })();
    
    // async function getDbCardDetail() {
    //     let result = await Card.find()
    //     return result;
    // }
    // const dbCardDetail = getDbCardDetail();
    // console.log(typeof(reqCardDetail.cardId))
    // Card.findOne({id: reqCardDetail.cardId}, function(err, doc) {
    //     if(doc && doc.status == "未兑换" && doc.password == reqCardDetail.cardPassword ) {
    //         doc
    //         res.json({status: "已兑换"})
    //     } else {
    //         res.json({status: "兑换失败"})
    //     }
    //     // console.log(docs)
    //     // res.json(docs)
    // })

    // Card.findOne({id: reqCardDetail.id})
    //     .then(async doc => {
    //         if(doc && doc.status == "未兑换" && doc.password == reqCardDetail.password ) {
    //             newDoc = await Card.findOneAndUpdate(
    //                 {id: reqCardDetail.id},
    //                 {...reqCardDetail, status: "已兑换"},
    //                 {new: true})
    //             res.json({status: newDoc.status})
    //         } else if (doc && doc.password !== reqCardDetail.password) {
    //             res.json({status: "密码错误"})
    //         } else if (doc === null ){
    //             res.json({status: "卡号有误"})
    //         }
    //     })

    // function passwordCheck(reqPassword, dbPassword) {
    //     if(reqPassword == dbPassword
    // }
    // console.log(dbCardDetail)
    // res.json(dbCardDetail)
    // if (reqCardDetail.cardPassword !== mongodbSim.cardPassword) {
    //     res.json({status: "密码错误"})
    // } else {
    //     res.json({status: "兑换成功"})
    // }
    // // res.json({status: "密码错误"})
    // console.log(reqCardDetail)
});


//start server
app.listen(3001, ()=>{
    console.log("listeniing at port:3001")
}) 
