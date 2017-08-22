/**
 * Created by zhangxin on 2017/3/14.
 */
import panorama from './views/pomp/panorama/panorama.vue';
import analyse from './views/pomp/analyse/analyse.vue';
import warning from './views/pomp/warning/warning.vue';
import event from './views/pomp/event/event.vue';
import speech from './views/pomp/speech/speech.vue';
import industryNews from './views/reference/industryNews/industryNews.vue';
import characterNews from './views/reference/characterNews/characterNews.vue';
import seeClearly from './views/reference/seeClearly/seeClearly.vue';
import mediaCoverage from './views/reference/mediaCoverage/mediaCoverage.vue';
import report from './views/reference/report/report.vue';
import seeWeChat from './views/serviceTool/seeweChat/seeweChat.vue';
import seeWeibo from './views/serviceTool/seeWeibo/seeWeibo.vue';
import myAttention from './views/myAttention/myAttention.vue';
import login from './views/login/login.vue';
import home from './views/home/home.vue';
import eventDetails from './views/pomp/event/eventDetails/eventDetails.vue';
import eventList from './views/pomp/event/evenList/eventList.vue';
import publicOpinionRule from "./views/pomp/warning/publicOpinionRule.vue";
import analyseList from "./views/pomp/analyse/analyseList/analyseList.vue";
import characterAnalyse from "./views/pomp/analyse/characterAnalyse/characterAnalyse.vue";
import characterTable from "./views/pomp/analyse/characterTable/characterTable.vue";
import industryNewsList from "./views/reference/industryNews/newsList/industryNewsList.vue"
import industryDetailNews from "./views/reference/industryNews/newsDetail/industryDetailNews.vue";
import myCenter from "./views/myCenter/myCenter1.vue";
import centerList from "./views/myCenter/subViews/centerList.vue";
import centerSystemDetail from "./views/myCenter/subViews/detailViews/systemDetail.vue";
import centerPackageConfirm from "./views/myCenter/subViews/detailViews/packageConfirm.vue";
import centerPackageResult from "./views/myCenter/subViews/detailViews/packageResult.vue";
import centerCharacter from "./views/myCenter/subViews/detailViews/editCharacter.vue";
import centerCollege from "./views/myCenter/subViews/detailViews/editCollege.vue";
import loginBox from './views/login/loginBox/loginBox.vue';
import probation from './views/login/probation/probation.vue';
import forget from './views/login/forget/forget.vue';
export default {
    mode:'history',
    base:__dirname,
    routes:[
        {
            path:"",
            redirect:"/home/event",
        },
        {
            name:"home",
            path:"/home",
            component:home,
            children:[
                {
                    name:"panorama",
                    path:"panorama",
                    component:panorama
                },
                {
                    name:'event',
                    path:"event",
                    component:event
                },
                {
                    name:"report",
                    path:"report",
                    component:report
                },
                {
                    name:"seeWeChat",
                    path:"seeWeChat",
                    component:seeWeChat
                },
                {
                    name:"myAttention",
                    path:"myAttention",
                    component:myAttention
                }
            ]
        }
    ]
}