// pages/nearbyStoresList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selectInputValue: '',
        focusStatus: false,
        nearbyStoresList: [{
                id: 1,
                name: '友惠便利店',
                distance: '504',
                address: '新乡市卫辉市卫州路1号卫辉市人民政府信访局卫州路28号门面房'
            },
            {
                id: 2,
                name: '云山酒行',
                distance: '504',
                address: '新乡市卫辉市友谊路与劳动路交叉路口往南约100米枚举公馆一楼'
            },
            {
                id: 3,
                name: '云山酒行',
                distance: '504',
                address: '新乡市卫辉市友谊路与劳动路交叉路口往南约100米枚举公馆一楼'
            },
            {
                id: 4,
                name: '云山酒行',
                distance: '504',
                address: '新乡市卫辉市友谊路与劳动路交叉路口往南约100米枚举公馆一楼'
            },
            {
                id: 5,
                name: '云山酒行',
                distance: '504',
                address: '新乡市卫辉市友谊路与劳动路交叉路口往南约100米枚举公馆一楼'
            },
            {
                id: 6,
                name: '云山酒行',
                distance: '504',
                address: '新乡市卫辉市友谊路与劳动路交叉路口往南约100米枚举公馆一楼'
            }
        ]
    },
    to(e) {
        wx.navigateTo({
            url: '/pages/' + e.currentTarget.dataset.name + '/index',
        })
    },
    //选择自提点;
    selectAddress(e) {
        console.log(e.currentTarget.dataset.id)
    },

    //获取搜索框的值;
    bindSelectInput(e) {
        this.setData({
            selectInputValue: e.detail.value
        })
    },
    //聚焦事件;
    focusEvent() {
        this.setData({
            focusStatus: true
        })
    },
    //失去焦点事件;
    blurEvent() {
        this.setData({
            focusStatus: false
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