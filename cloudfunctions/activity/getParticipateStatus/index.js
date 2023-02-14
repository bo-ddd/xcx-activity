// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    try {
        const res = await db.collection('participatingActivitieList').where({
            openId: wxContext.OPENID,
            activityId: event.activityId
        }).get();
        return res.data.length ? true : false;
    } catch (err) {
        return err
    }
}