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
        // env: 'my-env-id',
        traceUser: true,
      });
    }

    this.globalData = {};
    this.getUserProfile=function(desc){
        return new Promise((resolve)=>{
            wx.getUserProfile({
                desc, // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
               async success (res) {
                  console.log(res.userInfo);
                  resolve(res)
                }
              })
        })
    };
    this.getSetting=function(){
        return new Promise((resolve)=> {
            wx.getSetting({
               async success (res) {
                  resolve(res)
                  // res.authSetting = {
                  //   "scope.userInfo": true,
                  //   "scope.userLocation": true
                  // }
                }
              })
           
        })
    };
    this.openSetting=function(){
        return new Promise((resolve,reject)=>{
            wx.openSetting({
               async success (res) {
                resolve(res)
                  // res.authSetting = {
                  //   "scope.userInfo": true,
                  //   "scope.userLocation": true
                  // }
                }
             
              })

        })
    }
  }
});
