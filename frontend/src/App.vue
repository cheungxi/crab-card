<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from './components/Navbar.vue'
import Exchange from './components/Exchange.vue'
import HomeVideoBG from './components/HomeVideoBG.vue'


</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Navbar />
  <HomeVideoBG />
  <Exchange />
</template>

<style>
  
  *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
      }
  body {
    /* font-family: 'Noto Sans SC', sans-serif; */
    font-family: 'Noto Serif SC', serif;
    /* /* background: linear-gradient(135deg, #71b7e6, #9b59b6); */
    /* background-repeat: no-repeat; */
    /* background-attachment: fixed;  */
    background-color: #F3F3F2;
    color:#19110b
  }
@font-face {
  font-family: 'iconfont';  /* Project id 2817965 */
  src: url('//at.alicdn.com/t/font_2817965_lb0e6vzwm8p.woff2?t=1631794898830') format('woff2'),
       url('//at.alicdn.com/t/font_2817965_lb0e6vzwm8p.woff?t=1631794898830') format('woff'),
       url('//at.alicdn.com/t/font_2817965_lb0e6vzwm8p.ttf?t=1631794898830') format('truetype');
}
  
  .iconfont {
    font-family: "iconfont" !important;
    /* font-size: 16px; */
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
