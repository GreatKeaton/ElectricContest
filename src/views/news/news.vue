<template>
  <div class="news">
    <ul class="top-game-nav-list">
      <li :class="{'active': navActiveIndex === index}" @click="navActiveIndex = index" v-for="(item, index) in navList" :key='index'>
        <i :class="'icon-'+index"></i>
        <span>{{item}}</span>
      </li>
    </ul>

    <div class="content">
      <div class="left-info">
        <el-carousel :interval="5000" arrow="always" height="500px">
          <el-carousel-item v-for="item in new Array(4)" :key="item">
            <img src="../../images/news/banner-1.png" alt="">
          </el-carousel-item>
        </el-carousel>

        <div class="search-panel">
          <span :class="{'active': searchListIndex == 1}" @click="searchListIndex == 1">新闻资讯</span>
          <span :class="{'active': searchListIndex == 2}" @click="searchListIndex == 2">图集</span>
          <span :class="{'active': searchListIndex == 3}" @click="searchListIndex == 3">专栏</span>
          <span :class="{'active': searchListIndex == 4}" @click="searchListIndex == 4">视频</span>
          <span :class="{'active': searchListIndex == 5}" @click="searchListIndex == 5">主播观点</span>

          <div class="search-inp">
            <input type="text" placeholder="请输入搜索关键字">
            <i><img src="../../images/news/find.png" alt=""></i>
          </div>
        </div>

        <div class="search-result">
          <ul class="result-info">
            <li v-for="(item, index) in new Array(10)" v-bind:key='index'>
              <img src="../../images/strategy/title.png" alt="">
              <article>
                <h1>[VAC穿点] 灼热沙城Ⅱ</h1>
                <div>
                  <p>大家都知道，在CS：GO这款游戏有种不同的位置，今天就给大家介绍一下自由人这个角色以及如何做一个合格的自由人</p>
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
          <h1>热门赛事 <a href="">更多</a></h1>
          <div class="hot-event-list">
            <ul class="list-result">
              <li v-for="(item, index) in new Array(18)" :key='index'>
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
          <a href="" class="bet-now">立即投注</a>
        </article>

        <article class="right-bottom">
          <h1>深度报道</h1>
          <ul>
            <li v-for="(item, index) in new Array(3)" :key='index'>
              <i class="el-icon-caret-right"></i>
              <span class='text'>花式偷家大盘点！</span>
              <span class='date'>12-19</span>
            </li>
            <li v-for="(item, index) in new Array(8)" :key='index'>
              <i class="el-icon-caret-right"></i>
              <span class='text'>对线黑科技防不胜防 艾黎铁男一锤制裁上单对线黑科技防不胜防 艾黎铁男一锤制裁上单...</span>
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
      navList: ['首页', '英雄联盟', '王者荣耀', 'DDTA2', 'CSGO', '绝地求生', '守望先锋', '星际争霸', '更多'],
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
</style>
