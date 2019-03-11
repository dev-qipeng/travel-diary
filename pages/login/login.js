var app=getApp();// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
username:null,
password:null, 
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
  
  },
  /**
   * 获取用户信息
   */
  onGotUserInfo: function (res) {
    console.log(res, "userInfo")
    const userInfo = res.detail.userInfo;
    app.appData.userInfo = userInfo;
    wx.setStorageSync("userInfo", userInfo);
    wx.navigateBack({
      url: '../index/index'
    })
    // wx.redirectTo({ url: "../index/index" })
  },
  denglu:function(){
    wx.getUserInfo({
      success(res) {
        console.log(res.userInfo)
       
       app.appData.userinfo =res.userInfo
         wx.switchTab({ url: "../index/index" })
      },
      fail() {
        console.log('登录失败！' + res.errMsg)

      },
    })
    }, 
      
  zuche:function(){
    wx.redirectTo({ url: "" })
  },


  loginBtnClick:function(){
    app.appData.username = this.data.username;
     app.appData. password= this.data.password;
      this.denglu()
      },
     
    
  



  usernameInput:function(event){
    console.log(event) 
    this.setData({
      username:event.detail.value
    })
  },
  passwordInput: function (event) {
   
    console.log(event)
    this.setData({
      password: event.detail.value
    })
  },
})