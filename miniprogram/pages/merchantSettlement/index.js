// pages/merchantSettlement/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag: true,
        radios: [
            { value: '1', name: '男' },
            { value: '0', name: '女' },
        ],
        selectItem: {
            DqOpenid: '',
            select: false,
            grade_name: '--请选择--',
            grades: ['电子产品', '卫生用品', '厨房用品', '清洁洗护', '美妆护肤', '二次元', '潮流女装', '潮男穿搭', '美食达人'],
        },
        form: {
            merchantname: '',
            merchantsex: 0,
            merchantphone: '',
            storename: '',
            storeaddress: '',
        },
        // 选择的经营类别
        storeclass: 0,
        // 选择的经营类别值
        storeclassValue: '',
        // 上传的图片本地路径
        tempFilePath: '',
        // 上传图片的云地址
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
            storeclassValue: e.currentTarget.dataset.name,
            select: false
        })
    },
    //  消息提示
    tips(text) {
        wx.showToast({
            title: text,
            icon: 'error',
            duration: 2000
        })
    },
    // 提交表单
    formSubmit: function (e) {
        this.setData({
            form: e.detail.value
        })
        if (!this.data.form.merchantname) {
            this.tips('请输入姓名！')
            return;
        } else if (!this.data.form.merchantphone) {
            this.tips('请输入手机号！')
            return;
        } else if (this.data.form.merchantphone.length < 11) {
            this.tips('手机号不完整！')
            return;
        } else if (!this.data.form.storename) {
            this.tips('请输入店铺姓名！')
            return;
        } else if (!this.data.form.storeaddress) {
            this.tips('请输入店铺地址！')
            return;
        } else if (!this.data.storeclassValue) {
            this.tips('请选择经营类型！')
            return;
        } else if (!this.data.fileId) {
            this.tips('请上传营业执照！')
            return;
        } else {
            this.throttle(() => {
                this.addMerchant()
            })
        }
    },
    // 跳转审核提示页面
    toAuditStatus() {
        wx.navigateTo({
            url: "/pages/auditStatus/index",
        })
    },
    // 点击选择图片后上传
    upload() {
        let _this = this
        wx.chooseMedia({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                let tempFilePaths = res.tempFiles[0].tempFilePath
                _this.uploadFile(tempFilePaths)
            }
        })
    },
    // 上传云存储
    uploadFile(tempFilePath) {
        let _this =this
        wx.cloud.uploadFile({
            cloudPath: 'merchant/' + new Date().toLocaleString() + '.png',
            filePath: tempFilePath,
            success(res) {
                _this.setData({
                    fileId: res.fileID
                })
            }
        })
    },
    // 商家入驻的注册接口
    addMerchant() {
        let _this = this
        wx.cloud.callFunction({
            name: 'merchantInfo',
            data: {
                type: 'addMerchantInfo',
                merchantName: this.data.form.merchantname,
                merchantPhone: this.data.form.merchantphone,
                merchantSex: parseInt(this.data.form.merchantsex),
                storeName: this.data.form.storename,
                storeAddress: this.data.form.storeaddress,
                storeClass: this.data.storeclass,
                license: this.data.fileId
            }, success(res) {
                console.log(res);
                _this.toAuditStatus()
            }
        })
    },
    // 按钮的节流
    throttle(callback) {
        let _this = this
        if (_this.data.flag) {
            callback();
            _this.setData({
                flag: false
            })
        } else {
            console.log('别点啦');
            return
        }
        setTimeout(() => {
            _this.setData({
                flag: true
            })
        }, 2000)

    }
})