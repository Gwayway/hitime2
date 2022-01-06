// 获取小程序云数据库实例
const db = wx.cloud.database()
let dataget
let userinfo
let user
export async function login() {
  if (wx.getStorageSync('storage_info') == 1) return
  await wx.getUserProfile({
    desc: "完善信息"
  }).then((res) => {
    console.log(res)
    wx.setStorage({
      key: "storage_info",
      data: 1
    })
    user = {
      nickName: res.userInfo.nickName,
      avatarUrl: res.userInfo.avatarUrl
    }
    wx.setStorage({
      key: "userinfo",
      data: user
    })
  });
  await wx.cloud.callFunction({
    name: 'getuserinfo'
  }).then(res => {
    console.log(res)
    userinfo = res.result
  });

  await db.collection('user_info').where({
    _openid: userinfo.openid
  }).get().then(res => {
    console.log(res)
    dataget = res.data
  });

  if (dataget.length == 0) {
    db.collection('user_info').add({
      data: user
    })
  }

}
