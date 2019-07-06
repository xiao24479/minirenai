import { Config } from 'config.js';

class Init {
  constructor() {
    this.openLogUrl = Config.apiUrl + '?m=flowApi&a=open_count';
  }

  openLog() {
    wx.request({
      url: this.openLogUrl + '/chat/main.php?m=flowApi&a=open_count',
      method: "POST",
      dataType: 'json',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        appid: wx.getAccountInfoSync().miniProgram.appId,
        event: '打开小程序'
      },
      success: function (res) {
         console.log(res)
      }
    })
  }

}

export { Init };