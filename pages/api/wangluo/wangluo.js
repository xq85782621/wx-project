// pages/api/wangluo/wangluo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  sendRequest(){
    wx.request({
      method:'POST',
      url: 'http://localhost:8090/user/query',
      data: {
        username:'许'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      success(res) {
        console.log(res.data)
      }
    })
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    console.log(`${options.id}`)
  },
})