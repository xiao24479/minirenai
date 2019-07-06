class Common {

  constructor() {
    // this.num = 7;
    // this.num2 = 1023;
    // this.num3 = 924;
    // this.num4 = 8;
    this.showPop = false;
    this.popintime = 2000000;//打开页面弹窗时间
    this.popnumtime = 2500;//弹窗数字间隔变化时间
    this.popcloseopentime = 20000;//弹窗关闭再打开间隔时间
  }

  //医院关于
  aboutTap() {
    wx.navigateTo({
      url: '../about/about',
    })
  }

  //号码
  freeTell() {
    wx.makePhoneCall({
      phoneNumber: '0577-88308080',
    })
  }

  //医院动态badge
  dtnum(callback) {
    var random = Math.ceil(Math.random() * 10);
    callback && callback(random);
  }

  //弹窗显示
  onlinein(callback) {
    var on = true;
    setTimeout(()=>{
      callback && callback(on);
    }, this.popintime)
  }

  //弹窗随机数字
  randomNum(callback) {
    setInterval(()=>{
      var random2 = Math.ceil(Math.random() * 100 + 1000);
      var random3 = Math.ceil(Math.random() * 100 + 900)
      var random4 = Math.ceil(Math.random() * 10)
      callback && callback(random2, random3, random4);
    }, this.popnumtime)
    
  }

  //关闭弹窗
  swtCenterClose(callback, callback2) {
    var on = true;
    var off = false;
    callback && callback(off);
    setTimeout(()=>{
      callback2 && callback2(on);
    }, this.popcloseopentime)
  }

}

export { Common };