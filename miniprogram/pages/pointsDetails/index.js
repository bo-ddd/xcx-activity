// pages/pointsDetails/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isRefresh: false,
        currentTab: 0,
        taskList: [
            {
            id:1,
          name: '热门推荐',
        }, {
            id:2,
          name: '家有萌宠',
        }, {
            id:3,
          name: '数码科技',
        }, {
            id:4,
          name: '潮流女装',
        },{
            id:5,
          name: '美妆达人',
        },
    ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    details(e){
        console.log(e.currentTarget.dataset.uid);
    },
     handleClick(e) {
     console.log(e);
    let currentTab = e.currentTarget.dataset.index
    this.setData({
        currentTab
    })
   
  },
  handleSwiper(e) {
    let {
      current,
      source
    } = e.detail;
    if (source === 'autoplay' || source === 'touch') {
      const currentTab = current
      this.setData({
        currentTab
      })
    }
  },
  handleTolower(e){
    wx.showToast({
      title: '到底啦'
    })
  },
  refresherpulling() {
    wx.showLoading({
      title: '刷新中'
    })
    setTimeout(() => {
      this.setData({
        isRefresh: false
      })
      wx.showToast({
        title: '加载完成'
      })
    }, 1500)
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