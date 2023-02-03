// pages/examineList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            {
                id: 1,
                storeName: '呜啦啦',
                activeClass: '摇一摇',
                storClass: '电子产品'
            },
            {
                id: 2,
                storeName: '蜜雪冰城',
                activeClass: '大转盘',
                storClass: '奶茶/冰淇淋'
            },
            {
                id: 3,
                storeName: 'Adidas',
                activeClass: '助力',
                storClass: '潮流服饰'
            },
            {
                id: 4,
                storeName: '华为',
                activeClass: '摇一摇',
                storClass: '电子产品'
            }
        ]
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
    async to(e) {
        await wx.navigateTo({
            url: '/pages/examineDetails/index?id=' + e.currentTarget.dataset.id,
        })
    },
})