// pages/mine/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:'',
        activityList:[
            {
                id:1,
                icon:'../../images/活动.png',
                lable:'发起的活动',
            },
            {
                id:2,
                icon:'../../images/活动.png',
                lable:'参与的活动',
            },
            {
                id:3,
                icon:'../../images/活动.png',
                lable:'活动记录',
            },
        ],
      mineList:[
       {
           id:1,
           icon:'../../images/icon-Settle.png',
           lable:'商家入驻',
           arrowIcon:'../../images/icon-arrow_list.png',
       },
       {
           id:2,
           icon:'../../images/icon-order.png',
           lable:'审核列表',
           arrowIcon:'../../images/icon-arrow_list.png',
       },
       {
           id:3,
           icon:'../../images/icon-opinion.png',
           lable:'投诉建议',
           arrowIcon:'../../images/icon-arrow_list.png',
       },

      ]
    },
   async getUserInfo(){
        let app=getApp()
        let {userInfo}=await app.getUserInfo('用于登录')
        this.setData({
            userInfo: userInfo,
            hasUserInfo: true
          })
    },
    to(e){
       if(e.currentTarget.dataset.id ==1){
          wx.navigateTo({
            url: '/pages/merchantSettlement/index',
          })
       }else if(e.currentTarget.dataset.id ==2){
        wx.navigateTo({
            url: '/pages/examineList/index',
          })
       }else if(e.currentTarget.dataset.id ==3){
        wx.navigateTo({
            url: '/pages/suggest/index',
          })
       }
    },
    activeTo(e){
        console.log(e);
        if(e.currentTarget.dataset.id ==1){
            wx.navigateTo({
              url: '/pages/launchActivities/index',
            })
         }else if(e.currentTarget.dataset.id ==2){
          wx.navigateTo({
              url: '/pages/participateActivities/index',
            })
         }else if(e.currentTarget.dataset.id ==3){
          wx.navigateTo({
              url: '/pages/activitRecord/index',
            })
         }
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