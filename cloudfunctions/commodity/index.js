const getProductDetails = require('../commodity/getProductDetails/index');

// 云函数入口函数
exports.main = async (event, context) => {
   switch(event.type){
       case'getProductDetails':
       return await getProductDetails.main(event, context);
   }

}