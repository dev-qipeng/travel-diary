var app = getApp(); // pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 获取用户信息
   */
  onGotUserInfo: function(res) {
    console.log(res, "userInfo")
    const userInfo = res.detail.userInfo;
    app.appData.userInfo = userInfo;
    wx.setStorageSync("userInfo", userInfo);
    wx.navigateBack({
      url: '../index/index'
    })
    // wx.redirectTo({ url: "../index/index" })
  },

})