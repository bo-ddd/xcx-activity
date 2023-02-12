// pages/activity/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        activityTypes: ['周期活动', '日常活动'],
        entryText: '查看详情',
        activityList:[]
    },

    //切换顶部tab栏;
    switchTab(e) {
        let current = e.currentTarget.dataset.id;
        this.setData({
            current
        });
        this.getActivityList()
    },

    //跳转页面 把当前活动_id传给活动详情页面;
    to(e) {
        wx.navigateTo({
            url: '/pages/activityDetails/index?_id=' + e.currentTarget.dataset.id,
        })
    },

   async onLoad(options) {
      await this.getActivityList();
     
        //判断当前登录状态,显示不同的按钮文本;
        //在全局中拿到用户登录信息;
        //如果没有登录, 显示查看详情；
        //如果登录了，判断是否参与活动，参与->显示已参与 未参与->显示查看详情；
    },

    // 获取活动列表  type: 1; 周期活动   2日常活动；

  
    async getActivityList() {
        const activityType = this.data.current === 0 ? 1 : 2;
        const res = await wx.cloud.callFunction({
            // 云函数名称
            name: 'activity',
            // 传给云函数的参数
            data: {
                type: 'getList',
                activityType,
            }
        })
        this.setData({
            activityList: res.result.data
        })
        console.log(this.data.activityList)
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