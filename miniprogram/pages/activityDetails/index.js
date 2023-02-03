// pages/activityDetails/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    progressValue: '30%',
    showModal: false,
    background: [
      'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-prize_01.png?sign=8d30ac3a7e9887eee3f747352e1f5605&t=1675308888',
      'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-prize_02.png?sign=8520afe547739e071c45519fb671d765&t=1675308908',
      'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-prize_03.png?sign=35288a6f5c7c1aa09a8ee2d1672fb097&t=1675308917',
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
    wx.navigateTo({
      url: '/pages/' + e.currentTarget.dataset.name + '/index',
    })
  },
  //分享功能;
  onShareAppMessage(e) {
    console.log(e)
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