// pages/activity/index.js
const commonFun = require('../../common/formatDate');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        activityTypes: ['周期活动', '日常活动'],
        activityList: [],
        loadingStatus: true,
    },

    //切换顶部tab栏;
    switchTab(e) {
        console.log(e);
        let current = e.currentTarget.dataset.id;
        this.setData({
            current
        });
        this.openLoading();
        this.getActivityList();
        this.closeLoading();
    },
    //触摸屏幕切换页面;
    bindchange(e) {
        let current = e.detail.current;
        this.setData({
            current
        })
        this.openLoading();
        this.getActivityList();
        this.closeLoading();
    },

    //跳转页面 把当前活动_id传给活动详情页面;
    to(e) {
        wx.navigateTo({
            url: '/pages/activityDetails/index?_id=' + e.currentTarget.dataset.id,
        })
    },

    async onLoad(options) {
        await this.getActivityList();
        this.closeLoading();
        //判断当前登录状态,显示不同的按钮文本;
        //在全局中拿到用户登录信息;
        //如果没有登录, 显示查看详情；
        //如果登录了，判断是否参与活动，参与->显示已参与 未参与->显示查看详情；
    },

    // 获取活动列表;  
    //type: 1-周期活动   2-日常活动
    async getActivityList() {
        const activityType = this.data.current === 0 ? 1 : 2;
        const res = await wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getList',
                activityType,
            }
        })
        let activityList = await this.handleData(JSON.parse(JSON.stringify(res.result.data)))
        this.setData({
            activityList
        })
    },

    //处理返回的数据结构;
    async handleData(data) {
        let PendingData = await this.addParticipateStatusField(data);
        let afterSortList = this.handleListSort(PendingData);
        let finalData = this.handleDateFormat(afterSortList);
        return finalData
    },

    //获取当前用户参与的活动列表;
    async getParticipateList() {
        let participateList = [];
        const res = await wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getParticipateListByUserId'
            }
        })
        const arr = res.result.data;
        console.log(arr)
        if (arr.length) {
            arr.forEach(item => {
                participateList.push(item.activityId)
            })
        }
        return participateList
    },
    //添加用户参与状态字段;
    async addParticipateStatusField(data) {
        const participateList = await this.getParticipateList();
        data.forEach(item => {
            item.participateStatus = participateList.includes(item._id);
        })
        return data
    },
    //对活动列表进行排序，根据活动状态(进行中、未参加、已参加、已结束);
    handleListSort(data) {
        let arr = [];
        let beforeStartArr = data.filter(item => item.activityStatus == 0).sort((a, b) => a.activityStartTime - b.activityStartTime) //未开始;
        let beforeParticipateArr = data.filter(item => item.activityStatus == 1 && !item.participateStatus).sort((a, b) => a.activityEndTime - b.activityEndTime) //未参与;
        let onparticipateArr = data.filter(item => item.activityStatus == 1 && item.participateStatus).sort((a, b) => a.activityEndTime - b.activityEndTime) //已参与;
        let onendArr = data.filter(item => item.activityStatus == 2).sort((a, b) => b.activityEndTime - a.activityEndTime) //已结束;
        arr.push(...onparticipateArr, ...beforeParticipateArr, ...beforeStartArr, ...onendArr);
        return arr
    },
    handleDateFormat(data) {
        data.forEach(item => {
            item.activityStartTime = commonFun.formatDate(item.activityStartTime);
            item.activityEndTime = commonFun.formatDate(item.activityEndTime);
        })
        return data
    },
    openLoading() {
        this.setData({
            loadingStatus: true
        })
    },
    closeLoading() {
        this.setData({
            loadingStatus: false
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