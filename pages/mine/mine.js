// mine.js
var app = getApp()
// 自定义标签
var iconPath = "../../images/icons/"
var tabs = [{
    "icon": iconPath + "mark.png",
    "iconActive": iconPath + "markHL.png",
    "title": "推荐",
    "extraStyle": "",
  },
  {
    "icon": iconPath + "collect.png",
    "iconActive": iconPath + "collectHL.png",
    "title": "收藏",
    "extraStyle": "",
  },
  {
    "icon": iconPath + "like.png",
    "iconActive": iconPath + "likeHL.png",
    "title": "喜欢",
    "extraStyle": "",
  },
  {
    "icon": iconPath + "more.png",
    "iconActive": iconPath + "moreHL.png",
    "title": "更多",
    "extraStyle": "border:none;",
  },
]



Page({

  // data
  data: {
    // 展示的tab标签

    tabs: tabs,
    id: "0",
    // 当前选中的标签
    currentTab: "tab1",

    // 高亮的标签索引
    highLightIndex: "0",

    // 模态对话框样式 
    modalShowStyle: "",

    // 待新建的日记标题
    diaryTitle: "",
    userInfo: {
      avatar: "",
      name: "",
      gender: "", // 1, male; 2, female
      username: '',
      location: ""
    },
    // TODO 用户信息

    informations: [{
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543244981510&di=b40c6b5435794fedc13f474853f6e893&imgtype=0&src=http%3A%2F%2Fimg.bendibao.com%2Ftour%2F201210%2F10%2F2012101094222115.JPG",
        text: "我的第一次河南旅游日记",
        date: "2008年01月01日"
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543245061616&di=9dd9d388f58a303960c9a76e05db40e9&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Ffck%2F2018_12%2F383095b87e57c8c_w600_h400.jpg",
        text: "我的第一次山东旅游日记",
        date: "2008年02月02日"
      }
    ],
    informations1: [{
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543293560705&di=b8161116cc612c05f0c94702cbb7c140&imgtype=0&src=http%3A%2F%2Ffile.cits.cn%2F.%2FdestCN%2FuploadDataFile%2Fdestination%2F2014%2F102715%2F20141027_0330512300_600x338.jpg",
        text: "我的第一次香港旅游日记",
        date: "2008年03月03日"
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543293669452&di=df31eb37dd9cdbba9aa53b93d716118b&imgtype=0&src=http%3A%2F%2Fwww.hightravel.cn%2Ffiles%2F2014-12%2Fd20141227134152144080.jpg",
        text: "我的第一次澳门旅游日记",
        date: "2008年04月04日"
      }
    ],
    informations2: [{
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543293749287&di=2a155cc216ec68f91dbba27736dbac2d&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1606%2F794-160616101928.jpg",
        text: "我的第一次美国旅游日记我的第一次旅游日记我的第一次旅游日记",
        date: "2008年05月05日"
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543293855555&di=95e75e75e57d4a31ca4748d7afb3fb0c&imgtype=0&src=http%3A%2F%2Fcn.toursforfun.com%2Fimages%2Fimage%2F20180125%2F20180125105443_52688.png",
        text: "我的第一次英国旅游日记",
        date: "2008年06月07日"
      }
    ],
    informations3: [{
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543293894936&di=57e2c5475b3f3b4ddc7a903b5e12c41e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170308%2F54c45877a3d94b7faa8cebcd3dae2599_th.jpg",
        text: "我的第一次法国旅游日记我的第一次旅游日记我的第一次旅游日记",
        date: "2008年07月07日"
      },
      {
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543293946963&di=4bfc2992075edcf5c5af6b9450160f24&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161210%2F54bfc2afbd4f42cca617b0bf7a9e71cf_th.jpg",
        text: "我的第一次澳洲旅游日记",
        date: "2008年08月08日"
      }
    ]
  },
  onLoad: function() {
    this.setData({
      'userInfo.avatar': app.appData.userInfo.avatarUrl,
      'userInfo.name': app.appData.userInfo.nickName,
      'gender': app.appData.userInfo.gender,
      'userInfo.location': app.appData.userInfo.country + ' ' + app.appData.userInfo.province + '' + app.appData.userInfo.city,
    });
    if (this.data.gender == 1) {
      this.setData({
        'userInfo.gender': '♂'
      })

    } else if (this.data.gender == 2) {
      this.setData({
        'userInfo.gender': '♀'
      })
    }
    // 设置用户名
  },

  // 隐藏模态框
  hideModal() {
    this.setData({
      modalShowStyle: ""
    });
  },

  // 清除日记标题
  clearTitle() {
    this.setData({
      diaryTitle: ""
    });
  },

  onShow: function() {
    this.onLoad();
    this.hideModal();
    this.clearTitle();
  },


  // 点击tab项事件
  touchTab: function(event) {
    wx.switchTab({
      url: '../list/list',
    })
  },
})