// pages/launchActivities/index.js
const app = getApp()
const commonFn = require('../../common/throttle')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageSize: 4,
        pageNum: 1,
        loadingStatus: true,
        form: {
            shopname: '',
            activitytitle: '',
        },
        activityStatus: ['未开始', '待开奖', '已结束'],
        activityList: [],
        currentData: 0
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        app.hideShareMenu()
        this.getActivityList()
        this.closeLoading()
    },
    // 关闭加载动画
    closeLoading() {
        this.setData({
            loadingStatus: false
        })
    },
    // 开启加载动画
    openLoading() {
        this.setData({
            loadingStatus: true
        })
    },
    //点击切换，改变滑块index值
    checkCurrent: function (e) {
        console.log(e);
        const that = this;
        if (that.data.currentData === e.target.dataset.current) {
            return false;
        } else {

            that.setData({
                currentData: e.target.dataset.current
            })
            that.openLoading()
            that.getActivityList()
            that.closeLoading()

        }
    },
    // 滑动改变滑块index值
    bindchange(e) {
        const that = this;
        that.setData({
            currentData: e.detail.current
        })
        this.openLoading()
        this.getActivityList()
        this.closeLoading()
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
        let _this = this
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getActivityList',
                activityStatus: Number(this.data.currentData),
                pageNum: 1,
                pageSize: 4
            }, success(res) {
                _this.setData({
                    activityList: res.result.data.list.data
                })
            }
        })
    },
    //    删除活动
    delete(e) {
        console.log(e);
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'deleteActivity',
                _id: e.currentTarget.dataset._id
            }, success(res) {
                this.openLoading()
                this.getActivityList()
                this.closeLoading()
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
        setTimeout(() => {
            this.getActivityList()
            //停止下拉刷新
            wx.stopPullDownRefresh();
        }, 2000)
    },
    // 上拉加载
    pullUp() {
        console.log('到底啦');
        let _this = this
        let loadingStatus = this.data.loadingStatus;
        if (loadingStatus) return;
        this.setData({
            pageNum: this.data.pageNum + 1,
        })
        console.log(this.data.pageNum);
        this.openLoading();
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getActivityList',
                activityStatus: Number(this.data.currentData),
                pageNum: this.data.pageNum,
                pageSize: 4
            }, success(res) {
                console.log(res);
                if (!res.result.data.list.data.length) {
                    _this.setData({
                        pageNum: _this.data.pageNum - 1,
                    })
                }
                if (res.result.data.list.data.length) {
                    let list = res.result.data.list.data
                    console.log(list);
                    _this.data.activityList.push(...list)
                    _this.setData({
                        activityList: _this.data.activityList
                    })
                    console.log(_this.data.activityList);
                }
            }
        })
        this.closeLoading();
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        // this.pullUp()
        commonFn.throttle(this.pullUp)()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})