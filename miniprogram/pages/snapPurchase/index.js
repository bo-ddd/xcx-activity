// pages/snapPurchase/index.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        showModal: false,
        name:'张三',
        currentIndex: 0, //默认是活动项
        endCommodity:[
          {
              id:1,
              logo:'../../images/iphone.png',
              title:'价值100元商品',
              presentPrice:'11',
              originalPrice:'101',
              states:0
          },
          {
            id:2,
            logo:'../../images/iphone.png',
            title:'价值100元商品',
            presentPrice:'12',
            originalPrice:'102',
            states:0
        },
        {
            id:3,
            logo:'../../images/iphone.png',
            title:'价值100元商品',
            presentPrice:'13',
            originalPrice:'103',
            states:0
        },
        {
            id:4,
            logo:'../../images/iphone.png',
            title:'价值100元商品',
            presentPrice:'14',
            originalPrice:'104',
            states:1
        },
        {
            id:5,
            logo:'../../images/iphone.png',
            title:'价值100元商品',
            presentPrice:'15',
            originalPrice:'105',
            states:1
        },
        {
            id:6,
            logo:'../../images/iphone.png',
            title:'价值100元商品',
            presentPrice:'16',
            originalPrice:'107',
            states:1
        },
        {
            id:7,
            logo:'../../images/iphone.png',
            title:'价值100元商品',
            presentPrice:'17',
            originalPrice:'106',
            states:2
        },
        {
            id:8,
            logo:'../../images/iphone.png',
            title:'价值100元商品',
            presentPrice:'18',
            originalPrice:'109',
            states:2
        },
        {
            id:9,
            logo:'../../images/iphone.png',
            title:'价值100元商品',
            presentPrice:'19',
            originalPrice:'108',
            states:2
        },
      ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
            
    },

    // 遮罩层
    eject:function(){
        this.setData({
          showModal:true
        })
      },
      /**
      * 点击返回按钮隐藏
      */
      back:function(){
        this.setData({
          showModal:false
        })
      },

    pagechange: function (e) {
        this.setData({
          currentIndex: e.detail.current,
        })
    },
    //点击tab时触发
    titleClick: function (e) {
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
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