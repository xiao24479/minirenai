import { News } from 'news-model.js';
import { Common } from '../../utils/common.js';
var common = new Common;
var news = new News;

Page({

  data: {
    news: [],
    showPop: common.showPop
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
    this._loadPop();
  },


  /*加载所有数据*/
  _loadData: function (callback) {

    var that = this;

    // 获取新闻列表
    news.getNewsList((res) => {
      that.setData({
        news: res.data,
      });
    });

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
  }

})