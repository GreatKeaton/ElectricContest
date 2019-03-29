<template>
  <div class="news">
    <ul class="top-game-nav-list">
      <li :class="{'active': navActiveIndex === index}" @click="navActiveIndex = index" v-for="(item, index) in navList" v-bind:key='index'>
        <i :class="'icon-'+index"></i>
        <span>{{item}}</span>
      </li>
    </ul>

    <div class="content">
      <div class="left-info">
        <el-carousel :interval="5000" arrow="always" height="500px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../images/news/banner-1.png" alt="">
          </el-carousel-item>
        </el-carousel>

        <div class="search-panel">
          <span :class="{'active': searchListIndex == 1}" @click="searchListIndex == 1">news</span>
          <span :class="{'active': searchListIndex == 2}" @click="searchListIndex == 2">photo album</span>
          <span :class="{'active': searchListIndex == 3}" @click="searchListIndex == 3">articles</span>
          <span :class="{'active': searchListIndex == 4}" @click="searchListIndex == 4">video</span>
          <span :class="{'active': searchListIndex == 5}" @click="searchListIndex == 5">broadcaster opinion</span>

          <div class="search-inp">
            <input type="text" placeholder="please enter search keywords">
            <i><img src="../../images/news/find.png" alt=""></i>
          </div>
        </div>

        <div class="search-result">
          <ul class="result-info">
            <li v-for="(item, index) in new Array(10)" v-bind:key='index'>
              <img src="../../images/strategy/title.png" alt="">
              <article>
                <h1>broadcaster opinion</h1>
                <div>
                  <p>The barbarian berserker is back, axes thirsty for more choppy choppy!</p>
                  <div>
                    <span><img src="../../images/strategy/eye.png">177次</span>
                    <span><img src="../../images/strategy/shijian.png">2019-01-24</span>
                    <span><img src="../../images/strategy/gonglve.png">CS：GO</span>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-info">
        <article class="right-top">
          <h1>latest match <a href="">more</a></h1>
          <div class="hot-event-list">
            <ul class="list-result">
              <li v-for="(item, index) in new Array(18)" v-bind:key='index'>
                <img src="../../images/news/EDG.png" alt="">
                <span class="lf-line">
                  EDG <em>1.95</em>
                </span>
                <span class="vs">VS</span>
                <span class="rt-line">
                  IG <em>1.95</em>
                </span>
                <img src="../../images/news/ig.png" alt="">
              </li>
            </ul>
          </div>
          <a href="" class="bet-now">bet now</a>
        </article>

        <article class="right-bottom">
          <h1>Special Report</h1>
          <ul>
            <li v-for="(item, index) in new Array(3)" v-bind:key='index'>
              <i class="el-icon-caret-right"></i>
              <span class='text'>Heisendong and Gunslinger teach you how to take your Heimerdinger from zero to hero!</span>
              <span class='date'>12-19</span>
            </li>
            <li v-for="(item, index) in new Array(8)" v-bind:key='index'>
              <i class="el-icon-caret-right"></i>
              <span class='text'>The barbarian berserker is back, axes thirsty for more choppy choppy!</span>
              <span class='date'>12-19</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: ['Home', 'LOL', 'AOV', 'DDTA2', 'CSGO', 'PUBG', 'overwatch', 'Warcraft III', 'more'],
      navActiveIndex: 1,
      searchListIndex: 1,
    }
  },
  created () {

    },
  methods: {

  },
  components: {

  }
}
</script>


<style lang="less" scoped>
  @import '../../styles/main';
  @import '../../styles/common';
  @import '../../styles/gameNav';
  @import './news';
  .search-panel{
    span{
      width: auto !important;
      height: auto !important;
      margin-left: 10px !important;
      line-height: 20px !important;
      padding: 5px 10px;
      &:first-child{
        margin-left: 20px !important;
      }
    }
  }
</style>
