// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境


const db = cloud.database();


// 云函数入口函数
exports.main = async (event, context) => {
    try {
        const res = await db.collection('activity').where({
            activityType: event.activityType,
            //examineStatus:1
        }).get();
        return res.data
    } catch (err) {
        throw err
    }

}