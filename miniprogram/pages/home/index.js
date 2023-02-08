Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    userInfo:{},
    background: ['https://img0.baidu.com/it/u=4031581625,3277412684&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675789200&t=7e0c688bfb1f1947d5bd32775270218b', 'https://img0.baidu.com/it/u=3415735950,3480425996&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675789200&t=f217828480b7749bfca080ed07d2cf08', 'https://img2.baidu.com/it/u=3782883384,256687608&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1675789200&t=282b40a649bce69f7f22b307cfe72e21'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    toView: 'green',
    // flashSaleCommodity:[
    //   {
    //     id:1,
    //     logo:'../../images/iphone.png',
    //     title:'泰国制造asdassssssasasdasdasssssssssssssssssssss',
    //     timeRemaining:new Date(),
    //     requiredPoints:2100
    //   },
    //   {
    //     id:2,
    //     logo:'../../images/iphone.png',
    //     title:'泰国制造asdassssssasasdasdasssssssssssssssssssss',
    //     timeRemaining:new Date(),
    //     requiredPoints:2100
    //   },
    //   {
    //     id:3,
    //     logo:'../../images/iphone.png',
    //     title:'泰国制造asdassssssasasdasdasssssssssssssssssssss',
    //     timeRemaining:new Date(),
    //     requiredPoints:2100
    //   },
    //   {
    //     id:4,
    //     logo:'../../images/iphone.png',
    //     title:'泰国制造asdassssssasasdasdasssssssssssssssssssss',
    //     timeRemaining:new Date(),
    //     requiredPoints:2100
    //   },
    // ],
    hotCommodities:[]

  },

  to(e){
    wx.navigateTo({
      url: '/pages/'+e.currentTarget.dataset.name+'/index',
    })
  },

  getUserInfo(e){
    let _that = this
    wx.getUserInfo({
      desc: 'desc',
      success(e){
        _that.setData({
            userInfo:e.userInfo
        })
      }
    })
   
  },

  // async navTab(e){
  //   wx.navigateTo({
  //     url: '/pages/productDetails/index?id='+e.currentTarget.dataset.id,
  //   })
  // },

  onLoad(e){
    let _that = this
    wx.cloud.callFunction({
      name:'goods',
      data:{
        type:'goodsList',
      },  
     success:function(res){
      console.log(res.result.data);
      _that.setData({
        hotCommodities:res.result.data
      })
      }
    })
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