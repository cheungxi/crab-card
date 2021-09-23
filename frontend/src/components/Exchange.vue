<template>
  <div class="container">
    <div class="title">兑换</div>
    <form @submit.prevent="greet">
      <!-- @submit="greet" action="http://www.baidu.com"> -->
      <!-- <h3>兑换卡信息</h3> -->
      <div class="card-details">
        <div class="input-box">
          <label for="cardId">卡号*</label>
          <input
            v-model="cardId"
            type="text"
            name="cardId"
            placeholder="请输入卡号"
            required
          />
        </div>
        <div class="input-box">
          <label for="cardPassword">密码*</label>
          <input
            v-model="cardPassword"
            type="text"
            name="cardPassword"
            placeholder="请输入密码"
            required
          />
        </div>
      </div>
      <!-- <h3>寄件信息</h3> -->
      <div class="express-details">
        <div class="input-box">
          <label for="addressee">收件人姓名*</label>
          <input
            v-model="addressee"
            type="text"
            name="addressee"
            placeholder="请输入收件人姓名"
            required
          />
        </div>
        <div class="input-box">
          <label for="phone">收件人电话*</label>
          <input
            v-model="phone"
            type="tel"
            name="phone"
            placeholder="请输入11位手机号码"
            required
          />
        </div>
        <div class="input-box">
          <label for="address">收件人地址*</label>
          <input
            v-model="address"
            type="text"
            name="address"
            placeholder="请输入收件人地址"
            required
          />
        </div>
      </div>
      <div>
        <button type="submit">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardId: "",
      cardPassword: "",
      addressee: "",
      phone: "",
      address: "",
    };
  },
  methods: {
    greet(event) {
      // `methods` 内部的 `this` 指向当前活动实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM event
      if (event) {
        alert(event.target.tagName);
      }
      // fetch('http://localhost:3001')
      //     .then(response => response.json())
      //     .then(data => {this.address = data.address});
      fetch(import.meta.env.VITE_CARD_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cardId: this.cardId,
          cardPassword: this.cardPassword,
          addressee: this.addressee,
          addresseePhone: this.phone,
          address: this.address,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        });
    },
  },
};
</script>

<style scoped>
.container {
  /* display: flex;
        flex-direction: column; */
  /* justify-content: space-between; */
  /* align-items:center; */
  max-width: 700px;
  width: 100%;
  background: rgb(247, 247, 247);
  margin: 0 auto;
  padding: 25px;
  border-radius: 5px;
}

.container .title {
  font-size: 22px;
  font-weight: 700;
  position: relative;
  /* margin: 0 auto; */
  /* text-align: center; */
}
.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
  height: 3px;
  width: 30px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
/* .container form .card-details{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    } */

/* .container form > div:last-child {
        text-align: center;
    } */
form {
  margin: 20px 0 12px 0;
}
form .input-box {
  width: calc(100%);
  /* margin: 20px 0 12px 0; */
  margin-bottom: 24px;
}

.input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 15px;
  font-size: 10px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.input-box input:focus,
.input-box input:valid {
  border-color: #19110b;
}
.input-box label {
  display: block;
  font-weight: 400;
  margin-bottom: 8px;
  font-size: 12px;
}

form button {
  height: 45px;
  margin: 45px 0;
  width: 100%;
  border: none;
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  font-weight: 500;
  letter-spacing: 10px;
  background: #19110b;
}
</style>
