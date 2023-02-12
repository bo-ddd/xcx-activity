// pages/merchantInfo/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        merchantDetail: [],
        grades: ['电子产品', '卫生用品', '厨房用品', '清洁洗护', '美妆护肤', '二次元', '潮流女装', '潮男穿搭', '美食达人'],
        merchantId: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options);
        this.setData({
            merchantId: options.id
        })
        let _this = this
        wx.cloud.callFunction({
            name: 'merchantInfo',
            data: {
                type: 'getMerchantDetail',
                _id: options.id
            }, success(res) {
                console.log(res.result.data);
                _this.setData({
                    merchantDetail: res.result.data
                })
            }
        })
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
    // 审核不通过
    refuse() {
        wx.showActionSheet({
            itemList: ['活动规则不符合', '商家标题涉嫌违规，请及时更改'],
            success(res) {
                console.log(res.tapIndex)
            }
        })
    },
    // 审核通过
    pass() {
        let _this = this
        wx.showModal({
            title: '提示',
            content: '是否确认通过',
            success(res) {
                if (res.confirm == true) {
                    wx.cloud.callFunction({
                        name: 'merchantInfo',
                        data: {
                            type: 'updataMerchantInfo',
                            merchantId: _this.data.merchantId
                        }
                    }).then(() => {
                        wx.navigateTo({
                            url: '/pages/examineList/index',
                        })
                    })
                }
            }
        })
    },
})