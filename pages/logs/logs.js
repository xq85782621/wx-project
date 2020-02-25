// 小程序是支持commonJs 规范的 
// 也就是说支持 module.exports 和 require (不支持单个exports)
// 引入 util 模块
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
