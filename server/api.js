/**
 * Created by zhangxin on 2017/4/24.
 */
const express = require('express');
const router = express.Router();
const db = require('./db');
const fn = () => {};

router.post("/apis/getShiYong",function (req,res) {
    let database = db.getShiYongFile();
    if(database){
        console.log("***********database***********");
        res.send(JSON.stringify(database))
    }
});
router.post("/apis/getZhengShi",function (req,res) {
    let database = db.getZhengShiFile();
    if(database){
        res.send(JSON.stringify(database))
    }
});
router.post("/apis/getZhongdian",function (req,res) {
    let database = db.getZhongDianFile();
    if(database){
        res.send(JSON.stringify(database))
    }
});
module.exports = router;