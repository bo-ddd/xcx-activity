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
        ///根据我参与的活动id ，对照所有活动id 查询到我参与的活动所有数据
       const res=await db.collection('activity').aggregate()
    //    .sort({
    //        //1升序  -1 降序
    //     activityStartTime: -1,
    //    })
        .lookup({
          from: 'participatingActivitieList',//被关联的表
          localField: '_id',//当前表想要查的字段
          foreignField: 'activityId',//关联表想要的字段
          as: 'userParticipatingList',
        }).sort({
            activityStartTime:1
        })
        .end()
        console.log(res);
        return res
    } catch (err) {
        return err
    }
}