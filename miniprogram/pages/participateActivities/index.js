// pages/participateActivities/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentData:0,
        waitActivityList: [
            {
                id: 1,
                title: '帅娃娃哈哈哈',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
            {
                id: 2,
                title: '乌拉拉魔法棒',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
            {
                id: 3,
                title: '叫你一声你敢答应吗',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
        ],
        endActivityList: [
            {
                id: 1,
                title: '帅娃娃哈哈哈',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
            {
                id: 2,
                title: '乌拉拉魔法棒',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
            {
                id: 3,
                title: '叫你一声你敢答应吗',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
        ],
        notStartedActivityList: [
            {
                id: 1,
                title: '帅娃娃哈哈哈',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
            {
                id: 2,
                title: '乌拉拉魔法棒',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
            {
                id: 3,
                title: '叫你一声你敢答应吗',
                imgUrl: 'https://7a6c-zliu-dev-4gclbljp64cb5cd3-1302106483.tcb.qcloud.la/static/activity/img-activity.png?sign=92b504f8dbc1315a2db61d1da53d766f&t=1675306209',
            },
        ],
    },

    bindchange: function (e) {
        const that = this;
        that.setData({
            currentData: e.detail.current
        })
    },
    //点击切换，滑块index赋值
    checkCurrent: function (e) {
        const that = this;
        if (that.data.currentData === e.target.dataset.current) {
            return false;
        } else {

            that.setData({
                currentData: e.target.dataset.current
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