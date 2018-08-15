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
/**
 * 解析url参数
 */
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

/**
 * 数组去重
 */
function arrUnique(arr){
    let result = [], json = {};
    for (var i = 0, len = arr.length; i < len; i++){
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]);  //返回没被删除的元素
        }
    }
    return result;
}
/**
 *  android & ios 交互
 * fnName: 交互方法名
 * fnParam：需要传递的参数
 * 
 */
function callNative(fnName,fnParam=""){
    let browser={
        versions: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息 
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
                iPad: u.indexOf('iPad') > -1, //是否iPad 
            };
        }()
    }
    // 如果不行的话 尝试   window.webkit.messageHandlers.eval(fnName)(fnParam)
    if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
        window.webkit.messageHandlers.fnName(fnParam)
    }
    if (browser.versions.android) {
        window.AndroidWebView.fnName(fnParam)
    }
}

export {
    formatDate,
    money,
    urlParam,
    arrUnique,
    callNative
}