// 兑换记录
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    try {
        let list = await db.collection('integralExchange').aggregate()
            .lookup({
                from: 'goodsList',
                localField: 'goodsId',
                foreignField: '_id',
                as: 'exchangeList',
            }).end();
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