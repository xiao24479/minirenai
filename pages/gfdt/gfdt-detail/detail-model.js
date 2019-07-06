/**
 * Created by henry on 2019/6/6.
 */
import { Base } from '../../../utils/base.js';

class Detail extends Base {
  constructor() {
    super();
  }

  /*获取新闻详情*/
  showDetail(aid,callback) {
    var param = {
      url: '?m=articleApi&a=show',
      data: {
        aid: aid,
      },
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Detail };