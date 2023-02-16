// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境


const db = cloud.database();


// 云函数入口函数
exports.main = async (event, context) => {
    // 获取微信云的上下文  content(ctx): 上下文中包含了 当前调用接口的 openid， appid等相关的信息参数；
    const wxContext = cloud.getWXContext();

    // 查询活动记录表（activityRecord）
   return await db.collection("activityRecord").where({
        openId : wxContext.OPENID
    }).get();
}