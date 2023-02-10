// pages/examineList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndex: 0, //tab默认项
        activityList: [],
        merchantList:[],
        grades:['电子产品','卫生用品','厨房用品','清洁洗护','美妆护肤','二次元','潮流女装','潮男穿搭','美食达人']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let _this = this
        this.showLoading()
        // 获取活动列表
        // wx.cloud.callFunction({
        //     name: 'activity',
        //     data: {
        //         type: 'getActivityList'
        //     },
        //     success(res) {
        //         console.log(res);
        //         _this.setData({
        //             activityList: res.result.data.list.data
        //         })
        //     }
        // })
        // 获取商铺列表
        wx.cloud.callFunction({
            name: 'merchantInfo',
            data: {
                type: 'getMerchantList'
            },
            success(res) {
                // console.log(res.result.list.data);
                _this.setData({
                    merchantList: res.result.list.data
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

    },
    // 跳转活动详情
    async toActiveDetail(e) {
        console.log(e);
        await wx.navigateTo({
            url: '/pages/examineDetails/index?id=' + e.currentTarget.dataset._id,
        })
    },
    // 跳转商家信息详情
    async toMerchantDetail(e) {
        await wx.navigateTo({
            url: '/pages/merchantInfo/index?id=' + e.currentTarget.dataset._id,
        })
    },
    // 页面加载中
    showLoading() {
        wx.showLoading({
            title: '加载中',
        })
        setTimeout(function () {
            wx.hideLoading()
        }, 500)
    },
    // tab切换
    pagechange(e) {
        // 通过touch判断，改变tab的下标值
        if ("touch" === e.detail.source) {
            let currentPageIndex = this.data.currentIndex;
            currentPageIndex = (currentPageIndex + 1) % 2;
            // 拿到当前索引并动态改变
            this.setData({
                currentIndex: currentPageIndex,
            })
        }
    },
    titleClick: function (e) {
        this.setData({
            //拿到当前索引并动态改变
            currentIndex: e.currentTarget.dataset.idx
        })
    }

})