// pages/addReceiver/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        usernameInputValue: '',
        phoneInputValue: '',
        labelInputValue: '',
        switchChecked: false,
        submitBtnStatus: true,
        labelList: [{
                id: 1,
                text: '父母家'
            },
            {
                id: 2,
                text: '家'
            },
            {
                id: 3,
                text: '公司'
            },
            {
                id: 4,
                text: '学校'
            }
        ]
    },
    bindUsernameInput(e) {
        this.setData({
            usernameInputValue: e.detail.value
        })
    },
    bindPhoneInput(e) {
        this.setData({
            phoneInputValue: e.detail.value
        })
    },
    bindLabelInput(e) {
        this.setData({
            labelInputValue: e.detail.value
        })
    },
    switchChange(e) {
        this.setData({
            switchChecked: e.detail.value
        })
    },
    cleanInput(e) {
        let name = e.currentTarget.dataset.name;
        this.setData({
            [`${name}`]: ''
        })
    },

    submit() {
        let {
            usernameInputValue,
            phoneInputValue,
            labelInputValue,
            switchChecked
        } = this.data;
        console.log(usernameInputValue, phoneInputValue, labelInputValue, switchChecked);

        if (!usernameInputValue | !phoneInputValue) {
            //校验表单(必填字段：'用户名','手机号');
            wx.showToast({
                title: '请填写完整信息',
                icon: 'error',
                duration: 1000
            })
            return
        } else {
            //调接口，提交表单;

            //成功之后的事件;
            wx.navigateBack({
                delta: 1
            })
            wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 1000
            })
        }

    },
    selectLabel(e) {
        this.setData({
            labelInputValue: e.currentTarget.dataset.text
        })

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