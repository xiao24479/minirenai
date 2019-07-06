import { Common } from '../../utils/common.js';
var common = new Common;

Page({

  data: {
    showPop: common.showPop,
    currentData: 0,
    latitude: 22.520366,
    longitude: 114.041346,
    scale: 19,
    markers: [{
      id: 1,
      latitude: 22.520366,
      longitude: 114.041346,
      name: '深圳仁爱医院',
      scale: 20,
    }],
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


  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
})