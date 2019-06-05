var util = require("../../util/util.js");
Page({

  data: {
    num: 7,
    num2: 1023,
    num3: 924,
    num4: 8,
    swtbgshow: false,
    array: ['请选择', '计划生育', '宫颈疾病', '妇科炎症', '肌瘤囊肿', '妇科整形', '妇科检查', '不孕不育', '产科', '男科', '胃肠科', '其他',],
    index: 0,
    isshow: false
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
  formSubmit: function (e) {
    var that = this;
    var name = e.detail.value.name;
    var phone = e.detail.value.phone;
    var desc = e.detail.value.desc;
    if (name != '' && phone != '' && desc != '') {

      wx.request({
        url: 'https://ai.ra120.com/chat/main.php?m=form_order&a=form_action&j=1',
        header: {
          "Content-Type": "application/json"
        },
        data: {
          vistor_name: name,
          vistor_id: 0,
          phone: phone,
          hid: 105,
          account: desc
        },
        method: 'GET',
        success: function (res) {
          console.info(res);
          if (res.data.message == 1) {
            wx.showToast({
              title: '预约成功',
              icon: 'success',
            })
            that.setData({

              name: '',
              phone: '',
              desc: ''

            })
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.content,
              showCancel: false,
            })
          }
        },
      })
    } else {
      wx.showModal({
        content: '请正确填写信息',
        showCancel: false,
      })
    }
  },
})