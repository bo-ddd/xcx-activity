// pages/entryProcess/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      settleList:[
          {
             id:1,
             text:'商家入驻首页',
             icon:'../../images/icon-fang.png'
          },
          {
             id:2,
             text:'商家入驻规则',
             icon:'../../images/icon-rule (2).png'
          },
          {
             id:3,
             text:'商家填写信息',
             icon:'../../images/icon-upload (2).png'
          },
          {
             id:4,
             text:'商家提交审核',
             icon:'../../images/icon-examine.png'
          },
          
      ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.showLoading()
    },
    showLoading(){
        wx.showLoading({
            title: '加载中',
          })
          
          setTimeout(function () {
            wx.hideLoading()
          }, 500)
    },
    nextTo(){
        wx.navigateTo({
          url: '/pages/merchantRules/index',
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