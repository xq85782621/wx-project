// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     learnList:[
      { name:'java', completed: true},
      { name: 'vue', completed: false },
      { name: 'js', completed: false },
    ],
    number:0,
    show:false,
    resultCode:'',
  },

  // 每次点击按钮 + 1
  addNumber: function(e){
    // 事件处理函数中的this指代的还是当前page对象，获取当前事件绑定的元素 对象， 可以通过e.target
    console.log(e.target)
    // 事件触发方法的时候使用 dataset 传递参数
    console.log(e.target.dataset)
    // setdata可以通知界面发生变化，如果直接赋值数据变了，界面不变
    this.setData({
      number: this.data.number + 1
    })
  },

  // 测试冒泡事件
  outerHandler: function (e){
    console.log('outer....')
  },

  innerHandler: function (e) {
    console.log('inner....')
  },

  // 扫码测试
  saoma: function(e){
    // success 回调中由于this指向问题，所以不能直接this.setData() 
    var that = this;
    wx.scanCode({
      success(res) {
        that.setData({
          resultCode : res.result
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(this)
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

  },

  tapButton: function(e){
    console.log('ssssss')
    console.dir(e.target.dataset)
  }
})