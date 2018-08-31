// pages/setNum/setNum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,
    Data: [{ id: 0, value: 'a', countType: '人民币账户' }, { id: 1, value: 'b', countType: '美元账户' }],
    Index: 0,
   

  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);
    this.setData({
      Index: e.detail.value
    })
  },
  submitForm:function(e){
    wx.navigateTo({
      url: '../code/code?countType=' + this.data.Data[this.data.Index].id + '&num=' + e.detail.value.num
    })
   console.log(e.detail.value.num)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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