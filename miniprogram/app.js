// app.js
App({
    onLaunch: function () {
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力');
        } else {
            wx.cloud.init({
                // env 参数说明：
                //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
                //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
                //   如不填则使用默认环境（第一个创建的环境）
                env: 'zliu-dev-4gclbljp64cb5cd3',
                traceUser: true,
            });

        }

        this.globalData = {
            socketStatus: 'closed',
            userInfo:{}
        };
        //判断用户是否登录
        this.queryUserInfo = function () {
            return new Promise((resolve)=>{
                wx.cloud.callFunction({
                    name: 'user',
                    data: {
                        type: 'getUserInfo',
                    }
                }).then(res => {
                    if ( res.result.data[0]) {
                        this.globalData.userInfo= res.result.data[0];
                        resolve(res);
                    } else{ 
                        wx.navigateTo({
                            url: '/pages/login/index',
                        })
                    }
                })
            })
        };
        this.getUserProfile = function (desc) {
            return new Promise((resolve) => {
                wx.getUserProfile({
                    desc, // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                    async success(res) {
                        // console.log(res.userInfo);
                        _this.globalData.userInfo=res.userInfo
                        console.log( _this.globalData.userInfo);
                        resolve(res)
                    }
                })
            })
        };
        this.getSetting = function () {
            return new Promise((resolve) => {
                wx.getSetting({
                    async success(res) {
                        resolve(res)
                        // res.authSetting = {
                        //   "scope.userInfo": true,
                        //   "scope.userLocation": true
                        // }
                    }
                })

            })
        };
        this.openSetting = function () {
            return new Promise((resolve, reject) => {
                wx.openSetting({
                    async success(res) {
                        resolve(res)
                        // res.authSetting = {
                        //   "scope.userInfo": true,
                        //   "scope.userLocation": true
                        // }
                    }

                })
            })
        };
        //开启通信;
        this.openSocket = function () {
            //打开时的动作
            wx.onSocketOpen(() => {
                console.log('WebSocket 已连接')
                this.globalData.socketStatus = 'connected';
                this.sendMessage();
            })
            //断开时的动作
            wx.onSocketClose(() => {
                console.log('WebSocket 已断开')
                this.globalData.socketStatus = 'closed'
            })
            //报错时的动作
            wx.onSocketError(error => {
                console.error('socket error:', error)
            })
            // 监听服务器推送的消息
            wx.onSocketMessage(message => {
                //把JSONStr转为JSON
                message = message.data.replace(" ", "");
                if (typeof message != 'object') {
                    message = message.replace(/\ufeff/g, ""); //重点
                    var jj = JSON.parse(message);
                    message = jj;
                }
                console.log("【websocket监听到消息】内容如下：");
                console.log(message);
            })
        };
        if (this.globalData.socketStatus === 'closed') {
            this.openSocket();
        }

        //发送消息函数;
        this.sendMessage = function () {
            if (this.globalData.socketStatus === 'connected') {
                //自定义的发给后台识别的参数 ，我这里发送的是name
                wx.sendSocketMessage({
                    data: "{\"name\":\"" + wx.getStorageSync('openid') + "\"}"
                })
            }
        }
    },


});