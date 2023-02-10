// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境


const db = cloud.database();


// 云函数入口函数
exports.main = async (event, context) => {
    // 获取微信云的上下文  content(ctx): 上下文中包含了 当前调用接口的 openid， appid等相关的信息参数；
    const wxContext = cloud.getWXContext();
    // 查询活动记录表（activityRecord）
    try {
        await db.collection('activity').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            fileId:event.fileId, 
            prizeUrl:event.prizeUrl,
            nameValue: event.nameValue,
            titleValue: event.titleValue,
            dateStartDay: event.dateStartDay,
            dateEndDay: event.dateEndDay,
            activityType: event.activityType,
            activityForm:event.activityForm,
            textareaValue: event.textareaValue,
            prizeName: event.prizeName,
            prizeNum:event.prizeNum,
            peopleNum:event.peopleNum,
            openId:wxContext.OPENID
          }
        });
        return {
          success: true,
          event
        };
      } catch (e) {
        // 这里catch到的是该collection已经存在，从业务逻辑上来说是运行成功的，所以catch返回success给前端，避免工具在前端抛出异常
        return {
          success: true,
          data: 'create collection success'
        };
      }
}