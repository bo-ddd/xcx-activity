// pages/examineDetails/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options);
        wx.cloud.callFunction({
            name:'activity',
            data:{
                type:'getActivityDetail'
            }
        })
        this.showLoading()
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
    // 审核不通过
    refuse() {
        wx.showActionSheet({
            itemList: ['活动规则不符合', '商家标题涉嫌违规，请及时更改'],
            success(res) {
                console.log(res.tapIndex)
            }
        })
    },
    // 审核通过
    pass() {
        wx.showModal({
            title: '提示',
            content: '是否确认通过',
            success(res) {
                wx.navigateTo({
                    url: '/pages/examineList/index',
                })
            }
        })
    },
    // 页面未完成前的加载框
    showLoading() {
        wx.showLoading({
            title: '加载中',
        })

        setTimeout(function () {
            wx.hideLoading()
        }, 500)
    },
})