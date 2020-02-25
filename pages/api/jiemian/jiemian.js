Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 一般消息框
   */
  showToast(e){

    // 展示对话框
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })

    // 达到条件后隐藏对话框
    setTimeout(function () {
      wx.hideToast({
        success(){
          console.log('主动关闭了对话框')
        }
      })
    }, 500)

  },

  /**
   * 显示模态对话框
   */
  showModal(e){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 展示loading
   */
  showLoading(e){
    // 展示loading
    wx.showLoading({
      title: '加载中',
    })

    // 达到条件后隐藏loading
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
  },

  showActionSheet(e){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }

 
})