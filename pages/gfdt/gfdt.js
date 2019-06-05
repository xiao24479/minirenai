Page({

  data: {
    num: 7,
    num2: 1023,
    num3: 924,
    num4: 8,
    swtbgshow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    that.dtnum();

    setTimeout(function () {
      that.onlinein()
    }, 20000)

    setInterval(function () {
      that.randomNum()
    }, 2500)
  },
  aboutTap: function () {
    wx.navigateTo({
      url: '../about/about',
    })
  },
  freeTell: function () {
    wx.makePhoneCall({
      phoneNumber: '0577-88308080',
    })
  },

  onlinein: function () {
    this.setData({
      swtbgshow: true
    })
  },

  dtnum: function () {
    var random = Math.floor(Math.random() * 10);
    this.setData({
      num: random
    })
  },

  randomNum: function () {
    var that = this
    var random2 = Math.floor(Math.random() * 100 + 1000);
    var random3 = Math.floor(Math.random() * 100 + 900)
    var random4 = Math.floor(Math.random() * 10)
    that.setData({
      num2: random2,
      num3: random3,
      num4: random4
    })
  },
  swtCenterClose: function () {
    var that = this
    this.setData({
      swtbgshow: false
    })
    var autoTimer = setTimeout(function () {
      that.setData({
        swtbgshow: true
      })
    }, 25000)
  },
  ondtTap: function (event) {
    wx.navigateTo({
      url: "gfdt-detail/gfdt-detail"
    })
  },
})