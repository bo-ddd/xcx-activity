// pages/launchActivities/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        form:{
            shopname:'',
            activitytitle:'',
           
        },

        activitList: [{
                id: 1,
                lable: '消消乐哈哈',
                state: '进行中...'
            },
            {
                id: 2,
                lable: '消消乐哈哈',
                state: '进行中...'
            },
            {
                id: 3,
                lable: '消消乐哈哈',
                state: '进行中...'
            },
            {
                id: 4,
                lable: '消消乐哈哈',
                state: '进行中...'
            },
            {
                id: 5,
                lable: '消消乐哈哈',
                state: '进行中...'
            },
        ],
        activityLimitList: [
            {
                id: 1,
                title: '帅娃娃哈哈哈',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
            {
                id: 2,
                title: '乌拉拉魔法棒',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
            {
                id: 3,
                title: '叫你一声你敢答应吗',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
        ],
        currentData: 0,
       
        prizeSettingList: [{
            id: 1,
            prizeMapIcon: '../../images/icon-add_p.png',
            prizeName: '奖品名称',
            prizeNum: '奖品数量',
            prizePeople: '助力人数'
        }, ]
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    bindchange: function (e) {
        const that = this;
        that.setData({
            currentData: e.detail.current
        })
    },
    //点击切换，滑块index赋值
    checkCurrent: function (e) {
        const that = this;

        if (that.data.currentData === e.target.dataset.current) {
            return false;
        } else {

            that.setData({
                currentData: e.target.dataset.current
            })
        }
    },
    //创建活动成功跳回活动页
    to() {
        wx.navigateTo({
            url: '/pages/launchActivities/index',
        })
    },
    //跳转编辑活动
    updataTo() {
        wx.navigateTo({
            url: '/pages/updataActivities/index',
        })
    },
  
    upload(){
        let _this = this;
        //唤起图片权限
        wx.chooseMedia({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                // tempFilePath可以作为 img 标签的 src 属性显示图片
                console.log(res);
                let tempFilePaths = res.tempFiles[0].tempFilePath
                let that = _this
                wx.cloud.uploadFile({
                    cloudPath: 'merchant/' + new Date().toLocaleString() + '.png',
                    filePath: tempFilePaths,
                    config: {
                        env: 'zliu-dev-4gclbljp64cb5cd3'
                    }, //不可以这么写，这样写会造成线上环境出现重大问题
                    success(res) {
                        that.setData({
                            fileId: res.fileID
                        })
                        // wx.cloud.callFunction({
                        //     name: 'getTempFileURL',
                        //     data: {
                        //         fileId: res.fileID
                        //     }
                        // }).then(res => {
                        //     that.setData({
                        //         fileId: res.result[0].tempFileURL
                        //     })
                        // })
                    }
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