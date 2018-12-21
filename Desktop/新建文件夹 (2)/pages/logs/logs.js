var app = getApp()
Page({

  data: {
    a: [],
  },

 b: function () {
   var length = app.globalData.aaaaaa.datapoints.length
   for (var i = 0; i < length; i++) {
    this.data.a[i] = app.globalData.aaaaaa.datapoints[i].value
    this.setData({
      a: this.data.a
    })
   console.log(this.data.a)
   }
  }
   
})