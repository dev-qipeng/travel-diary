// entry.js

const toolbar = [
  '../../images/nav/download.png', '../../images/nav/fav.png',
  '../../images/nav/share.png', '../../images/nav/comment.png',
];
const app = getApp();

Page({
  data: {
    id: '',
    avatar: '',
    // 当前日志详情
    diary: undefined,

    // 右上角工具栏
    toolbar: toolbar,

    // 图片预览模式
    previewMode: false,

    // 当前预览索引
    previewIndex: 0,

    // 多媒体内容列表
    mediaList: [],
  },

  onLoad: function(params) {
    this.getDiary(params);
    this.getMediaList();
    this.setData({
      "avatar": app.appData.userInfo.avatarUrl
    })
  },
  onShow: function() {
    wx.setNavigationBarTitle({
      title: this.data.diary.meta.title,
    })
  },

  // 加载日记
  getDiary(params) {
    console.log("Loading diary data...", params);

    var id = params["id"],
      diary;
    app.getDiaryList(list => {
      if (typeof id === 'undefined') {
        diary = list[0];
      } else {
        diary = list[id];
      }
    });

    this.setData({
      id: id,
      diary: diary,
    });
  },

  // 过滤出预览图片列表
  getMediaList() {
    if (typeof this.data.diary !== 'undefined' &&
      this.data.diary.list.length) {
      this.setData({
        mediaList: this.data.diary.list.filter(
          content => content.type === 'IMAGE'),
      })
    }
  },

  // 进入预览模式
  yulan(event) {
    console.log(event)
    let url = event.target.dataset.src;
    let urls = this.data.mediaList.map(media => media.content);
    let previewIndex = urls.indexOf(url);

    this.setData({
      previewMode: true,
      previewIndex
    });
  },

  // 退出预览模式
  leavePreviewMode() {
    this.setData({
      previewMode: false,
      previewIndex: 0
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(options) {　　
    var that = this;

    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {　　　　
      title: '我的游记：'+that.data.diary.meta.title, 
      path: '/pages/entry/entry?id=' + that.data.id
    };
    　　
    if (options.from == 'button') {
      let id = options.target.id;
      console.log(options);
      // 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/entry/entry?id=' + id;　　
    } 
    // 返回shareObj　　
    return shareObj;
  }

})