// pages/merchantInfo/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loadingStatus: true,
        merchantDetail: [],
        grades: ['电子产品', '卫生用品', '厨房用品', '清洁洗护', '美妆护肤', '二次元', '潮流女装', '潮男穿搭', '美食达人'],
        // 商户Id
        merchantId: '',
        // 拒绝原因
        placeholderText: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.openLoading()
        app.hideShareMenu()
        this.setData({
            merchantId: options.id
        })
        this.getMercnahtInfo()
        this.closeLoading()
    },
    // 获取商家详情信息
    getMercnahtInfo(){
        let _this = this
        wx.cloud.callFunction({
            name: 'merchantInfo',
            data: {
                type: 'getMerchantDetail',
                _id: _this.data.merchantId
            }, success(res) {
                console.log(res.result.data);
                _this.setData({
                    merchantDetail: res.result.data
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
    // 审核不通过
    refuse() {
        let _this = this
        wx.showModal({
            //显示输入框
            editable: true,
            //显示输入框提示信息
            placeholderText: '输入拒绝原因',
            success: res => {
                //点击了确认
                if (res.confirm) {
                    //用户输入的值
                    _this.setData({
                        placeholderText: res.content
                    })
                }
            }
        })
    },
    // 审核通过
    pass() {
        let _this = this
        wx.showModal({
            title: '提示',
            content: '是否确认通过',
            success(res) {
                if (res.confirm == true) {
                    _this.addExamineType(1)
                    _this.toExamineList()
                }
            }
        })
    },
    // 点击通过和拒绝后的操作
    addExamineType(type) {
        let _this = this
        wx.cloud.callFunction({
            name: 'merchantInfo',
            data: {
                type: 'updataMerchantInfo',
                merchantId: _this.data.merchantId,
                examineType: type
            }
        })
    },
    //跳转审核列表页面
    toExamineList() {
        wx.navigateTo({
            url: '/pages/examineList/index',
        })
    }
})