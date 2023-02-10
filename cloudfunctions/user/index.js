// 云函数入口文件
const cloud = require('wx-server-sdk')
const getMyActivityRecordList = require('./getMyActivityRecordList')
<<<<<<< HEAD
const setUserInfo = require('./setUserInfo')

=======
const getUserInfo = require('./getUserInfo')
>>>>>>> e8f92720da36fe6699969d750469b35b94d5ed93
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    // event: 前端传过来的参数；  
    const { type } = event;
    const wxContext = cloud.getWXContext()
    const res = {
        status: 1,
        msg:'success',
    };
    switch(type){
        case 'getMyActivityRecordList':
            res.data = await getMyActivityRecordList.main(event, context); 
            // res.data = {
            //     openid: wxContext.OPENID
            // }
            return res;
        case 'getUserInfo':
            res.data = await getMyActivityRecordList.main(event, context); 
            return res;
        case 'setUserInfo':
            res.data = await setUserInfo.main(event, context); 
            // res.data = {
            //     openid: wxContext.OPENID
            // }
            return res;
        default:
            res.status = 0;
            res.msg =  '接口不存在';
            res.data = null;
            break;
            case 'getUserInfo':
               return await getUserInfo.main(event, context); 
    }
}