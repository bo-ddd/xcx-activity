
// pages/login/index.js
Page({
    data: {
        avatarUrl: '',
        nickName: ''
    },
    async getUserInfo() {
        let {
            getUserProfile,
            getSetting,
            openSetting
        } = getApp();
        await getSetting().then(async res => {
            // console.log(res.authSetting['scope.userInfo']);
            if (res.authSetting['scope.userInfo']) {
                let {
                    userInfo
                } = await getUserProfile('用于登录')
                console.log(userInfo)
                // console.log(this.data.userInfo); 用户信息
                let myUserInfo = await this.getUserInfoApi()
                // console.log(myUserInfo)
                if (myUserInfo) {
                    console.log('有信息')
                    //把信息显示到页面
                    this.setData({
                        avatarUrl: userInfo.avatarUrl,
                        nickName: userInfo.nickName,
                    })
                } else {
                    console.log('无信息')
                    this.setData({
                        avatarUrl: userInfo.avatarUrl,
                        nickName: userInfo.nickName,
                    })
                    // I添加用户信息
                    await this.addUserInfoApi();
                }
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



   async getUserInfoApi() {
      const res= await wx.cloud.callFunction({
            name: 'user',
            data: {
                type: 'getUserInfo',
            }
        })
        console.log(res.result.data)
        return res.result.data[0]
    },
    async addUserInfoApi() {
        console.log('添加')
        return new Promise((resolve, reject)=>{
            wx.cloud.callFunction({
                name: 'user',
                data: {
                    type: 'addUserInfo',
                    avatarUrl:this.data.avatarUrl,
                    nickName:this.data.nickName,
                }
            }).then(res => {
                console.log(res);
                resolve(res);
            })
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