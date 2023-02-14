const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
 
    let list =  await db.collection('goodsList').where({
      goodsType : event.currentTab
  }).get();
  return {
      status:1,
      event,
      list
  }
}