// 云函数入口文件
const cloud = require('wx-server-sdk')
const createActivity = require('./createActivity')
<<<<<<< HEAD
const getActivityList = require('./getActivityList')
const getActivityDetail = require('./getActivityDetail')
=======
const updateActivity = require('./updateActivity')

>>>>>>> 82dc48da77c766559802192aa72d36d052a674b5
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    // event: 前端传过来的参数；  
    const { type } = event;
    const wxContext = cloud.getWXContext()
    const res = {
        status: 1,
        msg: 'success',
    };
    switch (type) {
        case 'createActivity':
            res.data = await createActivity.main(event, context);
            // res.data = {
            //     openid: wxContext.OPENID
            // }
            return res;
        case 'updateActivity':
            res.data = await updateActivity.main(event, context);
            return res;
        case 'updateActivity':
            res.data = await updateActivity.main(event, context);
            return res;
        default:
            res.status = 0;
            res.msg = '接口不存在';
            res.data = null;
            break;
        case 'getActivityList':
            res.data = await getActivityList.main(event, context);
            // res.data = {
            //     openid: wxContext.OPENID
            // }
            return res;
        case 'getActivityDetail':
            res.data = await getActivityDetail.main(event, context);
            // res.data = {
            //     openid: wxContext.OPENID
            // }
            return res;
    }
}