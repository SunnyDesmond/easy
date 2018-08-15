/** 
 * 时间格式化
 */
function formatDate(time, format = 'YY-MM-DD') {
    var date = new Date(time);

    var year = date.getFullYear(),
        month = date.getMonth() + 1, //月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    ////开个长度为10的数组 格式为 00 01 02 03
    var preArr = Array.apply(null, Array(10)).map(function (elem, index) {
        return '0' + index;
    });
    var newTime = format.replace(/YY/g, year)
        .replace(/MM/g, preArr[month] || month)
        .replace(/DD/g, preArr[day] || day)
        .replace(/hh/g, preArr[hour] || hour)
        .replace(/mm/g, preArr[min] || min)
        .replace(/ss/g, preArr[sec] || sec);

    return newTime;
}
/**
 * 金额千分化
 */
function money(v) {
    return Number(v).toLocaleString();
}

function urlParam(){
    const href = window.document.location.href;
    if (href.indexOf("?") > -1) {
        var params = href.split("?")[1];
        var paramArr = params.split('&');
        var res = {};
        for (var i = 0; i < paramArr.length; i++) {
            var str = paramArr[i].split('=');
            res[str[0]] = str[1];
        }
        return res;
    } else {
        return false;
    }
}
export {
    formatDate,
    money,
    urlParam
}