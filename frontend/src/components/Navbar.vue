<template>
    <nav>
        <div class="nav-content">
            <div class="booking">
            </div>
            <div class="logo">
                <a href="#"><img src="../assets/logo.png" alt=""></a>
            </div>
            <ul class="nav-links" :class="{navActive: activeNav}">
                <!-- <li v-for="navLink in navLinks">
                   <a href="#"> {{ navLink }} </a>
                </li> -->
                <li> <a href="#" ref="navLink1"> <i class="iconfont">&#xe615;</i> 兑换</a></li>
                <li><a href="#" ref="navLink2"> <i class="iconfont">&#xe602;</i> 快递查询</a></li>
            </ul>
            <div class="burger" @click="toggleAcriveNav">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
    nav{
        /* position: fixed;
        left: 0;
        top: 0; */
        position: sticky;
        width: 100%;
        top: 0;
        /* background: #4070f4; */
        padding: 20px;
        background:linear-gradient(to bottom, #FBFBF6 0%, rgba(35, 32, 30, 0) 100%);
        height: 8vh;
        z-index: 1;
    }
    .nav-content > div{
        flex:1
    }
    .nav-content ul{
        flex: 1;
        text-align: right;
    }
    nav .nav-content{
        /* position:relative; */
        display: flex;
        align-items: center;
        /* justify-content: space-; */
        height: 100%;
        max-width: 1200px;
        /* background: red; */
        margin: auto;
    }

    .logo{
        text-align: center;
    }
    .logo img{
        height: 40px;
    }
    .nav-content .nav-links{
        display: flex;
        align-items: center;
        justify-content: right;
    }
    .nav-content .nav-links li{
        list-style: none;
        margin: 0 8px;
    }

    .nav-links li a{
        font-size: 12px;
        font-weight: 700;
        color: #27221F;
        /* background: red; */
        padding: 10px 4px;
        letter-spacing: 2px;
    }
    .burger{
        display: none;
    }
    .burger div{
        width: 25px;
        height: 3px;
        background-color: #27221F;
        margin:5px;
    }
    @media screen and (max-width: 768px){
        .nav-content .nav-links{
            width: 100%;
            position: absolute;
            right: 0px;
            height: 92vh;
            top: 8vh;
            background-color: red;
            /* background-color: #F3F3F2; */
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            transform: translateX(100%);
            transition: transform 0.8s ease-in;
            opacity: 0.8;
            /* z-index: 100; */
        }
        .burger {
            display: block;
        }
        .burger div{
            margin-left: auto;
            margin-right: 0;
        }
        .nav-links li a{
            color: #000;
            font-size: 18px;
        }

        .nav-content .navActive{
            transform: translateX(0%);
        }
    }
</style>

<style>
    @media screen and (max-width: 768px){
        body{
            overflow-x:hidden;
        }
    }
</style>

<script>
export default {
    data(){
        return{
            activeNav: false,
            // navLinks: ["兑换","快递查询"]
        }
    },
    methods:{
        toggleAcriveNav: function() {
            this.activeNav = !this.activeNav;
            if(this.activeNav) {
                // this.$refs.refNavLinks.forEach((link, index));
                // this.$refs.NavLink1.style
                
            }
        }
    }
}
</script>