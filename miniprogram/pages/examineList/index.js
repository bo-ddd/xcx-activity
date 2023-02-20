// pages/examineList/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loadingStatus: true,
        currentIndex: 0, //tab默认项
        merchantList: [],
        grades: ['电子产品', '卫生用品', '厨房用品', '清洁洗护', '美妆护肤', '二次元', '潮流女装', '潮男穿搭', '美食达人'],
        merchantStatus: ['商铺审核列表', '商铺列表']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.openLoading()
        app.hideShareMenu()
        this.getMerchantList()
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
    // 获取商铺列表
    getMerchantList() {
        let _this = this
        wx.cloud.callFunction({
            name: 'merchantInfo',
            data: {
                currentTarget: Number(this.data.currentIndex),
                type: 'getMerchantList'
            },
            success(res) {
                console.log(res.result);
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
        this.getMerchantList()
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
            this.getMerchantList()
            //停止下拉刷新
            wx.stopPullDownRefresh();
        }, 2000)
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
            url: '/pages/merchantInfo/index?id=' + e.currentTarget.dataset._id,
        })
    },
    // 跳转商家信息详情
    async toMerchantDetail(e) {
        await wx.navigateTo({
            url: '/pages/merchantInfo/index?id=' + e.currentTarget.dataset._id,
        })
    },


    titleClick(e) {
        console.log(e);
        this.setData({
            //拿到当前索引并动态改变
            currentIndex: e.currentTarget.dataset.idx
        })
        this.openLoading()
        this.getMerchantList()
        this.closeLoading()
    },
    // 滑动改变滑块index值
    bindchange(e) {
        this.setData({
            currentIndex: e.detail.current
        })
        this.openLoading()
        this.getMerchantList()
        this.closeLoading()
    },
})