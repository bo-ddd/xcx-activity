// pages/login/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    async getUserInfo() {
        let {
            getUserProfile,
            getSetting,
            openSetting
        } = getApp();
        await getSetting().then(async res => {
            console.log(res.authSetting['scope.userInfo']);
            if (res.authSetting['scope.userInfo']) {
                let {
                    userInfo
                } = await getUserProfile('用于登录')
                this.setData({
                    userInfo,
                    hasUserInfo: true
                })
                console.log(userInfo);
                // wx.switchTab({  
                //     url: '/pages/home/index',
                // })
                  
                    wx.navigateBack({
                        delta: 1
                      })
            } else {
                await openSetting()
            }
        }).catch(async err => {
            await openSetting()
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

    }
}) 