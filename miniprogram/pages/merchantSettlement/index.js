// pages/merchantSettlement/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        radios: [
            { value: '男', name: '男' },
            { value: '女', name: '女'},
        ],
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

    },
    // 单选框
    radioChange(e) {
        const items = this.data.radios
        for (let i = 0; i < 2; i++) {
            items[i].checked = items[i].value === e.detail.value
        }
        this.setData({
            items
        })
    }
})