// pages/activityDetails/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        activityProgress: '0%',
        currentStage: 0,
        ongoingStage: 0,
        activityTitle: '',
        activityRule: '',
        activityStartTime: '',
        activityEndTime: '',
        activityForm: '',
        activityStatus: '',
        prizeList: [],
        activityHelpNumberList: [],
        timer: null,
        day: '00',
        hour: '00',
        minute: '00',
        second: '00',
        activityId: '',
        participateStatus: null,
        showModal: false,
        duration: 500,
    },
    //切换上一个阶段;
    switchPrev() {
        let currentStage = this.data.currentStage;
        let finalStage = this.data.prizeList.length - 1;
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
        let upperLimit = this.data.prizeList.length - 1;
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
        let _this = this;
        await this.getParticipateStatus();
        if (!this.data.participateStatus) {
            //提示参与成功,把活动id和用户id存入数据库
            wx.showModal({
                title: '提示',
                content: '助力成功',
                success(res) {
                    _this.addParticipateStatus()
                    //更新活动进度;
                    _this.updataActivityProgress();
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
   async getParticipateStatus() {
     const res= await  wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getParticipateStatus',
                activityId:this.data.activityId
            }
        })
            this.setData({
                participateStatus: res.result.data
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
    onShareAppMessage(e) {},
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
            titleValue: activityTitle, //活动标题;
            prizeSettingList: prizeList
        } = activityDetail;
        this.setData({
            activityForm,
            activityStatus,
            activityRule,
            activityTitle,
            prizeList
        })
        //设置活动标题;
        this.setActivityTitle();
        //获取活动助力数列表;
        this.getActivityHelpNumberList();
        //更新当前活动阶段和进度;
        this.updataActivityProgress();
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

    getActivityHelpNumberList() {
        let prizeList = this.data.prizeList;
        let arr = ['0']
        let activityHelpNumberList = [];
        prizeList.forEach(item => {
            arr.push(item.peopleNum)
        })
        arr.forEach((item, index) => {
            if (arr[index + 1]) {
                activityHelpNumberList.push({
                    startNumber: arr[index],
                    endNumber: arr[index + 1]
                })
            }
        })
        this.setData({
            activityHelpNumberList
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

    //获取参与活动人数/助力值;
    async getActivityCount() {
        const res = await wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'getParticipateNum',
                activityId: this.data.activityId,
            }
        })
        return res.result.data.length
    },

    //更新当前活动进度和阶段;
    async updataActivityProgress() {
        let activityHelpNumberList = this.data.activityHelpNumberList;
        let activityCount = await this.getActivityCount();
        activityHelpNumberList.forEach((item, index) => {
            if (activityCount >= item.startNumber && activityCount < item.endNumber) {
                //设置当前进行阶段;
                this.setData({
                    ongoingStage: index
                })
                //设置当前默认显示阶段;
                this.setData({
                    currentStage: this.data.ongoingStage
                })
                let activityProgress = parseInt(Number(activityCount) / (Number(item.endNumber) - Number(item.startNumber)) * 100) + '%';
                //设置当前活动进度百分比;
                this.setData({
                    activityProgress
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

    }
})