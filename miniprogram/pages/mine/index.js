// pages/mine/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        activityList: [{
                id: 1,
                icon: '../../images/icon-activity.png',
                lable: '创建活动',
                name: 'createActivity',
                show: false

            },
            {
                id: 2,
                icon: '../../images/icon-activity.png',
                lable: '发起的活动',
                name: 'launchActivities',
                show: false
            },
            {
                id: 3,
                icon: '../../images/icon-activity.png',
                lable: '参与的活动',
                name: 'participateActivities',
                show: true

            },
            {
                id: 4,
                icon: '../../images/icon-activity.png',
                lable: '抽奖记录',
                name: 'activitRecord',
                show: true

            },

        ],
        mineList: [{
                id: 1,
                icon: '../../images/icon-Settle.png',
                lable: '商家入驻',
                arrowIcon: '../../images/icon-arrow_list.png',
                name: 'entryProcess',
                show: true
            },
            {
                id: 2,
                icon: '../../images/icon-order.png',
                lable: '审核列表',
                arrowIcon: '../../images/icon-arrow_list.png',
                name: 'examineList',
                show: false
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
                name: 'pointsMall',
                show: true
            },
            {
                id: 4,
                icon: '../../images/icon-suggest.png',
                lable: '反馈建议',
                arrowIcon: '../../images/icon-arrow_list.png',
                name: 'opinion',
                show: true
            },
        ],

    },
    toLogin() {
        wx.navigateTo({
            url: '/pages/login/index'
        })
    },
    to(e) {
        let app = getApp()
        if (app.globalData.needLogin == true) {
            wx.navigateTo({
                url: '/pages/login/index',
                success(res){
                    wx.showToast({
                        title: '请先登录',
                        icon: 'error',
                        duration: 2000
                    })
                }
            })
        } else {
            wx.navigateTo({
                url: '/pages/' + e.currentTarget.dataset.name + '/index'
            })
        }

    },
    activeTo(e) {
        let app = getApp()
        if (app.globalData.needLogin == true) {
           
            wx.navigateTo({
                url: '/pages/login/index',
                success(res){
                    wx.showToast({
                        title: '请先登录',
                        icon: 'error',
                        duration: 2000
                    })
                }
            })
        } else {
            wx.navigateTo({
                url: '/pages/' + e.currentTarget.dataset.name + '/index'
            })
        }
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
    //展示活动
    async showActivity() {
        let app = getApp();
        await app.judgeUserInfo();
        if (app.globalData.needLogin == true) {

        } else {
            let navData = JSON.parse(JSON.stringify(this.data.activityList))
            if (app.globalData.userInfo) {
                navData.forEach((e) => {
                    if (!e.show) {
                        e.show = !e.show
                    }
                })
                this.setData({
                    userInfo: app.globalData.userInfo,
                    activityList: navData
                })
            }
        }

    },
    //展示审核列表
    showAudit() {
        wx.cloud.callFunction({
            name: 'user',
            data: {
                type: 'getUserInfo',
            },
        }).then(res => {
            if (res.result.data[0].openId) {
                let mineList = JSON.parse(JSON.stringify(this.data.mineList))
                mineList.forEach(item => {
                    if (res.result.data[0].openId =="oeRqM5dhd2MtTQFsDxY_XEKaeb54"||'oeRqM5TAO2_5AKrkhSsFzqr5B1ys') {
                        if (!item.show) {
                            item.show = true
                        }
                    }
                })
                this.setData({
                    mineList: mineList
                })
            }

        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        //展示审核列表
        this.showAudit()
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
        this.showActivity()
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