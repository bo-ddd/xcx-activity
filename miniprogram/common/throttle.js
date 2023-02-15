function throttle(callback) {
    let flag = true;
    return function () {
        if (flag) {
            callback();
            flag = false;
        } else {
            return
        }
        setTimeout(() => {
            flag = true;
        }, 1000)
    }
}

module.exports = {
    throttle
}