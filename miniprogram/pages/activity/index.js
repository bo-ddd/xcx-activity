// pages/activity/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      activityList:[
        {
          id:1,
          title:'活动一',
          startTime:'2023.01.20',
          endTime:'2023.02.01'
        },
        {
         id:2,
         title:'活动二',
         startTime:'2023.01.20',
         endTime:'2023.02.01'
       },
       {
         id:3,
         title:'活动三',
         startTime:'2023.01.20',
         endTime:'2023.02.01'
       },
       {
        id:4,
        title:'活动四',
        startTime:'2023.01.20',
        endTime:'2023.02.01'
      },
      {
        id:5,
        title:'活动五',
        startTime:'2023.01.20',
        endTime:'2023.02.01'
      },
      {
        id:6,
        title:'活动六',
        startTime:'2023.01.20',
        endTime:'2023.02.01'
      }
      ]

    },

    to(e){
      wx.navigateTo({
        url: '/pages/activityDetails/index?id=' + e.currentTarget.dataset.id,
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
       
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