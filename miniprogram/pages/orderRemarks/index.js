// pages/orderRemarks/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        remarks: ''
    },
    bindTextareaValue(e) {
        this.setData({
            remarks: e.detail.value
        })
    },
    submit() {
        //调接口，提交表单;
        var pages = getCurrentPages();
        if (pages.length >= 2) {
            var prePage = pages[pages.length - 2];
            prePage.setData({
                remarks:this.data.remarks
            });
        };
        //成功之后的事件;
        wx.navigateBack({
            delta: 1
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