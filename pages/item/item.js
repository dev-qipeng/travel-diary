var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    diary:undefined,
    mediaList: [],
    previewMode: false,
    avatar:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: app.appData.userinfo.avatarUrl
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
  // 进入预览模式
  yulan(event) {
    console.log(event)
    let url = event.target.dataset.src;
    let urls = this.data.mediaList.map(media => media.content);
    let previewIndex = urls.indexOf(url);
    this.setData({ previewMode: true, previewIndex });

   
  },
  // 退出预览模式
  leavePreviewMode() {
    this.setData({ previewMode: false, previewIndex: 0 });
  },
})