App({
  appData:{
    userInfo: null,
    userinfo:null,
    username:'',
    password:'',
    touxiang:"",
    name:'',
    gender:'',
    aaa:'',
    sign:''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.appData.touxiang = 'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg'
    this.appData.name = '游记';
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
   
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  setname:function(e){
    console.log('更新name')
    this.appData.name = e.detail.value;
  },
  setgender: function (e) {
    console.log('更新sex')
    console.log(e)
   
    this.appData.userinfo.gender = e.detail.value;
  },
   setsign: function (e) {
    console.log('更新签名')
    this.appData.sign = e.detail.value;
  },
  settouxiang:function(res){
    console.log('更新头像')
    this.appData.touxiang = res.data;
  }
})
