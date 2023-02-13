//处理时间戳=>YY-MM-DD;
function formatDate(time) {
    var year = new Date(time).getFullYear();
    var month = new Date(time).getMonth() + 1;
    var date = new Date(time).getDate();
    //统一格式;
    month = month >= 10 ? month : '0' + month;
    date = date >= 10 ? date : '0' + date;

    return year + '年' + month + '月' + date + '日';
};

function formatTime(time) {
    var hours = new Date(time).getHours();
    var minutes = new Date(time).getMinutes();
    var seconds = new Date(time).getMinutes();
    //统一格式;
    hours = hours >= 10 ? hours : '0' + hours;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    seconds = seconds >= 10 ? seconds : '0' + seconds;
    
    return hours + '时' + minutes + '分' + seconds + '秒';
}


module.exports = {
    formatDate,
    formatTime
}