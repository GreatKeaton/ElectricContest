<template>
  <div class="datacenter">
    <ul class="top-game-nav-list">
      <li :class="{'active': navActiveIndex === index}" @click="navActiveIndex = index" v-for="(item, index) in navList" v-bind:key='index'>
        <i :class="(index === 0) ? 'icon-00' : 'icon-'+index"></i>{{item}}
      </li>
    </ul>

    <ul class="game-events">
      <li :class="{'active': navActiveIndex2 === index}" @click="navActiveIndex2 = index" v-for="(item, index) in navList2" v-bind:key='index'>{{item}}</li>
    </ul>

    <div class="query-date">
      <div class="search-panel">
        <ul class="week-list">
          <li class="tull-left"><img src="../../images/datacenter/right.png" alt=""></li>
          <li :class="{'active': weekActiveInd === 1}" @click="weekActiveInd = 1">周一 01-21</li>
          <li :class="{'active': weekActiveInd === 2}" @click="weekActiveInd = 2">周二 01-21</li>
          <li :class="{'active': weekActiveInd === 3}" @click="weekActiveInd = 3">周三 01-21</li>
          <li :class="{'active': weekActiveInd === 4}" @click="weekActiveInd = 4">周四 01-21</li>
          <li :class="{'active': weekActiveInd === 5}" @click="weekActiveInd = 5">周五 01-21</li>
          <li :class="{'active': weekActiveInd === 6}" @click="weekActiveInd = 6">周六 01-21</li>
          <li :class="{'active': weekActiveInd === 7}" @click="weekActiveInd = 7">周日 01-21</li>
          <li class="tull-right"><img src="../../images/datacenter/left.png" alt=""></li>
        </ul>

        <ul class="query-filter">
          <li :class="{'active': filterActiveInd === 1}" @click="filterActiveInd = 1">筛选日期</li>
          <li :class="{'active': filterActiveInd === 2}" @click="filterActiveInd = 2">筛选赛事</li>
        </ul>

        <div class="search-inp">
          <input type="text" placeholder="请输入你要搜索的内容">
          <i><img src="../../images/news/find.png" alt=""></i>
        </div>
      </div>

      <div class="refresh-col clearfix">
        <p class="in-block">我的关注（包含已投注赛事）</p>
        <span class="auto-refresh">3秒后自动刷新</span>
      </div>
    </div>


    <div class="query-content">
      <div class="content-scroll">
        <p>2019-01-27 周日</p>
        <ul class="filter-result clearfix">
          <li v-for="(item, index) in new Array(2)" v-bind:key="index">
            <div class="left-date">
              <span class="time">16:00</span>
              <img src="../../images/datacenter/yxlm.png" alt="">
            </div>
            <div class="right-info">
              <div class="title">
                2019 LCK春季赛升降赛
                <span class="bo">BO3</span>
                <div class="sssr">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="detail">
                <span class="left-star"><img src="../../images/datacenter/star.png" alt=""></span>
                <div class="center-list">
                  <div>
                    <i class="icon-rng"></i>RNG
                    <span class="bo">0</span>
                    <span class="win-rate">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span class="is-star">未开始</span>
                    <div class="sssr">
                      <i>0</i>
                      <i>0.0K</i>
                      <i>0</i>
                      <i>0</i>
                      <i>0</i>
                    </div>
                    <span class="last-text">实力评分：<em>951</em></span>
                  </div>
                  <div>
                    <i class="icon-we"></i>WE&nbsp;&nbsp;
                    <span class="bo">0</span>
                    <span class="win-rate">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span class="star-time">00:00</span>
                    <div class="sssr in-block">
                      <i>0</i>
                      <i>0.0K</i>
                      <i>0</i>
                      <i>0</i>
                      <i>0</i>
                    </div>
                    <span class="last-text">实力评分：<em>991</em></span>
                  </div>
                </div>
                <div class="right-path">
                  <a href="">比赛前瞻</a>
                </div>
              </div>
            </div>
          </li>
          <li v-for="(item, index) in new Array(2)" v-bind:key="index">
            <div class="left-date">
              <span class="time">16:00</span>
              <img src="../../images/datacenter/yxlm.png" alt="">
            </div>
            <div class="right-info">
              <div class="title">
                2019 LCK春季赛升降赛
                <span class="bo">BO3</span>
                <div class="sssr">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="detail">
                <span class="left-star"><img src="../../images/datacenter/esport.png" alt=""></span>
                <div class="center-list">
                  <div>
                    <i class="icon-rng"></i>RNG
                    <span class="bo">0</span>
                    <span class="win-rate">
                      <i></i>
                      <i class="active"></i>
                    </span>
                    <span class="is-star">未开始</span>
                    <em class="rate-state c-blue active">蓝</em>
                    <div class="sssr">
                      <i>0</i>
                      <i>0.0K</i>
                      <i>0</i>
                      <i>0</i>
                      <i>0</i>
                    </div>
                    
                    <span class="last-text">实力评分：<em>951</em></span>
                  </div>
                  <div>
                    <i class="icon-we"></i>WE&nbsp;&nbsp;
                    <span class="bo">0</span>
                    <span class="win-rate">
                      <i class="active"></i>
                      <i class="active"></i>
                      <i class="active"></i>
                    </span>
                    <span class="star-time">00:00</span>
                    <em class="rate-state c-red">红</em>
                    <div class="sssr in-block">
                      <i>0</i>
                      <i>0.0K</i>
                      <i>0</i>
                      <i>0</i>
                      <i>0</i>
                    </div>
                    <img class="color-pic" src="../../images/datacenter/game2.png" alt="">
                    <span class="last-text">实力评分：<em>991</em></span>
                  </div>
                </div>
                <div class="right-path">
                  <a href="">比赛前瞻</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <p class="content-title">全部赛事</p>
        <p>2019-01-27 周日</p>
        <ul class="filter-result clearfix">
          <li v-for="(item, index) in new Array(2)" v-bind:key="index">
            <div class="left-date">
              <span class="time">16:00</span>
              <img src="../../images/datacenter/yxlm.png" alt="">
            </div>
            <div class="right-info">
              <div class="title">
                2019 LCK春季赛升降赛
                <span class="bo">BO3</span>
                <div class="sssr">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="detail">
                <span class="left-star"><img src="../../images/datacenter/star.png" alt=""></span>
                <div class="center-list">
                  <div>
                    <i class="icon-rng"></i>RNG
                    <span class="bo">0</span>
                    <span class="win-rate">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span class="is-star">未开始</span>
                    <div class="sssr">
                      <i>0</i>
                      <i>0.0K</i>
                      <i>0</i>
                      <i>0</i>
                      <i>0</i>
                    </div>
                    <span class="last-text">实力评分：<em>951</em></span>
                  </div>
                  <div>
                    <i class="icon-we"></i>WE&nbsp;&nbsp;
                    <span class="bo">0</span>
                    <span class="win-rate">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span class="star-time">00:00</span>
                    <div class="sssr in-block">
                      <i>0</i>
                      <i>0.0K</i>
                      <i>0</i>
                      <i>0</i>
                      <i>0</i>
                    </div>
                    <span class="last-text">实力评分：<em>991</em></span>
                  </div>
                </div>
                <div class="right-path">
                  <a href="">比赛前瞻</a>
                </div>
              </div>
            </div>
          </li>
          <li v-for="(item, index) in new Array(2)" v-bind:key="index">
            <div class="left-date">
              <span class="time">16:00</span>
              <img src="../../images/datacenter/yxlm.png" alt="">
            </div>
            <div class="right-info">
              <div class="title">
                2019 LCK春季赛升降赛
                <span class="bo">BO3</span>
                <div class="sssr">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div class="detail">
                <span class="left-star"><img src="../../images/datacenter/esport.png" alt=""></span>
                <div class="center-list">
                  <div>
                    <i class="icon-rng"></i>RNG
                    <span class="bo">0</span>
                    <span class="win-rate">
                      <i></i>
                      <i class="active"></i>
                    </span>
                    <span class="is-star">未开始</span>
                    <em class="rate-state c-blue active">蓝</em>
                    <div class="sssr">
                      <i>0</i>
                      <i>0.0K</i>
                      <i>0</i>
                      <i>0</i>
                      <i>0</i>
                    </div>
                    
                    <span class="last-text">实力评分：<em>951</em></span>
                  </div>
                  <div>
                    <i class="icon-we"></i>WE&nbsp;&nbsp;
                    <span class="bo">0</span>
                    <span class="win-rate">
                      <i class="active"></i>
                      <i class="active"></i>
                      <i class="active"></i>
                    </span>
                    <span class="star-time">00:00</span>
                    <em class="rate-state c-red">红</em>
                    <div class="sssr in-block">
                      <i>0</i>
                      <i>0.0K</i>
                      <i>0</i>
                      <i>0</i>
                      <i>0</i>
                    </div>
                    <img class="color-pic" src="../../images/datacenter/game2.png" alt="">
                    <span class="last-text">实力评分：<em>991</em></span>
                  </div>
                </div>
                <div class="right-path">
                  <a href="">比赛前瞻</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: ['全部游戏', '英雄联盟', '王者荣耀', 'DDTA2', 'CSGO', '绝地求生', '守望先锋', '星际争霸', '更多'],
      navActiveIndex: 1,
      navList2: ['赛事进程', '最新赛果', '联盟积分表', '战队信息', '选手信息'],
      navActiveIndex2: 1,
      weekActiveInd: 1,
      filterActiveInd: 1,
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
  @import './datacenter';
</style>
