const mongoose = require("mongoose");
const CardsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  status: {
    type: String,
    required: true,
    default: "未销售",
    enum: ["未销售", "未兑换", "已兑换"],
  },
  addressee: String,
  phone: String,
  address: String,
  exchangeDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model("card", CardsSchema);
