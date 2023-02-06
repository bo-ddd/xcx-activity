Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    userInfo:{},
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
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
    ],
    hotCommodities:[
        {
            id:1,
            images:'../../images/icon-best-sellers.jpg',
            title:'全家一周出游，28寸纯PC斜纹拉链拉杆箱123132312213312',
            integral:20056
        },
        {
            id:2,
            images:'../../images/icon-best-sellers.jpg',
            title:'全家一周出游，28寸纯PC斜纹拉链拉杆箱123132312213312',
            integral:20056
        },
        {
            id:3,
            images:'../../images/icon-best-sellers.jpg',
            title:'全家一周出游，28寸纯PC斜纹拉链拉杆箱123132312213312',
            integral:2003
        },
        {
            id:4,
            images:'../../images/icon-best-sellers.jpg',
            title:'全家一周出游，28寸纯PC斜纹拉链拉杆箱123132312213312',
            integral:2002
        },
        {
            id:5,
            images:'../../images/icon-best-sellers.jpg',
            title:'全家一周出游，28寸纯PC斜纹拉链拉杆箱123132312213312',
            integral:2100
        },
        {
            id:6,
            images:'../../images/icon-best-sellers.jpg',
            title:'全家一周出游，28寸纯PC斜纹拉链拉杆箱123132312213312',
            integral:2010
        },
    ]

  },

  to(e){
    wx.navigateTo({
      url: '/pages/'+e.currentTarget.dataset.name+'/index',
    })
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