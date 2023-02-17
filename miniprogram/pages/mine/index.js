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
                show: false
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
    toLogin(){
        wx.navigateTo({
            url: '/pages/login/index'
        })
    },
    to(e) {
        let app=getApp()
        if(app.globalData.needLogin == true){
            wx.navigateTo({
                url: '/pages/login/index'
            })
        }else{
            wx.navigateTo({
                url: '/pages/' + e.currentTarget.dataset.name + '/index'
            })
        }

    },
    activeTo(e) {
        let app=getApp()
        if(app.globalData.needLogin == true){
             wx.navigateTo({
                url: '/pages/login/index'
            })
        }else{
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
    //设置用户信息r
    async setUserInfo() {
        console.log(22222222);
        let app = getApp();
        await app.judgeUserInfo();
        if (app.globalData.needLogin == true) {
            console.log('需要登录');
          
        } else {
            console.log('bu需要登录');
            // 想让一个数组中的某一项或者某某项在登陆的时候显示  未登录的时候隐藏
            /**
             * 实现思路：
             * 1、先克隆一份这个数组
             * 2、循环遍历这个数组
             * 3、便利的时候 判断每一项的 show字段当前处于什么状态 如为 true 则更改为false 反之一样
             * 4、重新把处理完的数据 重新设置到原数组中   效果实现
             */
            let navData = JSON.parse(JSON.stringify(this.data.activityList))
            if (app.globalData.userInfo) {
                navData.forEach((e) => {
                    if (!e.show) {
                        e.show = !e.show
                    }
                })
                this.setData({
                    userInfo: app.globalData.userInfo,
                    activityList:navData
                })
            }
            console.log('userInfo', this.data.userInfo);
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        // await this.setUserInfo()
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
        this.setUserInfo()
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