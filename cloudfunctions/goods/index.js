// 云函数入口文件
const cloud = require('wx-server-sdk')
const getHotGoods = require('./getHotGoods/index')
const getGoodsType = require('./getGoodsType/index')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  switch(event.type){
    case 'getHotGoods':
        return await getHotGoods.main(event,context);
        case 'getGoodsType':
            return await getGoodsType.main(event,context);
 }
}