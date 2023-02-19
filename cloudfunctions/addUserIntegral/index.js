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
        await db.collection('userInfo').doc(event._id).update({
            data: {
                integral: event.integral
            }
        })
        return {
            event
        }
    } catch (err) {
        return err
    }
}