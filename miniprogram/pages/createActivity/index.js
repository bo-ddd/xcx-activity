// pages/createActivity/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        form:{
            nameValue: '',
            titleValue: '',
            dateStartDay: '2023-01-01',
            dateEndDay: '2023-01-01',
            radioValue: '',
            textareaValue: "",
            prizeName: '',
            prizeNum: '',
            peopleNum:'',
        },
        prizeSettingList: [{
            id: 1,
            prizeMapIcon: '../../images/icon-add_p.png',
            prizeName: '奖品名称',
            prizeNum: '奖品数量',
            prizePeople: '助力人数'
        }, ]
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
    inputName(e) {
        this.setData({
            nameValue: e.detail.value
        })
        console.log(this.data.nameValue);
    },
    inputTitle(e) {
        this.setData({
            titleValue: e.detail.value
        })
        console.log(this.data.titleValue);
    },
    //开始时间
    dateChangestart(e) {
        console.log('值为', e.detail.value);
        this.setData({
            dateStartDay: e.detail.value

        });
    },
    //结束时间
    dateChangeEnd(e) {
        console.log('jieshu', e.detail.value);
        this.setData({
            dateEndDay: e.detail.value
        });
    },
    handleChange(e) {
        this.setData({
            radioValue: e.detail.value
        });
        console.log(e.detail.value);
    },
    inputTextarea(e) {
        this.setData({
            textareaValue: e.detail.value
        });
        console.log(e.detail.value);
    },
    getPrizeName(e) {
        this.setData({
            textareaValue: e.detail.value
        });
        console.log(e);
    },
    getPrizeNum(e) {
        this.setData({
            textareaValue: e.detail.value
        });
        console.log(e);
    },
    getPeopleNum(e) {
        this.setData({
            textareaValue: e.detail.value
        });
        console.log(e);
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