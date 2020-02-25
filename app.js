// app.js 是项目的全局根文件,会自动执行app.js 
// 直接调用全局 App() 这个方法, 用来创建整个应用程序的实例对象
// 会定义应用程序的生命周期

// App() 用于定义整个应用实例对象
// Page() 用于定义页面对象
// getApp() 获取全局应用实例对象
// getCurrentPages() 用来获取当前页面的调用栈 ,最后一个就是当前页面

// wx 对象,用来提供核心api

// 小程序是支持commonJs 规范的 
// 也就是说支持 module.exports 和 require (不支持单个exports)

App({
  // 应用的生命周期函数
  onLaunch: function () {
    // 从本地缓存中异步获取指定 key 的内容
    var logs = wx.getStorageSync('logs') || []
    // unshift() 方法可向数组的开头添加一个或更多元素,这里是往logs数组中添加新记录
    logs.unshift(Date.now())
    // 将数据存储在本地缓存中指定的 key 中
    wx.setStorageSync('logs', logs)
   

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  },
})