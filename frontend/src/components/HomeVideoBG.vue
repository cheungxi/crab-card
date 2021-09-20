<template>
    <div class="showcase">
        <video src="https://crabcard.oss-cn-beijing.aliyuncs.com/hehua_720p_h264.mp4" muted loop autoplay></video>
        <div class="scrollCards">
            <div class="Card CardsTitle">
                购<br>
                买<br>
                渠<br>
                道
            </div>
            <div class="Card Taobao">
                <div class="icon">
                    <i class="iconfont">&#xea99;</i>
                </div>
            </div>
            <div class="Card Pdd">
                <div class="icon">
                <i class="iconfont">&#xe8df;</i>
                </div>
            </div>
            <div class="Card Wechat" >
                <div class="icon">
                <i class="iconfont">&#xe608;</i>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .showcase {
        position: relative;
        top: -8vh;
        width: 100%;
        background-color: royalblue;
        padding: 10px;
        min-height: 100vh;
    }
    .showcase video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* opacity: 0.8; */
        z-index: 0 ;
    }
    .scrollCards{
        /* margin-top: 75%; */
        width: 100%;
        padding: 5%;
        /* z-index: 10; */
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;  
        position: absolute;
        top: 60%;
        /* transform: translateY(-50%); */
    }

    .scrollCards::-webkit-scrollbar {
         display: none; /* Chrome Safari */
    }
    .Card {
        /* height: 70vh * 1.2; */
        background: #fff;
        z-index: 0;
        margin: 10px;
        text-align: center;
        border-radius: 15px;
        opacity: 0.8;
        flex-shrink: 0;
        padding: 10px;
        position: relative;
    }

    .Card .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .Card .iconfont{
        font-size: 60px;
    }

    .CardsTitle{
        /* transform: rotate(90deg); */
        background: red;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
    }
    .Taobao{ 
         width: 70vw;
    }

    .Pdd {
        width: 40vw;
    }

    .Wechat{
        width: 40vw;
    }
    
</style>
<script>

</script>