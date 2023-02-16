// 云函数入口文件
const cloud = require('wx-server-sdk')


cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
// 云函数入口函数
const db = cloud.database();
const _ = db.command
exports.main = async (event, context) => {
    let nowTime = new Date().getTime();
    let changeTyp1 = () => {
        return new Promise((resolve, reject) => {
            db.collection('activity').where({
                activityStartTime: _.gte(nowTime),
                activityStatus: 0
            }).update({
                data: {
                    activityStatus: 1
                }
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    let changeType2 = () => {
        return new Promise((resolve, reject) => {
            db.collection('activity').where({
                activityStartTime: _.gte(nowTime),
                activityStatus: 1
            }).update({
                data: {
                    activityStatus: 2,
                }
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }
    Promise.all([changeTyp1(), changeType2()]).then(res => {
        console.log('----------------我走到了更改的方法----------------');
        console.log(res);
        return res;
    }).catch(err => {
        return err;
    })
}
