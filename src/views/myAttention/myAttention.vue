/**
* Created by zhangxin on 2017/3/27.
* 人员管理
*/
<template>
    <div class="seeWeibo" id="seeWeibo">
        <el-tabs v-model="activeName" class="custom-tabs left-tabs" @tab-click="handleClick">
            <el-tab-pane label="销售人员" name="todayHot">
                <div class="clearfix btn-box">
                    <div class="pull-right">
                        <el-button type="primary">添加人员</el-button>
                    </div>
                </div>
                <el-card class="box-card">
                    <el-table :data="weiBoOption" :resizable="false" stripe style="width: 100%" border class="tran-table no-col-title yellow-table">
                        <el-table-column type="index" width="70" label="序号"></el-table-column>
                        <el-table-column :show-overflow-tooltip="true" prop="weiBoNumber" label="姓名" align="center"></el-table-column>
                        <el-table-column :show-overflow-tooltip="true" prop="source" label="所属部门" align="center"></el-table-column>
                        <el-table-column :show-overflow-tooltip="true" prop="principal" label="联系方式" align="center"></el-table-column>
                        <el-table-column :show-overflow-tooltip="true" prop="principalEmail" label="负责项目数量" align="center"></el-table-column>
                        <el-table-column label="操作" :min-width="120" align="center">
                            <template scope="scope">
                                <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
                                <el-button type="text" size="small" disable="disable">|</el-button>
                                <el-button type="text" @click.native.prevent="deleteRow(scope.$index, tableData)" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="运维人员" name="weekHot">
                <div class="btn-box clearfix">
                    <div class="pull-right">
                        <el-button type="primary">添加人员</el-button>
                    </div>
                </div>
                <el-card class="box-card">
                    <el-table :data="weiBoOption" :resizable="false" stripe style="width: 100%" border class="tran-table no-col-title yellow-table">
                        <el-table-column type="index" width="70" label="序号"></el-table-column>
                        <el-table-column :show-overflow-tooltip="true" prop="weiBoNumber" label="姓名" align="center"></el-table-column>
                        <el-table-column :show-overflow-tooltip="true" prop="source" label="所属部门" align="center"></el-table-column>
                        <el-table-column :show-overflow-tooltip="true" prop="principal" label="联系方式" align="center"></el-table-column>
                        <el-table-column :show-overflow-tooltip="true" prop="principalEmail" label="负责项目数量" align="center"></el-table-column>
                        <el-table-column label="操作" :min-width="120" align="center">
                            <template scope="scope">
                                <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
                                <el-button type="text" size="small" disable="disable">|</el-button>
                                <el-button type="text" @click.native.prevent="deleteRow(scope.$index, tableData)" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<style lang="scss" scoped>
    #search_container{
        padding: 15px 0 1px;
        background-color: #141725;
    }
    .btn-box{
        padding:20px 20px 0;
    }
    .mt20{margin-top: 20px;}
    .character-name{
        cursor: pointer;
    }
</style>
<script>
    /*
     * import '../../assets/vendor/iCkeck-v1.0.2/js/icheck.min';
     * import "vue-style-loader!css-loader!sass-loader!../../assets/vendor/iCkeck-v1.0.2/css/skins/square/blue.css";
     * import loginButton from './components/loginButton.vue';
     */
    import searchBox from  './../../components/searchBox/searchBox.vue';
    import "vue-style-loader!css-loader!sass-loader!../../assets/css/tabs/tabs.scss";
    export default{
        data(){
            return {
                activeName: 'todayHot',
                weiBoOption:[
                    {
                        weiBoNumber:"清华讲座",
                        source:"人文学院",
                        principal:"刘主任",
                        principalEmail:"liuzhuren@163.com",
                        principalTel:"13212323123",
                        publisher:"找老师",
                        publisherEmail:"zhaolaoshi@163.com",
                        publisherTel:"13421212312",
                        state:"已认证",
                    },
                    {
                        weiBoNumber:"清华讲座",
                        source:"人文学院",
                        principal:"刘主任",
                        principalEmail:"liuzhuren@163.com",
                        principalTel:"13212323123",
                        publisher:"找老师",
                        publisherEmail:"zhaolaoshi@163.com",
                        publisherTel:"13421212312",
                        state:"已认证",
                    },
                    {
                        weiBoNumber:"清华讲座",
                        source:"人文学院",
                        principal:"刘主任",
                        principalEmail:"liuzhuren@163.com",
                        principalTel:"13212323123",
                        publisher:"找老师",
                        publisherEmail:"zhaolaoshi@163.com",
                        publisherTel:"13421212312",
                        state:"已认证",
                    },
                    {
                        weiBoNumber:"清华讲座",
                        source:"人文学院",
                        principal:"刘主任",
                        principalEmail:"liuzhuren@163.com",
                        principalTel:"13212323123",
                        publisher:"找老师",
                        publisherEmail:"zhaolaoshi@163.com",
                        publisherTel:"13421212312",
                        state:"已认证",
                    },
                    {
                        weiBoNumber:"清华讲座",
                        source:"人文学院",
                        principal:"刘主任",
                        principalEmail:"liuzhuren@163.com",
                        principalTel:"13212323123",
                        publisher:"找老师",
                        publisherEmail:"zhaolaoshi@163.com",
                        publisherTel:"13421212312",
                        state:"已认证",
                    }
                ],
                tableData: [
                    {
                        'id': 1,
                        'all': 1,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 2,
                        'all': 2,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 3,
                        'all': 3,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 4,
                        'all': 4,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 5,
                        'all': 5,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 6,
                        'all': 6,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 7,
                        'all': 7,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 8,
                        'all': 8,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 9,
                        'all': 9,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 10,
                        'all': 10,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 11,
                        'all': 11,
                        'name': '习1总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 12,
                        'all': 12,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },{
                        'id': 13,
                        'all': 13,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 14,
                        'all': 14,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    },
                    {
                        'id': 15,
                        'all': 15,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    }
                    ,
                    {
                        'id': 16,
                        'all': 16,
                        'name': '习总',
                        'voiceNum': 888,
                        'readNum': 1024,
                        'hot': 5,
                        'emotion': '已认证'
                    }
                ]
            }
        },
        components:{} ,
        methods:{
            handleClick(event) {
                console.log(event);
            },
            onSearchDataChange(data) {
                console.log("change callback, data :");
                console.log(data);
            },
            toCharacterAnalyse(data){
                console.log(data);
                this.$router.push({path:"/home/characterAnalyse"});
            }
        },
        created(){
        },
        mounted(){

        }
    }
</script>