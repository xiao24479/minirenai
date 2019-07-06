//app.js
import { Init } from 'utils/init.js';
import { Token } from 'utils/token.js';
var init = new Init();
var token = new Token();
App({
  onLaunch: function () {
    init.openLog();
    token.verify();
  },

  onShow: function () {

  },


})