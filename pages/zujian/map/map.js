// pages/zujian/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 当前所在位置
    latitude:'',
    longitude :'',

    // 标记点 ，确定某个位置
    // 是一个数组，可以用来确定多个位置，比如说某品牌的多个门店位置
    markers: [{
      iconPath: "/images/home.png",
      id: 0,
      latitude: 31.70689,
      longitude: 117.18283,
      width: 50,
      height: 50,
    }],
    
    controls: [{
      id: 1,
      iconPath: '/images/home-active.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        _this.setData({
          latitude: latitude,
          longitude: longitude,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})