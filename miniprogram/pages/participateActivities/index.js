// pages/participateActivities/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentData: 0,
        notStartedActivityList: [],
        waitActivityList: [],
        endActivityList: [],
        participateActivityList: [],
        loaded: false
    },

    bindchange: function (e) {
        const that = this;
        that.setData({
            currentData: e.detail.current
        })
    },
    //点击切换，滑块index赋值
    checkCurrent: function (e) {
        const that = this;
        if (that.data.currentData === e.target.dataset.current) {
            return false;
        } else {

            that.setData({
                currentData: e.target.dataset.current
            })
        }
    },

    getParticipateListApi() {
        return new Promise((resolve, reject) => {
            // let currentData = this.data.currentData
            wx.cloud.callFunction({
                name: 'activity',
                data: {
                    type: 'getParticipateList',
                },
            }).then(async res => {
                resolve(res);
            })
        })
    },

    //获取参与活动列表
    async getParticipateActivities() {
        let _this = this;
        let res = await this.getParticipateListApi();
        let list = res.result.data.list
        let participateActivities = [];
        list.forEach(item => {
            console.log(item);
            participateActivities.push(item.userParticipatingList[0])
        });
        _this.setData({
            participateActivityList: participateActivities
        })
        console.log(_this.data.participateActivityList);
        await _this.participateState()
    },
    //参与的活动状态
    participateState() {
        let notStartedActivity = this.data.participateActivityList.filter(item => item.activityStatus == 0)
        let waitActivity = this.data.participateActivityList.filter(item => item.activityStatus == 1)
        let endActivity = this.data.participateActivityList.filter(item => item.activityStatus == 2)
        console.log(notStartedActivity);
        console.log(waitActivity);
        this.setData({
            notStartedActivityList: notStartedActivity,
            waitActivityList: waitActivity,
            endActivityList: endActivity,
        })
    },
    toDetail(e) {
        console.log(e);
        //传入活动id跳转到对应活动页
        wx.navigateTo({
            url: '/pages/activityDetails/index?_id=' + e.currentTarget.dataset.id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        ///首屏优化
        //获取参与活动列表。拿到有活动id。连表查询该活动的所有信息
        wx.showLoading({
            title: '加载中...',
        })
        await this.getParticipateActivities();

        wx.hideLoading();

        this.setData({
            loaded: true
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