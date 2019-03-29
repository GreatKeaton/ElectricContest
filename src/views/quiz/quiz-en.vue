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
           <h1 style="font-size: 30px;">New year new gameplay, celebrate by scanning red packet QR code</h1>
           <span>During the ManBetX Wanbo event, the daily accumulated bet ≥ 5,000 yuan (the lottery bet will not be counted) consider complete a sign-in calendar, and the accumulated number of days to sign will be rewarded.</span>
           <span>The more you sign in, the higher the reward. Have a surprise with the red envelope, scan the QR code above, and take the New Year red envelope for you.</span>
           <a href="javascript:;">more</a>
         </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: ['All Event', 'New Event', 'Activities', 'LOL Event', 'AOV Event', 'DOTA Event', 'CSGO Event', 'PUBG Event', 'Overwatch Event'],
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
