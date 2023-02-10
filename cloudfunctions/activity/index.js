// 云函数入口文件
const cloud = require('wx-server-sdk')
const createActivity = require('./createActivity');
const getList = require('./getList');

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
        default:
            res.status = 0;
            res.msg = '接口不存在';
            res.data = null;
            break;
    }
         return res;
}