// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    const openid = wxContext.OPENID;
    try {
        console.log('----------------我是连表查询---------')
        console.log(openid);
       const res=await db.collection('participatingActivitieList').aggregate()
        .lookup({
          from: 'activity',//被关联的表
          localField: 'activityId',//当前表想要查的字段
          foreignField: '_id',//关联表想要的字段
          as: 'userParticipatingList',
        })
        .end()
        console.log(res);
        return res
    } catch (err) {
        return err
    }
}