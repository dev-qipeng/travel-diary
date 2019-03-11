// new.js
// TODO 并不是所有非中文字符宽度都为中文字符宽度一半，需特殊处理
// TODO 由于文本框聚焦存在bug，故编辑模式待实现



const util = require('../../utils/util');

// 日记内容类型
const TEXT = 'TEXT';
const IMAGE = 'IMAGE';
const VIDEO = 'VIDEO';

const mediaActionSheetItems = ['拍照', '选择照片', '选择视频'];
const mediaActionSheetBinds = ['chooseImage', 'chooseImage', 'chooseVideo'];

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingMessage: '',
    showMode: 'common',
    showTab: true,
    layoutList: [],
    inputStatus: {
      row: 0,
      column: 0,
      lines: [''],
      mode: 'INPUT',
      auto: false,  // 是否有自动换行


      diary: {
        meta: {},
        list: [],
      },
    },
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
  inputTouch(event) {
    this.setData({ showMode: 'inputText' });
  },
  textInput(event) {
    console.log(event);
    let context = event.detail;
    if (this.data.inputStatus.mode === 'INPUT') {
     
      let text = context.value;
      let len = context.cursor;
      console.log('当前文本长度: ' + len);
    }
   },
  // focusInput(event) {
  //   let isInitialInput = this.data.inputStatus.row == 0 &&
  //     this.data.inputStatus.lines[0].length == 0;
  //   let isAutoInput = this.data.inputStatus.mode == 'INPUT' &&
  //     this.data.inputStatus.auto == true;
  //   let mode = 'EDIT';

  //   if (isInitialInput || isAutoInput) {
  //     mode = 'INPUT';
  //   }

  //   this.setData({ 'inputStatus.mode': mode });
  // },
  // 取消文本编辑
  inputCancel() {
    this.setData({ showMode: 'common' });
    
  },
  // 设置日记数据
  setDiary(diary) {
    let layout = util.listToMatrix(diary.list, layoutColumnSize);
    this.setData({ diary: diary, layoutList: layout });
    this.saveDiary(diary);
  },
  // 结束文本输入
  inputDone() {
    let text = this.data.inputStatus.lines.join('\n');
    let diary = this.data.diary;

    if (text) {
      diary.list.push(this.makeContent(TEXT, text, ''));
      this.setDiary(diary);
    }

    this.inputCancel();
  },

})