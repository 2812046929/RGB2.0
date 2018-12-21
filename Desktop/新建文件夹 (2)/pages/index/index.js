//index.js
//获取应用实例
const app = getApp()
Page({

  data: {

  },


  a: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'http://api.heclouds.com/devices/505476502/datapoints?datastream_id=angle&limit=5',
      header: {
        'content-type': 'application/json',
        'api-key': 'kkNAnleI=lmyHlfwNk9wiP2sxSk='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.aaaaaa = res.data.data.datastreams[0]

        console.log(app.globalData.aaaaaa)
        //跳转到天气页面，根据拿到的数据绘图
        wx.navigateTo({
          url: '../logs/logs',
        })
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })


  },
})
