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
    refuse() {
        wx.showActionSheet({
            itemList: ['活动规则不符合', '商家标题涉嫌违规，请及时更改'],
            success(res) {
                console.log(res.tapIndex)
            },
            fail(res) {
                console.log(res.errMsg)
            }
        })
    },
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
    showLoading() {
        wx.showLoading({
            title: '加载中',
        })

        setTimeout(function () {
            wx.hideLoading()
        }, 500)
    },
})