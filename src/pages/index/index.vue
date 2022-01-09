<template>
  <div>
    <!-- 头部icon,text -->
    <wux-row wux-class="top-row">
      <wux-col span="3"
        ><wux-avatar
          wux-class="icon"
          src="/static/images/disk.png"
          shape="square"
          size="large"
      /></wux-col>
      <wux-col><label class="text">Hitime</label></wux-col>
    </wux-row>

    <!-- 中部动画 -->
    <div class="div-pic">
      <img class="pic" src="/static/images/cat.png" />
    </div>
    <div class="div">
      <button class="button" type="primary" @click="clickHandle"
        >进入你的Hi!Time</button
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
.div{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.div-button {
  margin: 0 auto;
  display:flex;
  align-items: center;
}
.pic {
  margin-top: 100rpx;
}
.div-pic {
  width: 100%;
  height: 60%;
  text-align: center;
}
.button {
  display: inline;
  justify-content: center;
  width: 350px ;
  border-radius: 10px ;
  background-color: #6236ff;
  position: fixed;
  bottom: 200rpx;
  
  
}
div >>> .top-row {
  flex: initial;
  margin: 60px 20px;
}

div >>> .icon {
  background-color: #b37feb;
}
.text {
  font-size: 30px;
}
</style>
