// pages/zujian/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 自动播放
    autoplay:false,
    // 播放间隔
    interval:2000,
    // 切换时长
    duration:1000,
    // 指示点
    indicatorDots:true
  },

  // 是否展示指示点
  changeIndicatorDots(e){
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  // 切换间隔
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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