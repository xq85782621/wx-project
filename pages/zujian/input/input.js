// pages/zujian/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: ''
  },

  bindKeyInput(e){
    this.setData({
      inputValue: e.detail.value
    })
  },

  bindReplaceInput(e){
    var value = ''
    // 匹配特殊字符串和中文日文韩文的正则
    const pattern = /[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s\u4E00-\u9FA5\uF900-\uFA2D]/g;
    // 过滤掉正则匹配的文本
    value = e.detail.value.replace(pattern, "");
    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value
    }
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