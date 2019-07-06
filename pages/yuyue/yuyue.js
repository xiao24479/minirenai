var util = require("../../utils/util.js");

import { Order } from 'order-model.js';
import { Common } from '../../utils/common.js';

var common = new Common;
var order = new Order;

Page({

  data: {
    showPop: common.showPop,
    array: ['请选择', '计划生育', '宫颈疾病', '妇科炎症', '肌瘤囊肿', '妇科整形', '妇科检查', '不孕不育', '产科', '男科', '胃肠科', '其他',],
    index: 0,
    isshow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadPop();
  },


  //加载弹窗
  _loadPop: function () {

    //医院动态badge
    common.dtnum((random) => {
      this.setData({
        num: random
      })
    })

    //弹窗显示
    common.onlinein((on) => {
      this.setData({
        showPop: on
      })
    })

    //弹窗随机数字
    common.randomNum((random2, random3, random4) => {
      this.setData({
        num2: random2,
        num3: random3,
        num4: random4
      })
    })

  },

  //医院关于
  aboutTap: function () {
    common.aboutTap();
  },

  //号码
  freeTell: function () {
    common.freeTell();
  },

  //关闭弹窗
  swtCenterClose: function () {
    common.swtCenterClose((off) => {
      this.setData({
        showPop: off
      })
    }, (on) => {
      this.setData({
        showPop: on
      })
    })
  },

  //表单提交到小程序后台
  formSubmit: function (e) {
    var objVal = e.detail.value;
    var name = objVal.name;
    var phone = objVal.phone;
    var desc = objVal.desc;
    if (name != '' && phone != '' && desc != '') {
      order.pushOrder(e.detail.value,(res)=>{
        console.info(res);
        if (res.errno == 0) {
          wx.showToast({
            title: '预约成功',
            icon: 'success',
          })
          this.setData({
            name: '',
            phone: '',
            desc: ''
          })
        } else {
          wx.showModal({
            title: '提示',
            content: res.msg,
            showCancel: false,
          })
        }
      })
    } else {
      wx.showModal({
        content: '请正确填写信息',
        showCancel: false,
      })
    }
  },
})