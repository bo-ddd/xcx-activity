// pages/launchActivities/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        form: {
            shopname: '',
            activitytitle: '',
        },
        activityStatus: ['未开始', '待开奖', '已结束'],
        activitList: [],
        currentData: 0
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getActivityList()
        // let app = getApp()
        // app.showLoading()
    },

    //点击切换，改变滑块index值
    checkCurrent: function (e) {
        const that = this;

        if (that.data.currentData === e.target.dataset.current) {
            return false;
        } else {

            that.setData({
                currentData: e.target.dataset.current
            })
            this.getActivityList()
        }
    },
    // 滑动改变滑块index值
    bindchange(e) {
        const that = this;
        that.setData({
            currentData: e.detail.current
        })
        this.getActivityList()
    },
    //创建活动成功跳回活动页
    to() {
        wx.navigateTo({
            url: '/pages/launchActivities/index',
        })
    },
    //跳转编辑活动
     async updataTo(e) {
         console.log(e)
        await wx.navigateTo({
            url: '/pages/updateActivities/index?id=' + e.currentTarget.dataset._id,
        })
    },
    // 获取活动列表
    getActivityList() {
        let currentData = this.data.currentData
        let _this = this
        // console.log(typeof currentData);
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getActivityList',
                activityStatus: Number(currentData)
            }, success(res) {
                console.log(res);
                _this.setData({
                    activitList: res.result.data.list.data
                })
            }
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