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
        loadingStatus: true,
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

    //获取参与活动列表。拿到有活动id。连表查询该活动的所有信息
    getParticipateListApi() {
        return new Promise((resolve, reject) => {
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
        console.log('--------我是返回数据----------');  
        console.log(res);
        let list = res.result.data.list
        let participateActivities = [];
        console.log(list);
        this.setData({
            participateActivities:list
        })
        list.forEach(item => {
            if(item.userParticipatingList.length){
                ///参与的活动
                participateActivities.push(item)
            }        
        });
        _this.setData({
            participateActivityList: participateActivities
        })
        console.log(this.data.participateActivityList);
        await _this.participateState()
    },
    //参与的活动状态
    participateState() {
        let waitActivity = this.data.participateActivityList.filter(item => item.activityStatus == 1)
        let endActivity = this.data.participateActivityList.filter(item => item.activityStatus == 2)
        console.log(waitActivity);
        console.log(endActivity);
        this.setData({
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
    closeLoading() {
        this.setData({
            loadingStatus: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        ///首屏优化
        await this.getParticipateActivities();
        await this.closeLoading();
      
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