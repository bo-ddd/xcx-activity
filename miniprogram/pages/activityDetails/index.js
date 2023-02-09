// pages/activityDetails/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        progressValue: '30%',
        showModal: false,
        currentStage: 0,
        ongoingStage: 0,
        duration:500,
        activityStageList: [{
                id: 1,
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/image-prize.png?sign=95f7bd8a670e8b036964f4c6ee83e420&t=1675843368',
                startNumber: 0,
                endNumber: 100,
            },
            {
                id: 2,
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/image-prize_02.png?sign=ca4f7b9d7274d3a087c10b1b8fbac274&t=1675857619',
                startNumber: 100,
                endNumber: 200,
            },
            {
                id: 3,
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/image-prize_03.png?sign=614816d52e4bd3495089fb9e361c4fe6&t=1675858424',
                startNumber: 200,
                endNumber: 300,
            },
        ]
    },
    switchPrev() {
        let currentStage = this.data.currentStage;
        let finalStage = this.data.activityStageList.length - 1;
        if (currentStage > 0) {
            this.setData({
                currentStage: currentStage - 1
            })
        } else if (currentStage == 0) {
            this.setData({
                currentStage: finalStage
            })
        } else {
            return
        }
    },
    switchNext() {
        let currentStage = this.data.currentStage;
        let upperLimit = this.data.activityStageList.length - 1;
        if (currentStage < upperLimit) {
            this.setData({
                currentStage: currentStage + 1
            })
        } else if (currentStage = upperLimit) {
            this.setData({
                currentStage: 0
            })
        } else {
            return
        }
    },
    //游戏规则-打开弹层事件;
    openActivityRule() {
        this.setData({
            showModal: true
        })
    },

    // 禁止屏幕滚动;
    preventTouchMove: function () {},

    // 游戏规则-关闭弹层事件;
    back() {
        this.setData({
            showModal: false
        })
    },
    //助力按钮事件;
    onhelp() {
        console.log('助力成功');
        //判断当前用户是否助力过？
        //否：弹出助力成功页面，并标记当前用户已助力成功;
        //是：提醒用户已助力;
    },
    //兑换商店-跳转页面;
    to(e) {
        wx.navigateTo({
            url: '/pages/' + e.currentTarget.dataset.name + '/index',
        })
    },
    //分享功能;
    onShareAppMessage(e) {
        console.log(e)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //打开分享功能;
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
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