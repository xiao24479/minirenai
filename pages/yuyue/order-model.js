/**
 * Created by henry on 2019/6/6.
 */
import { Base } from '../../utils/base.js';

class Order extends Base {
  constructor() {
    super();
  }

  /*推送预约信息*/
  pushOrder(params,callback) {
    var param = {
      url: '?m=api&a=formOrder',
      data: {
        vistor_name: params.name,
        vistor_id: 0,
        phone: params.phone,
        appid: wx.getAccountInfoSync().miniProgram.appId,
        account: params.desc
      },
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Order };