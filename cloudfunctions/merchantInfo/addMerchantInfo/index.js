// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
     await db.collection('merchantInfo').add({
        data: {
            merchantName: event.merchantName,
            merchantPhone: event.merchantPhone,
            merchantSex: event.merchantSex,
            storeName: event.storeName,
            storeClass: event.storeClass,
            license: event.license
        }
    })
    return {
        status: 1,
        msg: 'success',
        data:null
    }
}