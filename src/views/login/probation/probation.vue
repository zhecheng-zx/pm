/**
* Created by zhangxin on 2017/4/5.
*/
<template>
    <div class="right-form probation">
        <h1 class="login-title">
            <span>申请试用</span>
        </h1>
        <el-form :model="form" action="/apis/login.do" method="post" :rules="rules" ref="ruleForm" label-width="0" class="ruleForm dark">
            <el-form-item label="">
                <el-input v-model="form.name" placeholder="请输入您的称呼"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.schoolName" placeholder="请输入您所在高校全称"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.professor" placeholder="请输入您的职称"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-col :span="11">
                    <el-input v-model="form.identifyingCode" placeholder="请输入验证码"></el-input>
                </el-col>
                <el-col :span="2">
                    &nbsp;
                </el-col>
                <el-col :span="11" class="text-center">
                    <el-button type="primary submit">获取验证码</el-button>
                </el-col>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.site" placeholder="请输入您的所在地（省／市／县）"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button type="primary submit" @click="onSubmit">提交申请</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
     /*
    * import '../../assets/vendor/iCkeck-v1.0.2/js/icheck.min';
    * import "vue-style-loader!css-loader!sass-loader!../../assets/vendor/iCkeck-v1.0.2/css/skins/square/blue.css";
    * import loginButton from './components/loginButton.vue';
    */
    export default{
        data(){
            return {
                msg:"申请试用",
                form: {
                    name: '',
                    schoolName: '',
                    professor: '',
                    phone: '',
                    identifyingCode: '',
                    email: '',
                    site: '',
                },
                rules:{

                }
            }
        },
        components:{} ,
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        },
        mounted(){
            
        }
    }
</script>