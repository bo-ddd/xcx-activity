// pages/hobby/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailValue:[],
        riderCommentList: [{
            id: 1,
            selected: false,
            title: '电子产品'
        }, {
            id: 2,
            selected: false,
            title: '卫生用品'
        }, {
            id: 3,
            selected: false,
            title: '厨房用品'
        }, {
            id: 4,
            selected: false,
            title: '潮流服饰'
        }, {
            id: 5,
            selected: false,
            title: '二次元'
        }, {
            id: 6,
            selected: false,
            title: '美食达人'
        }, {
            id: 7,
            selected: false,
            title: '其他'
        }, {
            id: 8,
            selected: false,
            title: '其他'
        }, {
            id: 9,
            selected: false,
            title: '其他'
        }, {
            id: 10,
            selected: false,
            title: '其他'
        }, {
            id: 11,
            selected: false,
            title: '其他'
        }, {
            id: 12,
            selected: false,
            title: '其他'
        }]
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
    // 多选框
    checkboxChange(e) {
        let string = "riderCommentList[" + e.target.dataset.index + "].selected"
        this.setData({
            [string]: !this.data.riderCommentList[e.target.dataset.index].selected
        })
        this.setData({
            detailValue : this.data.riderCommentList.filter(item => item.selected).map(item => item.id)
        })
        // console.log(detailValue);
    },
    // 审核通过
    pass() {
        let _this = this
        wx.cloud.callFunction({
            name:'userinfo',
            data:{
                type:'addUserHobby',
                hobby:_this.data.detailValue
            }
        })
    },

})