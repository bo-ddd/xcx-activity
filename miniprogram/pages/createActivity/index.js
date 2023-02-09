// pages/createActivity/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        disabled:true,
        chosen: '',
        form:{
            nameValue: '',
            titleValue: '',
            dateStartDay: '2023-01-01',
            dateEndDay: '2023-01-01',
            radio: '',
            radio1:'',
            textareaValue: "",
            prizeName: '',
            prizeNum: '',
            peopleNum:'',
        },
        fileId:'',
        flId:'',
        // fileId:'',
        prizeSettingList: [{
            id: 1,
            prizeMapIcon: '../../images/icon-add_p.png',
            prizeName: '奖品名称',
            prizeNum: '奖品数量',
            prizePeople: '助力人数'
        }, ]
    },
    formSubmit(e){
        console.log(e);
        this.setData({
            form : e.detail.value
        })
        if (!this.data.form) {
            wx.showToast({
                title: '请填写完整信息',
                icon: 'error',
                duration: 2000
            })
            return;
        } else {
            this.createActivity()
        }
    },
    formReset(e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value)
        this.setData({
          chosen: ''
        })
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
                // console.log(res);
                _this.setData({
                    fileId :res.tempFiles[0].tempFilePath
                })
                console.log(_this.data.fileId);

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
                _this.setData({
                    // tempFilePath可以作为 img 标签的 src 属性显示图片
                    flId :res.tempFiles[0].tempFilePath
                })
            }
        })
    },
    showToast() {
        
    },
   
    //创建活动
    createActivity(){
        if(!this.data.fileId){
            
        }
        let _this=this
        wx.cloud.callFunction({
            name:'activity',
            data:{
                type:'createActivity',
                ...this.data.form,
                fileId:this.data.fileId,
                flId:this.data.flId,
            },success(res){
                //上传图片
                wx.cloud.uploadFile({
                    cloudPath: 'merchant/' + new Date().toLocaleString() + '.png',
                    filePath: _this.data.fileId,
                    config: {
                        env: 'zliu-dev-4gclbljp64cb5cd3'
                    }, //不可以这么写，这样写会造成线上环境出现重大问题
                    success(res) {
                        wx.navigateTo({
                            url: '/pages/launchActivities/index',
                            success(){
                                wx.showToast({
                                    title: '成功',
                                    icon: 'success',
                                    duration: 2000
                                })
                            }
                        })
                    }
                })
               
           
            },error(err){
                console.log(err);
            }
        })
    },
    //新增活动模块
    createModul(){
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