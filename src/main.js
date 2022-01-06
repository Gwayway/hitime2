import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'
wx.cloud.init({
  env: 'server1-0g2dr8jw65f8ca9a',
  traceUser: true
})

const app = new Vue(
  App
)
app.$mount()
