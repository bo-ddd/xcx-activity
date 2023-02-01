// // pages/home/index.js
// Page({

    
//     /**
//      * 页面的初始数据
//      */
//     data: {
//       userInfo:{}
//     },
    // getUserInfo(res){
    //   this.setData({
    //     userInfo:res.detail.userInfo
    //   })
    //   console.log(res);
    // },

//     /**
//      * 生命周期函数--监听页面加载
//      */
//     onLoad(options) {

//     },

//     /**
//      * 生命周期函数--监听页面初次渲染完成
//      */
//     onReady() {

//     },

//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow() {

//     },

//     /**
//      * 生命周期函数--监听页面隐藏
//      */
//     onHide() {

//     },

//     /**
//      * 生命周期函数--监听页面卸载
//      */
//     onUnload() {

//     },

//     /**
//      * 页面相关事件处理函数--监听用户下拉动作
//      */
//     onPullDownRefresh() {

//     },

//     /**
//      * 页面上拉触底事件的处理函数
//      */
//     onReachBottom() {

//     },

//     /**
//      * 用户点击右上角分享
//      */
//     onShareAppMessage() {

//     }
// })

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    userInfo:{},
    background: ['/images/icon-avatar.png', '/images/icon-home select.png', '/images/icon-mine select .png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    toView: 'green',
    flashSaleCommodity:[
      {
        id:1,
        logo:'../../images/iphone.png',
        title:'泰国制造asdassssssasasdasdasssssssssssssssssssss',
        timeRemaining:new Date(),
        requiredPoints:2100
      },
      {
        id:2,
        logo:'../../images/iphone.png',
        title:'泰国制造asdassssssasasdasdasssssssssssssssssssss',
        timeRemaining:new Date(),
        requiredPoints:2100
      },
      {
        id:3,
        logo:'../../images/iphone.png',
        title:'泰国制造asdassssssasasdasdasssssssssssssssssssss',
        timeRemaining:new Date(),
        requiredPoints:2100
      },
      {
        id:4,
        logo:'../../images/iphone.png',
        title:'泰国制造asdassssssasasdasdasssssssssssssssssssss',
        timeRemaining:new Date(),
        requiredPoints:2100
      },
    ]

  },
  getUserInfo(res){
    this.setData({
      userInfo:res.detail.userInfo
    })
    console.log(res);
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  scroll(e) {
    console.log(e)
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }

})