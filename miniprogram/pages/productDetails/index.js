// pages/productDetails/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productDetails:[],
        id : '',
        currentTab:0,
        flag:true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
         that.setData({ 
         id: options._id, 
         })
      this.getGoodsDetail()
    },
    //点击收藏变颜色
    collection(e){
        if(this.data.flag){
            this.setData({
                flag:false
            })
        }else{
            this.setData({
                flag:true
            })
        }
    },
    //兑换商品按钮跳转
    to(e){
        wx.navigateTo({
          url: '/pages/confirmOrder/index?id='+e.currentTarget.dataset.id,
        })
    },
    //获取数据
    getGoodsDetail(e){      
       let _that = this
    //    let arr = []
       wx.cloud.callFunction({
           name:'goods',
           data:{
               type:'getProductDetails',
               goodsId : _that.data.id
           },success:function(res){
               _that.setData({
                productDetails:res.result.list.data
               })

           }
       })
    },
    colorclick(e){
        this.setData({
            currentTab:e.currentTarget.dataset.idx
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