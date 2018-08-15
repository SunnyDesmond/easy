import {formatDate,money,urlParam} from './easy';
// 年月日
const yymmdd1 = formatDate(new Date().getTime(),'YY年MM月DD日');
document.querySelector("#yymmdd1").innerHTML = yymmdd1;

const yymmdd2 = formatDate(new Date().getTime(),'YY-MM-DD');
document.querySelector("#yymmdd2").innerHTML = yymmdd2;

const yymmdd3 = formatDate(new Date().getTime(),'YY/MM/DD');
document.querySelector("#yymmdd3").innerHTML = yymmdd3;

const yymmdd4 = formatDate(new Date().getTime(),'今天是YY年MM月DD号');
document.querySelector("#yymmdd4").innerHTML = yymmdd4;
// 年月日 时分
const yymmddhhmm = formatDate(new Date().getTime(),"YY-MM-DD hh:mm");
document.querySelector("#yymmddhhmm").innerHTML = yymmddhhmm;
// 年月日 时分秒
const yymmddhhmmss = formatDate(new Date().getTime(),"YY-MM-DD hh:mm:ss");
document.querySelector("#yymmddhhmmss").innerHTML = yymmddhhmmss;


// 金额千分化
const money1=money(123456789.23979213);
document.querySelector("#money").innerHTML = money1;

// 解析url参数
const urlParam1 = urlParam().id;
document.querySelector("#urlParam").innerHTML = urlParam1;

