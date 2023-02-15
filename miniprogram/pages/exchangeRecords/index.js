// pages/exchangeRecords/index.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndex: 0,
    unshipped:[
        {
            numbers:'兑换单号： 62056856842546',
            await:'待发货',
            prizes:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/rice%20cookerd.png.png?sign=ca55fab701be5da99643dc47fe75da18&t=1676360433',
            introtext:'三诺血糖测试仪100支试纸测量血糖的仪器',
            prizesed:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/ricecooker.png.png?sign=18fff8eee802e43a45b3e95753ee85c0&t=1676423028',
            gold:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/icon-goldcoin.png?sign=d064348d2845860222c20f4b13dc49b2&t=1676360917',
            text:'2540',
            funded:'x1',
            tips:'提醒发货',
            aggregate:'共一件,合计(积分)：',
            amount:'2540',
}, 
],
shipped:[{
    numbers:'兑换单号： 62056856842546',
    awaits:'已发货',
    prizesed:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/rice%20cookerd.png.png?sign=ca55fab701be5da99643dc47fe75da18&t=1676360433',
    introtext:'三诺血糖测试仪100支试纸测量血糖的仪器',
    prizesed:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/ricecooker.png.png?sign=18fff8eee802e43a45b3e95753ee85c0&t=1676423028',
    gold:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/icon-goldcoin.png?sign=d064348d2845860222c20f4b13dc49b2&t=1676360917',
    text:'2540',
    funded:'x1',
},
{
prizesed:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/ricecooker.png.png?sign=18fff8eee802e43a45b3e95753ee85c0&t=1676423028',
introtext:'生活元素养生壶全自动加厚玻璃家用多功能煮茶办公室小型',
prizesed:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/bracelet.png.png?sign=37df8118002f747d721a77e54e5510fd&t=1676425442',
gold:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/icon-goldcoin.png?sign=d064348d2845860222c20f4b13dc49b2&t=1676360917',
text:'6890',
funded:'x1',
aggregate:'共两件,合计(积分)：',
amount:'9430',
}],
completed:[{ 
    numbers:'兑换单号： 62056856842546',
    awaits:'已完成',
    prizesed:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/rice%20cookerd.png.png?sign=ca55fab701be5da99643dc47fe75da18&t=1676360433',
    introtext:'三诺血糖测试仪100支试纸测量血糖的仪器',
    prizesed:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/ricecooker.png.png?sign=18fff8eee802e43a45b3e95753ee85c0&t=1676423028',
    gold:'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/icon-goldcoin.png?sign=d064348d2845860222c20f4b13dc49b2&t=1676360917',
    text:'8999',
    funded:'x1',
    aggregate:'共一件,合计(积分)：',
    amount:'8999',

}]

},

/**
 currentIndex: 0,
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


    pagechange: function (e) {
        // 通过touch判断，改变tab的下标值
        console.log(e);
        // if ("touch" === e.detail.source) {
        //   let currentPageIndex = this.data.currentIndex;
        //   currentPageIndex = (currentPageIndex + 1) % 2;
        //   // 拿到当前索引并动态改变
         
        // }
        this.setData({
            currentIndex: e.detail.current,
          })
      },
    
      //点击tab时触发
      titleClick: function (e) {
          console.log(e.currentTarget.dataset.idx);
        this.setData({
          //拿到当前索引并动态改变
          currentIndex: e.currentTarget.dataset.idx
        })
      },
})