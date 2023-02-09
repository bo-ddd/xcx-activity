// pages/createActivity/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isCreate: false,
        isUpdate: false,
        chosen: '',
        form: {
            nameValue: '',
            titleValue: '',
            dateStartDay: '2023-01-01',
            dateEndDay: '2023-01-01',
            textareaValue: "",
            prizeName: '',
            prizeNum: '',
            peopleNum: '',
            activityType: 1,
            activityForm:1,
        },
        items: [{
                value: 1,
                name: '抽奖活动',
                checked: 'true'
            },
            {
                value: 2,
                name: '助力活动'
            },
        ],
        items1: [{
                value: 1,
                name: '周期活动',
                checked: 'true'
            },
            {
                value: 2,
                name: '长期活动'
            },
        ],
        fileId: '',
        prizeUrl: '',
        prizeSettingList: [{
            id: 1, 
            prizeMapIcon: '../../images/icon-add_p.png',
            prizeName: '奖品名称',
            prizeNum: '奖品数量',
            prizePeople: '助力人数'
        }, ]
    },
    createActivityBtn() {
        this.setData({
            isCreate: true
        })
        console.log(this.data.isCreate);
        this.createActivity()
    },
    //校验
    validateForm() {
        let form = this.data.form;
        for (let key in form) {
            if (!form[key] || !this.data.fileId || !this.data.flId) {
                wx.showToast({
                    title: '请填写完整信息',
                    icon: 'error',
                    duration: 2000
                })
                return
            }
        }
    },
    formSubmit(e) {
        console.log(e.detail.value);
        this.setData({
            form: e.detail.value
        })
        this.validateForm()
        this.createActivity()
    },
    //活动形式
    // getActivityType(e){
    //     this.setData({
    //         ['form.activityType']:e.detail.value
    //         })
    //         console.log( this.data.form.activityType);
    // },
    //活动类型
    // getActivityForm(e) {
    //     this.setData({
    //     ['form.activityForm']:e.detail.value
    //     })
    //     console.log( this.data.form.activityForm);
      
    // },
    //开始时间
    dateChangestart(e) {
        console.log('值为', e.detail.value);
        this.setData({
            ['form.dateStartDay']: e.detail.value
        });
        console.log(this.data.form.dateStartDay)
    },
    //结束时间
    dateChangeEnd(e) {
        console.log('结束时间', e.detail.value);
        this.setData({
            ['form.dateEndDay']: e.detail.value
        });
    },
    //点击上传活动图
     upload() {
        let _this = this;
        //唤起图片权限
        wx.chooseMedia({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                const filePath = res.tempFiles[0].tempFilePath;
                console.log(filePath);
                // 调用云函数，把图片存到服务器中；
                  //上传图片
                  wx.cloud.uploadFile({
                    cloudPath: 'activity/' + new Date().toLocaleString() + '.png',
                    filePath:filePath,
                    success(res) { 
                         console.log(res);
                        _this.setData({
                            fileId: res.fileID
                        })
                    }
                })
            }
        })

    },
    //奖品图
    PrizeMap() {
        let _this = this;
        //唤起图片权限
        wx.chooseMedia({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                console.log(res);
                //本地地址
                const prizeUrl = res.tempFiles[0].tempFilePath;
                console.log(prizeUrl);
                // 调用云函数，把图片存到服务器中；
                  //上传图片
                  wx.cloud.uploadFile({
                    cloudPath: 'activity/' + new Date().toLocaleString() + '.png',
                   filePath: prizeUrl,
                    success(res) { 
                        console.log(res);
                        _this.setData({
                            prizeUrl: res.fileID
                        })
                    }
                })
            }
        })

    },


    //创建活动
    createActivity() {
        let _this = this
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'createActivity',
                ...this.data.form,
                fileId: this.data.fileId,
                prizeUrl: this.data.prizeUrl,
            },
            success(res) {
                wx.navigateTo({
                    url: '/pages/launchActivities/index',
                    success() {
                        wx.showToast({
                            title: '成功',
                            icon: 'success',
                            duration: 2000
                        })
                    }
                })
            },
        })
    },
    //新增活动模块
    createModul() {
        console.log(222);
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