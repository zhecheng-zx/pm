/**
* Created by zhangxin on 2017/3/23.
* 正式客户管理
*/
<template>
    <div class="event-list" v-loading="loading" element-loading-text="加载中……">
        <div id="search_container">
            <search-box :searchNames="searchNames" @searchDataChange="onSearchDataChange" class="dark"></search-box>
        </div>
        <div class="table-box">
            <div class="btn-box text-right">
                <el-button type="primary" @click="dialogFormVisible = true">新建客户</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%" border class="tran-table no-col-title" :resizable="false">
                <el-table-column :min-width="50" prop="eventState" label="来源" header-align="left" align="left"></el-table-column>
                <!--<el-table-column prop="today" label="项目名称" align="center">-->
                <!--<template scope="scope">-->
                <!--<el-button type="text" size="small" @click="watchDetails()">查看</el-button>-->
                <!--</template>-->
                <!--</el-table-column>-->
                <el-table-column prop="eventName" label="项目名称" align="center" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="eventState" label="客户单位名称" align="center"></el-table-column>
                <el-table-column prop="eventState" label="合同金额" align="center"></el-table-column>
                <el-table-column prop="eventState" label="销售人员" align="center"></el-table-column>
                <el-table-column prop="eventState" label="运维人员" align="center"></el-table-column>
                <el-table-column prop="startTime" label="开始时间" align="center"></el-table-column>
                <el-table-column prop="endTime" label="结束时间" align="center"></el-table-column>
                <el-table-column prop="eventState" label="状态" align="center"></el-table-column>
                <el-table-column label="操作" :min-width="120" align="center">
                    <template scope="scope">
                        <el-button type="text" size="small" @click="watchDetails()">查看</el-button>
                        <el-button type="text" size="small" disable="disable">|</el-button>
                        <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
                        <el-button type="text" size="small" disable="disable">|</el-button>
                        <el-button type="text" @click.native.prevent="deleteRow(scope.$index, tableData)" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination class="edu-pagination"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-size="10"
                       layout="prev, next, jumper, total"
                       :total="100">
        </el-pagination>
        <el-dialog title="新建事件" v-model="dialogFormVisible">
            <el-form :model="addEventForm" :rules="rules" ref="addEventForm" label-width="150px">
                <el-form-item label="事件名称" prop="name">
                    <el-input v-model="addEventForm.name" auto-complete="off" placeholder="请输入事件名称"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" prop="startDate">
                    <el-date-picker
                            v-model="addEventForm.startDate"
                            type="datetime"
                            placeholder="选择开始时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间" prop="endDate">
                    <el-date-picker
                            v-model="addEventForm.endDate"
                            type="datetime"
                            placeholder="选择结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="关键词" prop="keyword">
                    <el-input v-model="addEventForm.keyword" auto-complete="off" placeholder="请输入事件关键字，多个用，隔开"></el-input>
                </el-form-item>
                <el-form-item label="相关人物" prop="people">
                    <el-input v-model="addEventForm.people" auto-complete="off" placeholder="请输入相关预警人物关键字/名称"></el-input>
                </el-form-item>
                <el-form-item label="相关微信公众号" prop="weChat">
                    <el-input v-model="addEventForm.weChat" auto-complete="off" placeholder="请输入相关预警微信号关键字/名称"></el-input>
                </el-form-item>
                <el-form-item label="相关微博" prop="weibo">
                    <el-input v-model="addEventForm.weibo" auto-complete="off" placeholder="请输入相关预警微博号关键字/名称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="scss" scoped>
</style>
<script>
    /*
     * import '../../assets/vendor/iCkeck-v1.0.2/js/icheck.min';
     * import "vue-style-loader!css-loader!sass-loader!../../assets/vendor/iCkeck-v1.0.2/css/skins/square/blue.css";
     * import loginButton from './components/loginButton.vue';
     */
    import searchBox from  '../../../components/searchBox/searchBox.vue';
    import "vue-style-loader!css-loader!sass-loader!../../../assets/css/pagination/pagination.scss";
    export default{
        data(){
            return {
                tableData:[
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉中子",
                        eventState:"已过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                    {
                        eventName:"中资企业在缅甸遭冲击，中国使馆交涉",
                        eventState:"未过期",
                        startTime:"2017-03-03",
                        endTime:"2018-03-03"
                    },
                ],
                searchNames: ['vector', 'emotion', 'publishDateTime','officialAcctType'],
                loading:true,
                currentPage: 1,
                dialogFormVisible: false,
                addEventForm: {
                    name: '',
                    startDate: '',
                    endDate: '',
                    keyword: '',
                    people: '',
                    weChat: '',
                    weibo: '',
                },
                rules:{
                    name:[
                        {required:true,message:"请输入事件名称",trigger: 'blur' },
                        {min:4,max:16,message:"长度在 4 到 16 个字符",trigger: 'blur' },
                    ],
                    startDate:[
                        {type: 'date',required:true,message:"请选择开始时间",trigger:'change'}
                    ],
                    endDate:[
                        {type: 'date',required:true,message:"请选择结束时间",trigger:'change'}
                    ],
                    keyword:[
                        {required:true,message:"请输入事件关键词",trigger: 'blur' },
                    ],
                    people:[
                        {required:true,message:"请输入事件相关人物",trigger: 'blur' },
                        {min:4,max:16,message:"长度在 4 到 16 个字符",trigger: 'blur' },
                    ],
                    weChat:[
                        {required:true,message:"请输入相关微信",trigger: 'blur' },
                        {min:4,max:16,message:"长度在 4 到 16 个字符",trigger: 'blur' },
                    ],
                    weibo:[
                        {required:true,message:"请输入相关微博",trigger: 'blur' },
                        {min:4,max:16,message:"长度在 4 到 16 个字符",trigger: 'blur' },
                    ],
                },
            }
        },
        components:{searchBox} ,
        methods:{
            deleteRow(index, rows) {
                this.$confirm('是否删除该事件', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    rows.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            },
            onSearchDataChange(data) {
                console.log("change callback, data :");
                console.log(data);
            },
            watchDetails(){
//                this.$router.push({path:"/home/eventDetails"});
            }
        },
        created(){
        },
        mounted(){
            let vm =this;
            setTimeout(()=>{
                vm.loading=false;
            },100)
        }
    }
</script>