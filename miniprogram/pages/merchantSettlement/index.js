// pages/merchantSettlement/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        radios: [
            { value: '1', name: '男' },
            { value: '0', name: '女' },
        ],
        selectItem: {
            DqOpenid: '',
            select: false,
            grade_name: '--请选择--',
            grades: [
                {
                    id: 1,
                    className: '电子产品'
                },
                {
                    id: 2,
                    className: '卫生用品'
                },
                {
                    id: 3,
                    className: '厨房用品'
                },
                {
                    id: 4,
                    className: '清洁洗护'
                },
                {
                    id: 5,
                    className: '美妆护肤'
                },
                {
                    id: 6,
                    className: '二次元'
                },
                {
                    id: 7,
                    className: '潮流女装'
                },
                {
                    id: 8,
                    className: '潮男穿搭'
                },
                {
                    id: 9,
                    className: '美食达人'
                },
            ]
        },
        form: {
            merchantName: '',
            merchantSex: '',
            merchantPhone: '',
            storeName: '',
            license: ''
        },
        // 选择的经验类别
        storeclass: '',
        // 上传的图片
        tempFilePath: '',
        // 上传图片的云ID
        cloudId: '',
        // 上传图片的真实链接
        fileId: '',

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

    },
    // 单选框
    radioChange(e) {
        const items = this.data.radios
        for (let i = 0; i < 2; i++) {
            items[i].checked = items[i].value === e.detail.value
        }
        this.setData({
            items
        })
    },
    // 点击下拉框 
    bindShowMsg() {
        this.setData({
            select: true
        })
    },
    // 已选下拉框 
    mySelect(e) {
        console.log(e);
        this.setData({
            ['selectItem.grade_name']: e.currentTarget.dataset.name,
            storeclass: e.currentTarget.dataset.storeclass,
            select: false
        })
    },
    // 提交表单
    formSubmit: function (e) {
        console.log(e);
        this.setData({
            form : e.detail.value
        })
        if (!this.data.form.merchantName) {
            wx.showToast({
                title: '请填写完整信息',
                icon: 'error',
                duration: 2000
            })
            return;
        } else {
            //   this.toAuditStatus()

            this.addMerchant()
        }

    },
    // toAuditStatus() {
    //     wx.navigateTo({
    //         url: "/pages/auditStatus/index",
    //     })
    // },
    upload() {
        let _this = this
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
    // 商家入驻的注册接口
    addMerchant() {
        wx.cloud.callFunction({
            name: 'merchantInfo',
            data: {
                type: 'addMerchantInfo',
                merchantName: this.data.form.merchantName,
                merchantPhone: this.data.form.merchantPhone,
                merchantSex: this.data.form.merchantSex,
                storeName: this.data.form.storeName,
                storeClass: this.data.storeclass,
                license: this.data.fileId
            }, success(res) {
                console.log(res);
            }, error(err) {
                console.log(err);
            }
        })
    }
})