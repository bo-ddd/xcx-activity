// pages/updataActivities/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        merchantId: '',
        activityDetail:{},
        dateDay: '2023-01-01',
        prizeSettingList: [
            {
                id: 1,
                prizeMapIcon: '../../images/icon-add_p.png',
                prizeName: '奖品名称',
                prizeNum: '奖品数量',
                prizePeople: '助力人数'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            merchantId: options.id
        })
        let _this = this
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getActivityDetail',
                _id: options.id
            }, success(res) {
                console.log(res);
                _this.setData({
                    activityDetail: res.result.data
                })
            }
        })
    },
    dateChangeDay(e) {
        console.log('值为', e.detail.value);
        // this.setData(
        //     dateDay,e.detail.value
        // );
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