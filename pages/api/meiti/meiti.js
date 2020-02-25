// pages/api/meiti/meiti.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:[]
  },

  /**
   * 选择图片
   */
  chooseImage(e){
    // 一次最多可选的图片数量
    let canChooseNumber = 3 - this.data.imageList.length
    // 解决回调函数中 this 指向问题
    var _this = this;
    wx.chooseImage({
      count: canChooseNumber,
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], // 图片来源，相册 or 拍照
      success(res) {
        // tempFilePath 可以作为 img 标签的 src 属性显示图片
        // tempFilePaths 是一个数组
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        _this.setData({
          imageList: _this.data.imageList.concat(tempFilePaths)
        })
      }
    })
  },

  /**
   * 删除指定位置的图片
   */
  delImage(e){
    // 注意splice方法从指定索引删除指定个数的的元素，返回值是被删除元素的数组集合
    // 所以如果只是香删除的话，不要拿返回值，直接调用删除就可以了
    this.data.imageList.splice(e.target.dataset.index, 1);
    this.setData({
      imageList: this.data.imageList
    })
  },

  /**
   * 预览图片
   */
  previewImage(e){
    console.log(this.data.imageList)
    wx.previewImage({
      current: this.data.imageList[e.target.dataset.index], // 当前显示图片的http链接
      urls: this.data.imageList // 需要预览的图片http链接列表
    })
  },

  /**
   * 上传
   */
  
  uploadImage(){
    console.log('=======')
    wx.uploadFile({
      url: 'http://localhost:8090/test/uploadImg', //仅为示例，非真实的接口地址
      filePath: this.data.imageList[0],
      name: 'img',
      formData: {
        'username': '许强',
        'age':18
      },
      success(res) {
        const data = res.data
        console.log(data)
      },
      complete(res){
        console.log(res)
      }
    })
  }
})