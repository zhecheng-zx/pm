/**
* Created by lifei on 2017/3/21.
*/
<template>
    <div class="search-box">
        <el-row v-for="(data, index) in searchData" v-if="searchNames.indexOf(data.name) != -1">
            <el-col :span="2" class="transition">
                {{data.title}}
            </el-col>
            <el-col :span="22" v-if="!data.buttons || data.buttons.length == 0" class="transition">
                <ul>
                    <li v-for="(item, index1) in data.searchList" class="search-list" :key="item.id"
                        @click="searchLiClick(item, index1, data)" :class="{'search-selected': item.selected}">
                        {{item.text}}
                    </li>
                    <li class="search-list date-span" v-show="show" v-for="item in data.searchList" v-if="item.dateBox == 'show'">
                        <el-date-picker v-model="publishDate" type="daterange" placeholder="选择日期范围" @change="publishDateChange">
                        </el-date-picker>
                    </li>
                </ul>
            </el-col>
            <el-col :span="20" v-else class="transition">
                <ul :class="{'school-list': data.hasMore}">
                    <li class="search-list" v-for="(item, index1) in data.searchList"
                        @click="searchLiClick(item, index1, data)" :class="{'search-selected': item.selected}">
                        {{item.text}}
                    </li>
                    <li class="search-list" v-if="data.hasMore == true" v-show="foldSchool">
                        <i class="el-icon-arrow-down pointer" v-on:click="foldSchoolClick"></i>
                    </li>
                </ul>
            </el-col>
            <el-col :span="2" v-for="btn in data.buttons" class="transition">
                <el-button type="primary" @click="btnClick(data,$event)">{{btn.buttonText}}</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss" scoped>
    .search-box {
        margin-bottom: 10px;
        color: #333;
        background: #fff;
        &.dark{
            background-color: #21273d;
            color:#d0d7ff;
            .el-row{
                .el-col{
                    border-bottom: 1px solid rgba(96,163,255,.1);
                    &:first-child {
                         background: rgba(25,28,45,.32);
                         padding-left: 20px;
                    }
                }
            }
         }
        .el-row {
            .el-col {
                height: 50px;
                border-bottom: 1px solid #d6d6d6;
                line-height: 50px;
                overflow: hidden;
                .search-list {
                    display: inline-block;
                    text-align: center;
                    padding-left: 15px;
                    padding-right: 15px;
                    cursor: pointer;
                }
                &:first-child {
                     background: #e6e6e6;
                     padding-left: 20px;
                 }
            }
            .school-list {
                position: relative;
                li {
                    display: inline-block;
                    .sub-list {
                        display: none;
                    }

                }
            }
        }
        .el-icon-arrow-down {
            position: absolute;
            top: 16px;
            right: 15px;
        }
        .search-selected {
            color: #60a3ff;
        }
        .transition{
            transition: 0.5s;
            -moz-transition: 0.5s; /* Firefox 4 */
            -webkit-transition: 0.5s; /* Safari 和 Chrome */
            -o-transition: 0.5s; /* Opera */
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                searchData:[
                    {
                        'name': 'university',
                        'title' :  '选择高校:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true},
                        ],
                        'hasMore': true,
                        'buttons': [
                            {'buttonText': '添加高校', 'id': 'add-college-btn'}
                        ]
                    },
                    {
                        'name': 'reportPersonage',
                        'title' :  '选择人物:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true},
                        ],
                        'hasMore': true,
                        'buttons': [
                            {'buttonText': '添加人物', 'id': 'add-person-btn'}
                        ]
                    },
                    {
                        'name': 'dimension',
                        'title': '项目状态:',
                        'searchList': [
                            {id: 0, text: '执行中', selected: true, showCharacter: false},
                            {id: 1, text: '成功', selected: false, showCharacter: false},
                            {id: 2, text: '失败', selected: false, showCharacter: false},
                        ]
                    },
                    {
                        'name': 'vector',
                        'title': '销售人员:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true},
                            {id: 1, text: '论坛', selected: false},
                            {id: 2, text: '微博', selected: false},
                            {id: 3, text: '微信', selected: false},
                            {id: 4, text: 'QQ群', selected: false},
                            {id: 5, text: '博客', selected: false},
                            {id: 6, text: '网站门户', selected: false},
                            {id: 7, text: '贴吧', selected: false}
                        ]
                    },
                    {
                        'name': 'emotion',
                        'title': '运维人员:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true},
                            {id: 1, text: '正面', selected: false},
                            {id: 2, text: '负面', selected: false}
                        ]
                    },{
                        'name': 'officialAcctType',
                        'title': '客户状态:',
                        'searchList': [
                            {id: 0, text: '不限', selected: true},
                            {id: 1, text: '正常', selected: false},
                            {id: 2, text: '到期', selected: false},
                        ]
                    },
                    {
                        'name': 'publishDateTime',
                        'title': '到期时间:',
                        'searchList': [
                            {id: 0, text: '不限', selected: true},
                            {id: 1, text: '今天', selected: false},
                            {id: 2, text: '昨天', selected: false},
                            {id: 3, text: '近7天', selected: false},
                            {id: 4, text: '近一个月', selected: false},
                            {id: 5, text: '自定义时间', dateBox: 'show', selected: false}
                        ],
                        'hasDateBox': true
                    }

                ],
                msg: "",
                show: false,
                publishDate: [],
                foldSchool: false
            }
        },
        components: {},
        methods: {
            add() {
                let vm = this;
                this.$nextTick(function () {
                    if($('.school-list').height() > 50){
                        this.foldSchool = true;
                    }
                });
            },

            searchLiClick (item, index1, data) {
                for (var i  in data.searchList) {
                    data.searchList[i].selected = false;
                }
                item.selected = true;

                if (data.hasDateBox == true && !item.dateBox) {
                    this.show = false;
                }

                if (item.dateBox == 'show') {
                    this.show = true;
                }

                if (data.name === 'publishDateTime') {
                    if (item.text === '自定义时间') {
                        //如果是自定义时间，触发回调放在控件的change中
                        return;
                    } else {
                        this.publishDate = [];
                    }
                }

                // searchDataChange回调
                this.$emit('searchDataChange', this.buildParam());
            },

            foldSchoolClick() {
                if ($('.school-list .el-icon-arrow-down').hasClass('el-icon-arrow-up')) {
                    $('.el-icon-arrow-down').removeClass('el-icon-arrow-up');
                    $('.school-list').closest('div.el-row').children().each(function (index) {
                        $(this).height(50);
                    });
                } else {
                    $('.school-list .el-icon-arrow-down').addClass('el-icon-arrow-up');
                    var height = $('.school-list').height();
                    $('.school-list').closest('div.el-row').children().each(function (index) {
                        $(this).height(height);
                    });
                }
            },

            btnClick(item,el) {
                let vm  = this;
                let elVal = $(el.target).html();
                switch(elVal) {
                    case "预警设置":
                        vm.$router.push({path:"/home/publicOpinionRule"});
                        break;
                }
            },
            /**日历控件改变*/
            publishDateChange() {
                if (this.publishDate.length > 0) {
                    this.$emit('searchDataChange', this.buildParam());
                }
            },
            /**获取用户设置信息*/
//            getUserParams() {
//                this.$http.post('/apis/user/getUnivsAndPersonage.json').then(
//                    (response) => {
//                        if (response.data.success) {
//                            let univs = response.data.data.univs;
//                            for (var i = 0; i < univs.length; i++) {
//                                this.searchData[0].searchList.push({id: i + 1, text: univs[i], selected: false})
//                            }
//                            let persons = response.data.data.persons;
//                            for (var i = 0; i < persons.length; i++) {
//                                this.searchData[1].searchList.push({id: i + 1, text: persons[i], selected: false})
//                            }
//                        } else {
//                            console.error(response.data.message);
//                        }
//
//                        let dimension = this.$route.query.dimension;
//                        if (dimension) {
//                            for (let i  in this.searchData[2].searchList) {
//                                if (this.searchData[2].searchList[i].text == dimension){
//                                    this.searchData[2].searchList[i].selected = true;
//                                } else {
//                                    this.searchData[2].searchList[i].selected = false;
//                                }
//                            }
//                        }
//
//                        let university = this.$route.query.university;
//                        if (university && university.length > 0) {
//                            for (let i  in this.searchData[0].searchList) {
//                                if (this.searchData[0].searchList[i].text == university){
//                                    this.searchData[0].searchList[i].selected = true;
//                                } else {
//                                    this.searchData[0].searchList[i].selected = false;
//                                }
//                            }
//                        }
//
//                        // 参数加载完毕回调
//                        this.$emit('onload', this.buildParam());
//                    }, (response) => {
//                        console.error(response);
//                    }
//                );
//            },
            /**构建参数对象*/
            buildParam() {
                let result = {};
                let searchData = this.searchData;
                let searchNames = this.searchNames;
                loop: for (var i = 0; i < searchNames.length; i++) {
                    var name = searchNames[i];
                    for (var j = 0; j < searchData.length; j++) {
                        if (searchData[j].name === name) {
                            var searchList = searchData[j].searchList;
                            for (var k = 0; k < searchList.length; k++) {
                                if (searchList[k].selected) {
                                    var text = searchList[k].text;
                                    if (name === 'university') {
                                        var univs = [];
                                        if (text != '全部') {
                                            univs.push(text);
                                        }
                                        result[name] = univs;
                                        break;
                                    }
                                    if (text === '不限') {
                                        break;
                                    }
                                    if (name === 'publishDateTime') {

                                        var publishDateTime = {};
                                        var startSuffix = " 00:00:00";
                                        var endSuffix = " 23:59:59";
                                        var format = 'yyyy-MM-dd';

                                        if (text === '自定义时间') {
                                            publishDateTime.startDate = this.formatDate(this.publishDate[0], format) + startSuffix;
                                            publishDateTime.endDate = this.formatDate(this.publishDate[1], format) + endSuffix;
                                        } else {
                                            var now = new Date();
                                            var nowDate = this.formatDate(now, format);
                                            var oneDayMills = 1000 * 60 * 60 * 24;
                                            if (text === '今天') {
                                                publishDateTime.startDate = nowDate + startSuffix;
                                                publishDateTime.endDate = nowDate + endSuffix;
                                            }
                                            if (text === '昨天') {
                                                var date = this.formatDate(new Date(now.getTime() - oneDayMills), format);
                                                publishDateTime.startDate = date + startSuffix;
                                                publishDateTime.endDate = date + endSuffix;
                                            }
                                            if (text === '近7天') {
                                                var date = this.formatDate(new Date(now.getTime() - oneDayMills * 7), format);
                                                publishDateTime.startDate = date + startSuffix;
                                                publishDateTime.endDate = nowDate + endSuffix;
                                            }
                                            if (text === '近一个月') {
                                                var date = this.formatDate(new Date(now.getTime() - oneDayMills * 30), format);
                                                publishDateTime.startDate = date + startSuffix;
                                                publishDateTime.endDate = nowDate + endSuffix;
                                            }

                                        }
                                        result['startDate'] = publishDateTime.startDate;
                                        result['endDate'] = publishDateTime.endDate;
                                        break;
                                    }
                                    result[name] = text;
                                    break;
                                }
                            }
                            continue loop;
                        }
                    }
                }
                return result;
            },
            /**格式化日期*/
            formatDate(date, fmt) {
                var o = {
                    "M+": date.getMonth() + 1, //月份
                    "d+": date.getDate(), //日
                    "h+": date.getHours(), //小时
                    "m+": date.getMinutes(), //分
                    "s+": date.getSeconds(), //秒
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds()
                    //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "")
                        .substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        },
        mounted() {
            this.add();
//            this.getUserParams();
        },
        props: ["searchNames"],
    }
</script>