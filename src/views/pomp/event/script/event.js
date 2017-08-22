/**
 * Created by zhangxin on 2017/3/22.
 */
/*
 * import '../../assets/vendor/iCkeck-v1.0.2/js/icheck.min';
 * import "vue-style-loader!css-loader!sass-loader!../../assets/vendor/iCkeck-v1.0.2/css/skins/square/blue.css";
 * import loginButton from './components/loginButton.vue';
 */
import breadCrumb from '../../../../components/breadCrumb/breadCrumb.vue';
export default{
    data(){
        return {}
    },
    components:{breadCrumb} ,
    methods:{
        setBreadCrumb(){
            let breadcrumb=[
                {
                    name:"试用客户",to:{path:"/home/panorama"}
                },
                {
                    name:"客户列表"
                }
            ];
            this.$store.commit("setBreadCrumb",breadcrumb);
        },
    },
    created(){
        this.setBreadCrumb();
    },
    mounted(){

    }
}
