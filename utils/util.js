const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 小程序是支持commonJs 规范的 
// 也就是说支持 module.exports 和 require (不支持单个exports)
// module.exports 导出，导出的是一个对象
module.exports = {
  formatTime: formatTime
}
