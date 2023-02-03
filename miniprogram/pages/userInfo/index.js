// pages/userInfo/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfoList: [{
                id: 1,
                username: '张卫国',
                phone: '13888880086',
                address: '山东省青岛市黄岛区千库路1888号',
                checkedStatus: true
            },
            {
                id: 2,
                username: '杨晓鹏',
                phone: '18249645599',
                address: '北京市东城区创业大厦8层808',
                checkedStatus: false
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    toEdit(e) {
        wx.navigateTo({
            url: 'url',
        })

    },
    //删除按钮功能;
    toDelete(e) {
        wx.showModal({
            cancelColor: 'cancelColor',
            title: '提示',
            content: '您确定要删除吗？',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    //调用删除接口;
                    // e.currentTarget.dataset.id;
                    wx.showToast({
                        title: '已删除',
                        icon: 'success',
                        duration: 1000
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    to(e) {
        if (e.currentTarget.dataset.id) {
            wx.navigateTo({
                url: '/pages/' + e.currentTarget.dataset.name + '/index?id=' + e.currentTarget.dataset.id
            })
        }
        wx.navigateTo({
            url: '/pages/' + e.currentTarget.dataset.name + '/index'
        })
    },

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