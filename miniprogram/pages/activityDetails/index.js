// pages/activityDetails/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        progressValue: '30%',
        currentStage: 0,
        ongoingStage: 0,
        activityTitle: '',
        activityRule: '',
        activityStartTime: '',
        activityEndTime: '',
        activityForm: '',
        activityStatus: '',
        timer: null,
        day: '00',
        hour: '00',
        minute: '00',
        second: '00',
        activityId: '',
        participateStatus: false,


        prizeList: [{
            id: '',
            helpNumber: '',
            prizeImg: ''
        }],
        showModal: false,
        duration: 500,

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
    //切换上一个阶段;
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
    //切换下一个阶段;
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
  async onhelp() {
        let _this=this;
       await this.getParticipateStatus()
            if (this.data.ParticipateStatus == '' || this.data.ParticipateStatus == null) {
            //提示参与成功,把活动id和用户id存入数据库
            wx.showModal({
                title: '提示',
                content: '助力成功',
                success(res) {
                 _this.addParticipateStatus()  
                }
            })
        } else {
            wx.showModal({
                title: '提示',
                content: '您已助力过啦！',
                success(res) {
                  console.log(res);
                }
            })
        }
    },
    //获取参与状态
    getParticipateStatus() {
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getParticipateStatus',
                // activityId: this.data.activityId
            }
        }).then(res => {
            this.setData({
                participateStatus: res.result.data
            })
            console.log(this.data.participateStatus); //null代表没助力
        })
    },
    //添加参与状态
    addParticipateStatus() {
        console.log(this.data.activityId);
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'participateAactivities',
                activityId: this.data.activityId
            }
        }).then(res => {
            console.log(res.result);
        })
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
    async onLoad(options) {
        //开启倒计时;
        this.countDown('2023-02-20 00:00:00');
        //打开分享功能;
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
        //拿到活动列表传递过来的活动_id;
        this.setData({
            activityId: options._id
        })
        //通过活动Id获取活动详情;
        const res = await this.getActivityDetail(this.data.activityId);
        const activityDetail = res.result.data;
        let {
            activityForm, //活动形式;
            activityStatus, //活动状态;
            textareaValue: activityRule, //游戏规则;
            titleValue: activityTitle //活动标题;
        } = activityDetail;
        this.setData({
            activityForm,
            activityStatus,
            activityRule,
            activityTitle
        })
        //设置活动标题;
        this.setActivityTitle();

    },

    async getActivityDetail(_id) {
        return await wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getActivityDetail',
                _id,
            }
        })
    },
    setActivityTitle() {
        let _this = this;
        wx.setNavigationBarTitle({
            title: _this.data.activityTitle
        })
    },

    countDown(endTime) {
        var _this = this;
        clearTimeout(this.data.timer);
        this.setData({
            timer: setTimeout(() => {
                _this.updataTimeCallback(endTime)
                _this.countDown(endTime)
            }, 1000)
        })
    },

    updataTimeCallback(endTime) {
        var downTime = parseInt(new Date(endTime.replace(/-/g, "/")).getTime() - new Date().getTime())

        // 倒计时结束
        if (downTime <= 0) {
            this.setData({
                day: '00',
                hour: '00',
                minute: '00',
                second: '00'
            })
            //结束周期计时器
            clearTimeout(this.data.timer);
            return;
        }
        //计算距离活动还有多少天、时、分、秒
        var d = parseInt(downTime / 1000 / 3600 / 24);
        var h = parseInt(downTime / 1000 / 3600 % 24);
        var m = parseInt(downTime / 1000 / 60 % 60);
        var s = parseInt(downTime / 1000 % 60);
        //统一格式的显示
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        //同步显示
        this.setData({
            day: d,
            hour: h,
            minute: m,
            second: s
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