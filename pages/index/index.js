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
        var _url = res.result;
        wx.showToast({
          title: '扫描成功',
          icon: 'success',
          duration: 2000
        })
        wx.navigateTo({
          url: _url,
        });
      },
      fail: function () {
        // fail
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
        wx.navigateTo({
          url: '../index/index',
        });
      },
      complete: function (res) { //成功或失败都会调用
        // complete
        console.log("complete")
      }

    })
  },
  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    this.name = options.name
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
