// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
// 云函数入口函数
exports.main = (event, context) => {
    const wxContext = cloud.getWXContext();
    //添加用户信息
    try {
        db.collection('userInfo').add({
            data: {
                openId: wxContext.OPENID,
                avatarUrl: event.avatarUrl,
                nickName: event.nickName,
                integral: 0
            }
        })
    } catch (e) {
        return {
            success: true,
            data: 'create collection success'
        };
    }
}