<template>
  <div>
    <!-- 头部icon,text -->
    <i-row i-class="top-row">
      <i-col span="6"
        ><i-avatar i-class="icon" src="/static/images/disk.png" shape="square" size="large"></i-avatar
      ></i-col>
      <i-col><label class="text">Hitime</label></i-col>
    </i-row>
    <!-- 中部动画 -->
    <div class="div-pic">
      <img class="pic" src="/static/images/cat.png"/>
    </div>
    <div class="div-button">
      <i-button i-class="button" type="primary" @click="clickHandle"
        >进入你的Hi!Time</i-button
      >
    </div>
  </div>
</template>

<script>
import { login } from "@/api/dbcloud.js";

export default {
  data() {
    return {
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "",
        avatarUrl: "",
      },
    };
  },

  components: {},

  methods: {
    clickHandle() {
      login();
    },
  },

  created() {
    // let app = getApp()
  },
};
</script>

<style scoped>
.div-button{
  width: 100%;
}
.pic{
  margin-top: 100rpx;
}
.div-pic{
  width: 100%;
  height: 60%;
  text-align:center;
}
div >>> .button {
  width: 350px;
  border-radius: 10px !important;
  background-color: #6236ff !important;
  position: fixed;
  bottom: 200rpx;
}
div >>> .top-row {
  margin: 60px 20px;
}

div >>> .icon {
  background-color: #b37feb;
}
.text {
  font-size: 30px;
}
</style>
