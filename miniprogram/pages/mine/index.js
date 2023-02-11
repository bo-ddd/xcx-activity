// pages/mine/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: '',
        activityList: [{
                id: 1,
                icon: '../../images/icon-activity.png',
                lable: '创建活动',
                name: 'createActivity'

            },
            {
                id: 2,
                icon: '../../images/icon-activity.png',
                lable: '发起的活动',
                name: 'launchActivities'
            },
            {
                id: 3,
                icon: '../../images/icon-activity.png',
                lable: '参与的活动',
                name: 'participateActivities'

            },
            {
                id: 4,
                icon: '../../images/icon-activity.png',
                lable: '抽奖记录',
                name: 'activitRecord'

            },

        ],
        mineList: [{
                id: 1,
                icon: '../../images/icon-Settle.png',
                lable: '商家入驻',
                arrowIcon: '../../images/icon-arrow_list.png',
                name: 'entryProcess'

            },
            {
                id: 2,
                icon: '../../images/icon-order.png',
                lable: '审核列表',
                arrowIcon: '../../images/icon-arrow_list.png',
                name: 'examineList'

            },
            // {
            //     id: 3,
            //     icon: '../../images/icon-opinion.png',
            //     lable: '个人信息',
            //     arrowIcon: '../../images/icon-arrow_list.png',
            //     name: 'userInfo'

            // },
            {
                id: 3,
                icon: '../../images/icon-integral1.png',
                lable: '积分明细',
                arrowIcon: '../../images/icon-arrow_list.png',
                name: 'pointsMall'

            },
            {
                id: 4,
                icon: '../../images/icon-suggest.png',
                lable: '反馈建议',
                arrowIcon: '../../images/icon-arrow_list.png',
                name: 'opinion'

            },
        ]
    },

    to(e) {
        console.log(e);
        wx.navigateTo({
            url: '/pages/' + e.currentTarget.dataset.name + '/index'
        })

    },
    activeTo(e) {
        wx.navigateTo({
            url: '/pages/' + e.currentTarget.dataset.name + '/index'
        })
    },
    toHomePage() {
        wx.switchTab({
            url: '/pages/home/index',
        })
    },
    //点击消息图跳转消息页
    messagePage() {
        wx.navigateTo({
            url: '/pages/message/index'
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
    //判断用户是否登录
    onShow() {
        let userInfo = getApp().globalData.userInfo
        // console.log(userInfo);
        // 如果后台userInfo信息存在，可赋值直接进入登录页面，无需再次登录获取
        // 获取用户globalData信息
        if (userInfo != '' && userInfo != null) {
            this.setData({
                userInfo: userInfo,
                hasUserInfo: true,
                canIUseGetUserProfile: true
            })
        }else{
            wx.navigateTo({
                url: '/pages/login/index',
            })
        }
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