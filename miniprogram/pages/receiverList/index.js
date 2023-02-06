// pages/receiverList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        receiverList:[
            {
                id:1,
                username:'张三',
                phone:'182****6649',
                checkedStatus: true
            },
            {
                id:2,
                username:'熊大',
                phone:'182****8527',
                checkedStatus: false
            },
        ]

    },
    to(e) {
        wx.navigateTo({
            url: '/pages/' + e.currentTarget.dataset.name + '/index',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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