import Vue from 'vue';
import Router from 'vue-router';

//首页
const home = r =>
  require.ensure([], () => r(require("../views/home/home.vue")), "home");
//首页英文版
const homeEn = r =>
  require.ensure([], () => r(require("../views/home-en/navigation.vue")), "home-en");
//首页精简版
const streamlineEn = r =>
  require.ensure([], () => r(require("../views/streamline/index-en.vue")), "streamline");

//竞猜活动
const quizEn = r =>
  require.ensure([], () => r(require("../views/quiz/quiz-en.vue")), "quiz");
//数据中心
const datacenterEn = r =>
  require.ensure([], () => r(require("../views/datacenter/datacenter-en.vue")), "datacenter");
//赛事新闻
const newsEn = r =>
  require.ensure([], () => r(require("../views/news/news-en.vue")), "news");
  //情报攻略
const strategyEn = r =>
  require.ensure([], () => r(require("../views/strategy/strategy-en.vue")), "strategy");
//玩法规则
const rulesEn = r =>
  require.ensure([], () => r(require("../views/rules/rules-en.vue")), "rules"); 
//排行榜
const rankingEn = r =>
  require.ensure([], () => r(require("../views/ranking/ranking-en.vue")), "ranking");
//商城
const mallEn = r =>
  require.ensure([], () => r(require("../views/mall/mall-en.vue")), "mall");
//视频中心
const videosEn = r =>
  require.ensure([], () => r(require("../views/videos/videos-en.vue")), "videos");

// -----------中文--------------
// 竞猜活动
//首页精简版
const streamline = r =>
  require.ensure([], () => r(require("../views/streamline/index.vue")), "streamline");
const quiz = r =>
  require.ensure([], () => r(require("../views/quiz/quiz.vue")), "quiz"); 
//数据中心
const datacenter = r =>
  require.ensure([], () => r(require("../views/datacenter/datacenter.vue")), "datacenter"); 
//赛事新闻
const news = r =>
  require.ensure([], () => r(require("../views/news/news.vue")), "news");
  //情报攻略
const strategy = r =>
  require.ensure([], () => r(require("../views/strategy/strategy.vue")), "strategy");  
//玩法规则
const rules = r =>
  require.ensure([], () => r(require("../views/rules/rules.vue")), "rules");  
//排行榜
const ranking = r =>
  require.ensure([], () => r(require("../views/ranking/ranking.vue")), "ranking");  
//商城
const mall = r =>
  require.ensure([], () => r(require("../views/mall/mall-en.vue")), "mall");
  // require.ensure([], () => r(require("../views/mall/mall.vue")), "mall")
//视频中心
const videos = r =>
  require.ensure([], () => r(require("../views/videos/videos-en.vue")), "videos");



Vue.use(Router)

export const RouterMap = [
  {
    path: "",
    redirect: "home"
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/homeEn',
    name: 'homeEn',
    component: homeEn,
  },
  {
    path: '/streamline',
    name: 'streamline',
    component: streamline,
  },
  {
    path: '/streamlineEn',
    name: 'streamlineEn',
    component: streamlineEn,
  },
  {
    path: '/datacenter',
    name: 'datacenter',
    component: datacenter,
  },
  {
    path: '/mall',
    name: 'mall',
    component: mall
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: quiz,
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: ranking
  },
  {
    path: '/rules',
    name: 'rules',
    component: rules
  },
  {
    path: '/strategy',
    name: 'strategy',
    component: strategy
  },
  {
    path: '/videos',
    name: 'videos',
    component: videos
  },
  {
    path: '/datacenterEn',
    name: 'datacenterEn',
    component: datacenterEn,
  },
  {
    path: '/mallEn',
    name: 'mallEn',
    component: mallEn
  },
  {
    path: '/newsEn',
    name: 'newsEn',
    component: newsEn
  },
  {
    path: '/quizEn',
    name: 'quizEn',
    component: quizEn,
  },
  {
    path: '/rankingEn',
    name: 'rankingEn',
    component: rankingEn
  },
  {
    path: '/rulesEn',
    name: 'rulesEn',
    component: rulesEn
  },
  {
    path: '/strategyEn',
    name: 'strategyEn',
    component: strategyEn
  },
  {
    path: '/videosEn',
    name: 'videosEn',
    component: videosEn
  },
  
]
const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: RouterMap
})


export default router
