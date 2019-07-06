/**
 * Created by henry on 2019/6/6.
 */
import { Base } from '../../utils/base.js';

class Doctor extends Base {
  constructor() {
    super();
  }

  /*仁爱医院新闻动态*/
  getDocList(callback) {
    var param = {
      url: '?m=doctorApi&a=lists',
      data: {
        appid: wx.getAccountInfoSync().miniProgram.appId,
      },
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Doctor };