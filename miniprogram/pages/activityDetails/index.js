// pages/activityDetails/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    progressValue: '30%',
    showModal: false,
    background: [
      '/images/icon-prize_001.png',
      '/images/icon-prize_002.png',
      '/images/icon-prize_003.png',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  //游戏规则-打开弹层事件;
  openActivityRule() {
    this.setData({
      showModal: true
    })
  },
  //联系商家;
  toContact(){
     console.log('联系商家')
  },
  // 禁止屏幕滚动;
  preventTouchMove: function () {},

  // 游戏规则-关闭弹层事件;
  back() {
    this.setData({
      showModal: false
    })
  },
  //助力按钮事件;
  onhelp() {
    console.log('助力成功');
    //判断当前用户是否助力过？
    //否：弹出助力成功页面，并标记当前用户已助力成功;
    //是：提醒用户已助力;
  },
  //兑换商店-跳转页面;
  to(e) {
    wx.switchTab({
      url: '/pages/' + e.currentTarget.dataset.name + '/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //打开分享功能;
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})