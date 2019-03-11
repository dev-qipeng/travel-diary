// pages/me/me.js
var app=getApp()



Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:'',
    
    Info :
   [{
      title:'头像',
    
     

    },
    {
      title: '名字',
       info: ''},
    {
      title: '账号',
      info: ""
    },
    {
      title: '性别',
      info: ""
   },
        {
          title: '个性签名',
          info: ""
        },
     {
          title: '设置',
          info: ""
        },],
    avatar: 
      '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      avatar: app.appData.userinfo.avatarUrl,
      'Info[2].info': app.appData.username,
      'Info[1].info': app.appData.userinfo.nickName,
      'Info[4].info': app.appData.sign,
    })
     
    if (app.appData.userinfo.gender==1) {
          this.setData({
        'Info[3].info': '男'
      })
    }
    else if (app.appData.userinfo.gender==2)  {
          this.setData({
        'Info[3].info': '女'
      })
    }
  
    
   
    
    
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
    console.log('加载onshow')
    this.onLoad();
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

  //  previewImg: function (e) 
  //  {
  //    console.log(e)
  //    var imgArr = this.data.imgArr; 
  //    wx.previewImage
  //    ({ 
  //        urls: imgArr
        
  //      })
  //   }
    previewImg: function (e) {
     
      console.log(e.currentTarget.dataset.aid);
      var aid= e.currentTarget.dataset.aid;
      var title = e.currentTarget.dataset.title;
      wx.navigateTo({
        url: '../Head/Head?aid='+aid
      })
      wx.setNavigationBarTitle({ title: title })
    }
    
})