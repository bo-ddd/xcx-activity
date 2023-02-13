// 云函数入口文件
const cloud = require('wx-server-sdk');
const createActivity = require('./createActivity');
const getList = require('./getList');
const getActivityList = require('./getActivityList')
const getActivityDetail = require('./getActivityDetail')
const updateActivity = require('./updateActivity') 
const getParticipateStatus = require('./getParticipateStatus')
const participateAactivities = require('./participateAactivities')
const getParticipateList = require('./getParticipateList')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    // event: 前端传过来的参数；  
    const {
        type
    } = event;
    const wxContext = cloud.getWXContext()
    const res = {
        status: 1,
        msg: 'success',
    };
    switch (type) {
        case 'createActivity':
            res.data = await createActivity.main(event, context);
            break;
        case 'getList':
            res.data = await getList.main(event, context);
            break;
        case 'updateActivity':
            res.data = await updateActivity.main(event, context);
            break;
        case 'getActivityList':
            res.data = await getActivityList.main(event, context);
            break;
        case 'getActivityDetail':
            res.data = await getActivityDetail.main(event, context);
            break;
        case 'getParticipateStatus':
            res.data = await getParticipateStatus.main(event, context);
            break;
        case 'participateAactivities':
            participateAactivities.main(event, context);
            break;
        case 'getParticipateList':
            res.data = await getParticipateList.main(event, context);
            break;
        default:
            res.status = 0;
            res.msg = '接口不存在';
            res.data = null;
            break;
    }
    return res;
}