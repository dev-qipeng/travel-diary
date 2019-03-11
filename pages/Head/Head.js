// pages/Head/Head.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aid:'',
    index: '',
   
    info:{
      windowHeight: '',
      avatar:'',
      nickName: '',
      username: '',
      sign:'',
      items: [

        { name: '1', value: '男',  },
        { name: '2', value: '女' },

      ]
    },
   
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
    var that=this
    wx.getSystemInfo({
      
      success: function (res) {
        console.log(res.windowHeight)
        var windowHeight = 'info.windowHeight'
        that.setData({
          [windowHeight]: res.windowHeight
        })
      },
    })
    console.log(options);
    var tx ='info.avatar';
    var nickName ='info.nickName'
   var username='info.username'
  var sign = 'info.sign'
    this.setData
      ({
        aid: options.aid,
        [tx]: app.appData.userinfo.avatarUrl,
        [nickName]: app.appData.userinfo.nickName,
      [username]:app.appData.username,
        [sign]: app.appData.sign,
    })
    
    
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onshow: function () {
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
  showAction: function (e) {
    wx.showActionSheet({
      itemList: [' 相册', '拍摄'],
      success: function (res) {
        
        if (res.tapIndex==0) {
          wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album'],
            success: function(res) {
              // tempFilePath可以作为img标签的src属性显示图片
              wx.showLoading({
                title: '上传中',
              })
              const filePath = res.tempFilePaths[0]
              console.log(res)
              app.appData.userinfo.avatarUrl = filePath

              
              wx.redirectTo({
                url: '../me/me'
              })
           } 
          })
          
        }
        else if (res.tapIndex == 1){
          
          wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: [ 'camera'],
            success: function (res) {
              // tempFilePath可以作为img标签的src属性显示图片
              wx.showLoading({
                title: '上传中',
              })
              const filePath = res.tempFilePaths[0]
              console.log(res)
              app.appData.userinfo.avatarUrl = filePath


              wx.redirectTo({
                url: '../me/me'
              })
              // tempFilePath可以作为img标签的src属性显示图片
             
              }
              
            })
          
        }
      }
    })
   
  },
   radioChange: function (e) { 
    console.log( e.detail.value);
     app.setgender(e);
    
   
  },
  inputname:function(e){
    console.log(e);
    app.setname(e)
   
  },
inputsign: function (e) {
    console.log(e);
    app.setsign(e)
   
  }
})