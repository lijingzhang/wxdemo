// pages/code/code.js
const app = getApp()
var QR = require("../../utils/qrcode.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    username:'',
    qrMsg: '',
    recognizeMsg: '',
    isShowMsg: false,
    isShowResult: false,
    showClear: true,
    qrlogin: false,
    placeholder: '/pages/payment/payment',
 
  },
  onShow: function (e) {
    // console.log(e.detail.value.url); 
    let url = e.detail.value.url || this.data.placeholder;
    wx.showToast({
      title: '生成中',
      icon: 'loading',
      duration: 2000
    })
    let that = this;
    let timer = setTimeout(function () {
      let size = that.setCanvasSize();
      // console.log(url);
      that.createQRcode(url, 'mycanvas', size.w, size.h)
      wx.hideToast(timer);
    }, 2000)

   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        username: app.globalData.userInfo.nickName,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          username: res.userInfo.nickName,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            username: res.userInfo.nickName,
            hasUserInfo: true
          })
        }
      })
    }
    console.log(options);//获取地址参数
    this.data.placeholder = '../payment/payment?countType=' + options.countType + '&num=' + options.num +'&username='+this.data.username ;
    let size = this.setCanvasSize();
    let url = this.data.placeholder;
    this.createQRcode(url, 'mycanvas', size.w, size.h)
    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      username: e.detail.userInfo.nickName,
      hasUserInfo: true
    })
    console.log(this.data.username)
  },
  createQRcode(url, canvasId, canvasWidth, canvasHeight) {
    QR.qrApi.draw(url, canvasId, canvasWidth, canvasHeight)
  },
  setCanvasSize() {
    let size = {};
    let res = wx.getSystemInfoSync();
    // console.log(res)
    let scale = 1/2;
    let width = res.windowWidth * scale;
    let height = width;
    size.w = width;
    size.h = height;
    return size;

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