/**
 * Created by zhangxin on 2017/4/24.
 */
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const resolve = file => path.resolve(__dirname, file);
const api = require('./api');
const dataBase = require('./db');
const app = express();

app.set('port', (process.env.port || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/dist', express.static(resolve('../dist')));
app.use(api);

/*查询试用用户数据*/
app.get('*', function (req, res) {
    const fileName = 'index.html';
    const html = fs.readFileSync(resolve('../' + fileName), 'utf-8');
    res.send(html);
});

app.listen(app.get('port'), function () {
    console.log('Visit http://localhost:' + app.get('port'))
});