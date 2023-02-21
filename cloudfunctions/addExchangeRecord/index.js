// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    let nowTime = new Date().getTime();
    const wxContext = cloud.getWXContext()
    try {
        let list = await db.collection('integralExchange').add({
            uuid:event.uuid,
            openid:wxContext.OPENID,
            goodsId:event.goodsId,
            exchangeTime:nowTime,
        })
        return {
            event,
            list
        }
    } catch {
        return {
            success: true,
            data: 'create collection success'
        };
    }

}