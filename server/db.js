/**
 * Created by zhangxin on 2017/4/24.
 */
const fs = require("fs");

const dbFun=new Object();
dbFun.getShiYongFile=function () {
    let database;
    fs.readFile(__dirname+'/data/shiyong.json', 'utf8', function (err, data) {
        if (err) throw err;
        database=data;
    });
    return database;
};
dbFun.getZhengShiFile=function () {
    let database;
    fs.readFile(__dirname+'/data/zhengshi.json', 'utf8', function (err, data) {
        if (err) throw err;
        database=data;
    });
    return database;
};
dbFun.getZhongDianFile=function () {
    let database;
    fs.readFile(__dirname+'/data/zhongdian.json', 'utf8', function (err, data) {
        if (err) throw err;
        database=data;
    });
    return database;
};
module.exports = dbFun;
