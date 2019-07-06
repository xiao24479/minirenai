// 引用使用es6的module引入和定义
// 全局变量以g_开头
// 私有函数以_开头

import { Config } from 'config.js';

class Token {
  constructor() {
    this.verifyUrl = Config.apiUrl + '?m=api&a=verifyToken';
    this.tokenUrl = Config.apiUrl + '?m=api&a=getToken';
  }

  verify() {
    var token = wx.getStorageSync('token');
    if (!token) {
      this.getTokenFromServer();
    }
    else {
      this._veirfyFromServer(token);
    }
  }

  _veirfyFromServer(token) {
    var that = this;
    wx.request({
      url: that.verifyUrl,
      method: 'GET',
      data: {
        token: token
      },
      success: function (res) {
        var valid = res.data.errno;
        if (valid != 0) {
          that.getTokenFromServer();
        }
      }
    })
  }

  getTokenFromServer(callBack) {
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url: that.tokenUrl,
          method: 'GET',
          data: {
            appid: wx.getAccountInfoSync().miniProgram.appId,
            code: res.code
          },
          success: function (res) {
            wx.setStorageSync('token', res.data.data.token);
            callBack && callBack(res.data.data.token);
          }
        })
      }
    })
  }
}

export { Token };