// pages/demo/shijian/shijian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // e 就是事件对象
  bindTest(e){
    console.log(e)
    console.dir(e)
  },

  // 测试冒泡事件
  outerHandler: function (e) {
    console.dir(e)
    console.log('outer....')
  },

  innerHandler: function (e) {
    console.dir(e)
    console.log('inner....')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
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