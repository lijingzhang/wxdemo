//index.js


Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    grids: ['提现', '话费充值', '转账', '兑汇', '理财', '生活', '充值','汇率', '账单查询']
  },
  recognizeCode: function () {
    this.setData({
      isShowMsg: true,
      isShowResult: false,
      recognizeMsg: "",
    })
    var that = this
    //小程序API
    wx.scanCode({
      //扫描条形码ISBN
      success: function (res) {
        // success
        console.log(res.result );
        // var url = '/';
        wx.navigateTo({
          url: '../center/center'
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }

    })
  }
})
