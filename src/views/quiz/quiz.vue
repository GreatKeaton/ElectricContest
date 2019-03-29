<template>
  <div class="quiz">
    <ul class="top-nav-list">
      <li :class="{'active': navActiveIndex === index}" @click="navActiveIndex = index" v-for="(item, index) in navList" v-bind:key='index'><span>{{item}}</span></li>
    </ul>
    <div class="content">
      <ul class="left-scroll">
        <li @click="changePic(1)"><img src="../../images/quiz/1_1.png" alt=""></li>
        <li @click="changePic(2)"><img src="../../images/quiz/1_2.png" alt=""></li>
        <li class="active" @click="changePic(3)"><img src="../../images/quiz/1_3.png" alt=""></li>
        <li @click="changePic(4)"><img src="../../images/quiz/1_4.png" alt=""></li>
        <li @click="changePic(5)"><img src="../../images/quiz/1_5.png" alt=""></li>
      </ul>

      <div class="detail">
         <img src="../../images/quiz/2_2.png" alt="">
         <article>
           <h1>新春新玩法 扫码红包同欢庆</h1>
           <span>ManBetX万博活动期间每日累计投注≥5000元（彩票投注不予计算）即可完成一次签到点亮签到日历，累计达到签到天数即可获得奖励</span>
           <span>签到越多奖励越高。收到红包有惊喜哦，扫描上方二维码，新春红包任您拿。</span>
           <a href="">查看详情</a>
         </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: ['全部活动', '最新活动', '常规活动', '英雄联盟活动', '王者荣耀活动', 'DOTA活动', 'CSGO活动', '绝地求生活动', '守望先锋活动'],
      navActiveIndex: 0,
      picActiveIndex: 3
    }
  },
  created () {
    
  },
  methods: {
    changePic: function(ind){
      this.picActiveIndex = ind;
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/main';
  @import '../../styles/common';
  @import './quiz';
</style>
