Page({
    onShareAppMessage() {
        return {
            title: 'swiper',
            path: 'page/component/pages/swiper/swiper'
        }
    },
   
    data: {
        userInfo: '',
        hasUserInfo: false,
        canIUseGetUserProfile: false,
        background: ['https://img0.baidu.com/it/u=4031581625,3277412684&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675789200&t=7e0c688bfb1f1947d5bd32775270218b', 'https://img0.baidu.com/it/u=3415735950,3480425996&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675789200&t=f217828480b7749bfca080ed07d2cf08', 'https://img2.baidu.com/it/u=3782883384,256687608&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1675789200&t=282b40a649bce69f7f22b307cfe72e21'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        toView: 'green',
        hotGoods: [],
        flashSaleCommodity: [{
                id: 1,
                logo: '../../images/iphone.png',
                title: '泰国制造asdassssssasasdasdasssssssssssssssssssss',
                timeRemaining: new Date(),
                requiredPoints: 2100
            },
            {
                id: 2,
                logo: '../../images/iphone.png',
                title: '泰国制造asdassssssasasdasdasssssssssssssssssssss',
                timeRemaining: new Date(),
                requiredPoints: 2100
            },
            {
                id: 3,
                logo: '../../images/iphone.png',
                title: '泰国制造asdassssssasasdasdasssssssssssssssssssss',
                timeRemaining: new Date(),
                requiredPoints: 2100
            },
            {
                id: 4,
                logo: '../../images/iphone.png',
                title: '泰国制造asdassssssasasdasdasssssssssssssssssssss',
                timeRemaining: new Date(),
                requiredPoints: 2100
            },
        ],
        isRefresh: false,
        currentTab: 0,
        goodsList : [],
        goodsType: [],
        swiperHeight:""
    },
    //轮播图高度自适应
    computeImgHeight(e) {
        var winWid = wx.getSystemInfoSync().windowWidth;      //获取当前屏幕的宽度
        var imgh=e.detail.height;　　　　　　　　　　　　　　　 //图片高度
        var imgw=e.detail.width;
        var swiperH = winWid * imgh / imgw + "px"　           //等比设置swiper的高度。  
        //即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  -->  swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
        this.setData({
          swiperHeight: swiperH		//设置swiper高度
        })
      },

    to(e) {
        wx.navigateTo({
            url: '/pages/' + e.currentTarget.dataset.name + '/index',
        })
    },
    onShow() {
            
    },
//商品跳转商品详情页面
    async navTab(e) {     
        console.log(e);
        await wx.navigateTo({
            url: '/pages/productDetails/index?_id=' + e.currentTarget.id,
        })
    },
    //解决重复授权问题
    async queryUserInfo(){
        let app = getApp()
        await app.queryUserInfo()
        this.setData({
            userInfo: app.globalData.userInfo
        })
    },

    onLoad(e) {
        this.queryUserInfo()
        this.getGoodsType()
        this.getHotGoods()       

    },

//获取商品信息
    getHotGoods() {
        let that = this
        wx.cloud.callFunction({
            name: 'goods',
            data: {
                type: 'getHotGoods',
                currentTab:that.data.currentTab
            },
            success(res) {
                console.log(res);
                that.setData({
                    hotGoods: res.result.list.data
                })
            }
        })
    },
    //   getUserInfo(){
    //     wx.cloud.callFunction({

    //     })
    //   },



    //   getHotGoods(){
    //     let _that = this
    //     wx.cloud.callFunction({
    //       name:'goods',
    //       data:{
    //         type:'goodsList',
    //       },  
    //      success:function(res){
    //             let arr = [];
    //             res.result.data.forEach(item=>{
    //                 if(item.type == 0){
    //                 item.goodsList.forEach(options=>{
    //                     // console.log(options);
    //                     arr.push(options)
    //                 })
    //               }
    //             })
    //             _that.setData({
    //                 hotCommodities : arr
    //               })
    //       }
    //     })
    //   }

    //   scrollToTop() {
    //     this.setAction({
    //       scrollTop: 0
    //     })
    //   },
    //   tap() {
    //     for (let i = 0; i < order.length; ++i) {
    //       if (order[i] === this.data.toView) {
    //         this.setData({
    //           toView: order[i + 1],
    //           scrollTop: (i + 1) * 200
    //         })
    //         break
    //       }
    //     }
    //   },
    //   scroll(e) {
    //     console.log(e)
    //   },
    //   tapMove() {
    //     this.setData({
    //       scrollTop: this.data.scrollTop + 10
    //     })
    //   }

    //分类
    getGoodsType(){
        let that = this;
        let arr = []
        wx.cloud.callFunction({
            name:'goods',
            data:{
                type:'getGoodsType',
            },success(res){

                that.setData({
                    goodsList : res.result.data
                })
                
                res.result.data.forEach(item=>{
                    console.log(item.goodsType);                   
                        if(arr.indexOf(item.goodsType)==-1){  
                            // console.log(item.goodsType);
                            arr.push(item.goodsType)
                        }
                    
                })
                let type = arr.filter((item,index,array)=>{
                    return array.indexOf(item) === index
                })
                that.setData({
                    goodsType : type                    
                })
            }
        })
    },






    details(e){
        console.log(e.currentTarget.dataset.uid);
    },
    // 点击tab栏
     handleClick(e) {
     console.log(e);
     this.setData({
         currentTab:e.currentTarget.dataset.index
        })
    this.getHotGoods()
  },
//   滑动改变index值
bindchange(e){
    console.log(e.detail.current)
    this.setData({
        currentTab:e.detail.current
    })
    this.getHotGoods()
}
//   handleSwiper(e) {
//       console.log(e);
//     let {
//       current,
//       source
//     } = e.detail;
//     if (source === 'autoplay' || source === 'touch') {
//       const currentTab = current
//       this.setData({
//         currentTab
//       })
//     }
//   },
//   handleTolower(e){
//     wx.showToast({
//       title: '到底啦'
//     })
//   },
//   refresherpulling() {
//     wx.showLoading({
//       title: '刷新中'
//     })
//     setTimeout(() => {
//       this.setData({
//         isRefresh: false
//       })
//       wx.showToast({
//         title: '加载完成'
//       })
//     }, 1500)
//   },
})