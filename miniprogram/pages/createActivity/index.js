// pages/createActivity/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        opendId: '',
        isCreate: false,
        isUpdate: false,
        chosen: '',
        form: {
            storeName: '',
            titleValue: '',
            activityStartTime: '',//开始时间
            activityEndTime: '',//结束时间
            textareaValue: "",
            prizeName: '',
            prizeNum:1,
            peopleNum: '',
            activityType: '',
            activityForm: '',
        },
        ////////////
        activitesType: [{
                value: 1,
                name: '抽奖活动',
                checked: 'true'
            },
            {
                value: 2,
                name: '助力活动'
            },
        ],
        activityPlay: [{
                value: 1,
                name: '周期活动',
                checked: 'true'
            },
            {
                value: 2,
                name: '日常活动'
            },
        ],
        fileId: 'cloud://zliu-dev-4gclbljp64cb5cd3.7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483/activity/2023/2/16下午3:03:19.png',
        tempFileURL: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/activity/2023/2/16下午3:05:21.png',
        ///命名
        prizeItem: {
            prizeUrl: '',
            prizeName: '',
            prizeNum: 1,
            peopleNum: ''
        },
        prizeSettingList: [{
            prizeUrl: '',
            prizeName: '',
            prizeNum: 1,
            peopleNum: ''
        }],
        prizeList: []
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
                // 调用云函数，把图片存到服务器中；
                //上传图片
                wx.cloud.uploadFile({
                    cloudPath: 'activity/' + new Date().toLocaleString() + '.png',
                    filePath: filePath,
                }).then(async res => {
                    console.log(res);
                    let fileId1 = res.fileID;
                    console.log(fileId1); //有值cloud:
                    await _this.getTempFileURL(fileId1);
                    _this.setData({ 
                        fileId:fileId1,
                    })

                })
            }
        })
    },
    time(date){
        let y = date.getFullYear()
        let m = date.getMonth()+1
        let d = date.getDate()
        let h = date.getHours()
        if(h >= 20){
            let tomorrow = y + '-' + m + '-' + d + 1 
            this.setData({
                ['form.activityStartTime'] : tomorrow
            })
        }else{
            let timer = y + '-' + m + '-' + d 
            this.setData({
                ['form.activityStartTime'] : timer
            })
        }
    },
   
    //开始时间
    dateChangestart(e) {
        console.log('值为', e.detail.value);
        this.setData({
            ['form.activityStartTime']: e.detail.value
        });
    },
    //结束时间
    dateChangeEnd(e) {
        console.log('结束时间', e.detail.value);
        console.log(this.data.form.activityStartTime);
        this.setData({
            ['form.activityEndTime']: e.detail.value
        });
    },
    //奖品图
    prizeMap(e) {
        let _this = this;
        let index = e.currentTarget.dataset.index;
        //唤起图片权限
        wx.chooseMedia({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                //本地地址
                const prizeUrl = res.tempFiles[0].tempFilePath;

                // 调用云函数，把图片存到服务器中；
                //上传图片
                wx.cloud.uploadFile({
                    cloudPath: 'activity/' + new Date().toLocaleString() + '.png',
                    filePath: prizeUrl,
                    success(res) {
                        _this.setData({
                            [`prizeSettingList[${index}].prizeUrl`]: res.fileID
                        })
                    }
                })
            }
        })

    },
    //校验
    validateForm() {
        let form = this.data.form;
        if (!this.data.fileId) {
            wx.showToast({
                title: '请填写完整信息',
                icon: 'error',
                duration: 2000
            })
            return
        } else {
            for (let key in form) {
                if (!form[key]) {
                    wx.showToast({
                        title: '请填写完整信息',
                        icon: 'error',
                        duration: 2000
                    })
                    return
                }
            }
        }
        return true
    },
    //点击确定创建
    formSubmit(e) {
        this.setData({
            form: e.detail.value
        })
        this.getPrizeSettingList();
        if (this.validateForm()) this.createActivity();
       
    },
   ///获取奖品列表     
    getPrizeSettingList() {
        let prizeSettingList = this.data.prizeSettingList;
        let form = this.data.form;
        prizeSettingList.forEach((item, index) => {
                item.prizeName = form[`prizeName${index}`],
                item.prizeNum = form[`prizeNum${index}`],
                item.peopleNum = form[`peopleNum${index}`]
        })
    },


    //创建活动
    createActivity() {
        let fileId = this.data.fileId;
        wx.cloud.callFunction({
            name: 'activity',
            data: {
                type: 'createActivity',
                storeName: this.data.form.storeName,
                titleValue: this.data.form.titleValue,
                activityStartTime: this.data.form.activityStartTime,
                activityEndTime: this.data.form.activityEndTime,
                textareaValue: this.data.form.textareaValue,
                activityType: parseInt(this.data.form.activityType),
                activityForm: parseInt(this.data.form.activityForm),
                fileId,
                tempFileURL: this.data.tempFileURL,
                examineType: 0,
                //////// 
                // activityStatus: 0,  前端不传
                prizeSettingList: this.data.prizeSettingList
            },
            success(res) {
                wx.navigateTo({
                    url: '/pages/launchActivities/index',
                }).then(res => {
                    wx.showToast({
                        title: '成功',
                        icon: 'success',
                        duration: 2000
                    })
                })
            },
        })
    },
    //新增活动模块
    createModul() {
        this.data.prizeSettingList.push(JSON.parse(JSON.stringify(this.data.prizeItem)))
        this.setData({
            prizeSettingList: this.data.prizeSettingList
        })
    },
    //获取商铺名称
    getStoreName() {
        wx.cloud.callFunction({
            name: 'merchantInfo',
            data: {
                type: 'getMerchantInfo',
            }
        }).then(res => {
            this.setData({
                ['form.storeName']: res.result.data[0].merchantName
            })
        })
    },
    //把图片转成https格式
    getTempFileURL(fileId1) {
        let tempFileURL = "";
        wx.cloud.callFunction({
            name: 'getTempFileURL',
            data: {
                fileId:fileId1
            }
        }).then(res => {
            console.log(res);
            tempFileURL = res.result[0].tempFileURL
            //https 地址
            // console.log(tempFileURL);
            this.setData({
                tempFileURL:tempFileURL
            })
        })
    },
  
    /**                                                    
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //取消分享功能
        let app=getApp()
        app.hideShareMenu()
        this.getStoreName()
        this.time(new Date())
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
        wx.hideShareMenu({
            menus: ['shareAppMessage', 'shareTimeline']
          })
    }
})