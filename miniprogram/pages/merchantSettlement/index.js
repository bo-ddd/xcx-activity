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
            storeClass: '',
            uploadLicense: '',
        },
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
        var name = e.currentTarget.dataset.name
        this.setData({
            ['selectItem.grade_name']: name,
            select: false
        })
    },
    // 提交表单
    formSubmit: function (e) {
        console.log(e);
        let { merchantName,
            merchantSex,
            merchantPhone,
            storeName,
            uploadLicense } = e.detail.value;
        let storeClass = e.currentTarget.dataset.id
        if (!merchantName) {
            // && !merchantSex && !merchantPhone && !storeName && !storeClass
            wx.showToast({
                title: '请填写完整信息',
                icon: 'error',
                duration: 1000
            })
            return;
        } else {
            this.toAuditStatus()
        }
        this.setData({
            merchantName,
            merchantSex,
            merchantPhone,
            storeName,
            storeClass
        })
    },
    toAuditStatus() {
        wx.navigateTo({
            url: "/pages/auditStatus/index",
        })
    },
    upload() {
        let _this = this
        wx.chooseMedia({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                // tempFilePath可以作为 img 标签的 src 属性显示图片
                let tempFilePaths = res.tempFiles[0].tempFilePath
                let that = _this
                wx.cloud.uploadFile({
                    cloudPath: 'merchant/' + new Date().toLocaleString() + '.png',
                    filePath: tempFilePaths,
                    config: {
                        env: 'zliu-dev-4gclbljp64cb5cd3'
                    },
                    success(res) {
                        that.setData({
                            cloudId: res.fileID
                        })
                        getTempFileURL()
                    }
                })
            }
        })
    },
    // 获取图片真实链接
    getTempFileURL() {
        let _this = this
        wx.cloud.getTempFileURL({
            fileList: [{
                fileID: this.cloudId
            }],
            success(res) {
                console.log(res.fileList[0].tempFileURL);
                _this.setData({
                    fileId: res.fileList[0].tempFileURL
                })
            }
        })
    }



})