// pages/activity/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityTypes: ['周期活动', '日常活动'],
    current: 0,
    entryText:'查看详情',
    activityLimitList: [{
        id: 1,
        imgUrl:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
        startTime: '2023.01.20',
        endTime: '2023.02.01'
      },
      {
        id: 2,
        imgUrl:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
        startTime: '2023.01.20',
        endTime: '2023.02.01'
      },
      {
        id: 3,
        imgUrl:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
        startTime: '2023.01.20',
        endTime: '2023.02.01'
      },
      {
        id: 4,
        imgUrl:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
        startTime: '2023.01.20',
        endTime: '2023.02.01'
      },
      {
        id: 5,
        imgUrl:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
        startTime: '2023.01.20',
        endTime: '2023.02.01'
      },
      {
        id: 6,
        imgUrl:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
        startTime: '2023.01.20',
        endTime: '2023.02.01'
      }
    ],
    activityDailyList: [{
        id: 1,
        imgUrl:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
        startTime: '2023.01.20',
        endTime: '2023.02.01'
      },
      {
        id: 2,
        imgUrl:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
        startTime: '2023.01.20',
        endTime: '2023.02.01'
      }
  ]
  },
  tabSelect(e) {
    let current = e.currentTarget.dataset.id;
    this.setData({
      current: current
    })
  },
  to(e) {
    wx.navigateTo({
      url: '/pages/activityDetails/index?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //判断当前登录状态,显示不同的按钮文本;
       //在全局中拿到用户登录信息;
       //如果没有登录显示，查看详情；
       //如果登录了，判断是否参与活动，参与->显示已参与 未参与->显示查看详情；
       
    
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