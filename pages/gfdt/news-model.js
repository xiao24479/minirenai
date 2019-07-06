/**
 * Created by henry on 2019/6/6.
 */
import { Base } from '../../utils/base.js';

class News extends Base {
  constructor() {
    super();
  }

  /*仁爱医院新闻动态*/
  getNewsList(callback) {
    var param = {
      url: '?m=articleApi&a=lists',
      data: {
        appid: wx.getAccountInfoSync().miniProgram.appId,
        catid: 253,
        page: 0,
        limit: 10
      },
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { News };