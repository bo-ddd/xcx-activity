// pages/activitRecord/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        recordList:[
            {
                id:1,
                lable:'消消乐哈哈',
                date:'2023.1.2'
             },
            {
                id:2,
                lable:'消消乐哈哈',
                date:'2023.1.2'
             },
            {
                id:3,
                lable:'消消乐哈哈',
                date:'2023.1.2'
             },
            {
                id:3,
                lable:'消消乐哈哈',
                date:'2023.1.2'
             },
            {
                id:3,
                lable:'消消乐哈哈',
                date:'2023.1.2'
             },

        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.showLoading()
    },
    //前几秒白屏
    showLoading(){
        wx.showLoading({
            title: '加载中',
          })
          
          setTimeout(function () {
            wx.hideLoading()
          }, 500)
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