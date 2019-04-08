const config = require('config');
const diaries = require('demo/diaries');

App({
  appData: {
    // 设备信息，主要用于获取屏幕尺寸而做适配
    deviceInfo: null,
    // 本地日记缓存列表 + 假数据
    // TODO 真实数据同步至服务端，本地只做部分缓存
    diaryList: null,
    // 本地日记缓存
    localDiaries: null,
    userInfo: null,
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    this.appData.touxiang = 'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg'
    this.appData.name = '游记';
  },


  setname: function(e) {
    console.log('更新name')
    this.appData.name = e.detail.value;
  },
  setgender: function(e) {
    console.log('更新sex')
    console.log(e)
    this.appData.userinfo.gender = e.detail.value;
  },
  setsign: function(e) {
    console.log('更新签名')
    this.appData.sign = e.detail.value;
  },
  settouxiang: function(res) {
    console.log('更新头像')
    this.appData.touxiang = res.data;
  },


  // 获取本地全部日记列表
  getDiaryList(cb) {
    console.log(cb);
    var that = this;

    if (this.appData.diaryList) {
      typeof cb == 'function' && cb(this.appData.diaryList);
    } else {
      let list = [];

      this.getLocalDiaries(storage => {
        // 本地缓存数据
        for (var k in storage) {
          list.push(storage[k]);
        }
      });

      // 本地假数据
      list.push(...diaries.diaries);
      that.appData.diaryList = list;
      typeof cb == 'function' && cb(that.appData.diaryList)
    }
  },

  // 获取本地日记缓存
  getLocalDiaries(cb) {
    var that = this;

    if (this.appData.localDiaries) {
      typeof cb == 'function' && cb(this.appData.localDiaries);
    } else {
      wx.getStorage({
        key: config.storage.diaryListKey,
        success: (res) => {
          that.appData.localDiaries = res.data;
          typeof cb == 'function' && cb(that.appData.localDiaries);
        },
        fail: (error) => {
          that.appData.localDiaries = {};
          typeof cb == 'function' && cb(that.appData.localDiaries);
        }
      });
    }
  },

  // 获取当前设备信息
  getDeviceInfo: function(callback) {
    var that = this;

    if (this.appData.deviceInfo) {
      typeof callback == "function" && callback(this.appData.deviceInfo)
    } else {
      wx.getSystemInfo({
        success: function(res) {
          that.appData.deviceInfo = res;
          typeof callback == "function" && callback(that.appData.deviceInfo)
        }
      })
    }
  },
})