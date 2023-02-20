// pages/activity/index.js
const {
    formatDate
} = require('../../common/formatDate');
const app = getApp();
Page({
    data: {
        current: 0,
        activityTypes: ['周期活动', '日常活动'],
        activityList: [],
        loadingStatus: true,
        pageSize: 5,
        pageNum: 1,
        showEndWarn: false,
    },

    //切换顶部tab栏;
    async switchTab(e) {
        let current = e.currentTarget.dataset.id;
        this.setData({
            current
        });
        this.resetPageNum();
        this.hiddenEndWarn();
        this.openLoading();
        await this.getActivityList();
        this.closeLoading();
    },
    //触摸屏幕切换页面;
    async bindchange(e) {
        let current = e.detail.current;
        this.setData({
            current
        })
        this.resetPageNum();
        this.hiddenEndWarn();
        this.openLoading();
        await this.getActivityList();
        this.closeLoading();
    },

    //跳转页面 把当前活动_id传给活动详情页面;
    to(e) {
        wx.navigateTo({
            url: '/pages/activityDetails/index?_id=' + e.currentTarget.dataset.id,
        })
    },

    async onLoad(options) {
        //关闭分享功能;
        app.hideShareMenu();
        //渲染活动列表;
        await this.getActivityList();
        //关闭加载动画;
        this.closeLoading();
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
        // let afterSortList = this.handleListSort(PendingData);
        let finalData = this.handleDateFormat(PendingData);
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
        // let arr = [];
        // let beforeStartArr = data.filter(item => item.activityStatus == 0).sort((a, b) => a.activityStartTime - b.activityStartTime) //未开始;
        data.filter(item => item.activityStatus == 1 && !item.participateStatus).sort((a, b) => a.activityEndTime - b.activityEndTime) //未参与;
        data.filter(item => item.activityStatus == 1 && item.participateStatus).sort((a, b) => a.activityEndTime - b.activityEndTime) //已参与;
        // let onendArr = data.filter(item => item.activityStatus == 2).sort((a, b) => b.activityEndTime - a.activityEndTime) //已结束;
        // arr.push(...onparticipateArr, ...beforeParticipateArr, ...beforeStartArr, ...onendArr);
        // return arr
    },

    //处理时间格式;
    handleDateFormat(data) {
        data.forEach(item => {
            item.activityStartTime = formatDate(item.activityStartTime);
            item.activityEndTime = formatDate(item.activityEndTime);
        })
        return data
    },

    //开启加载动画;
    openLoading() {
        this.setData({
            loadingStatus: true
        })
    },

    //关闭加载动画;
    closeLoading() {
        this.setData({
            loadingStatus: false
        })
    },

    //隐藏到底提示语;
    hiddenEndWarn() {
        this.setData({
            showEndWarn: false
        })
    },

    //显示到底提示语;
    showEndWarn() {
        this.setData({
            showEndWarn: true
        })
    },
    //重置pageNum;
    resetPageNum(){
        this.setData({
            pageNum:1
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
    async onShow() {
        //渲染活动列表;
        await this.getActivityList();
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
    async onPullDownRefresh() {
        this.resetPageNum();
        this.hiddenEndWarn();
        this.openLoading();
        await this.getActivityList();
        this.closeLoading();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    //
    async onReachBottom() {
        let activityList = this.data.activityList;
        let loadingStatus = this.data.loadingStatus;
        let showEndWarn = this.data.showEndWarn;
        let pageNum = this.data.pageNum;
        let pageSize = this.data.pageSize;

        if (loadingStatus || showEndWarn) return;
        pageNum++;
        this.setData({
            pageNum,
        })
        this.openLoading();
        //调用接口请求下一条数据？
        const activityType = this.data.current === 0 ? 1 : 2;
        const res = await wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getList',
                activityType,
                pageSize,
                pageNum,
            }
        })
        const data = res.result.data;
        if (data.length < pageSize) {
            this.showEndWarn();
        }
        let finalData = await this.handleData(data);
        activityList.push(...finalData);
        this.setData({
            activityList,
        })
        this.closeLoading();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})