<template>
  <div class="studio clearfix">
    <header>
      <img src="../../images/header/logo.png" alt>
    </header>
    <div class="studio-title relative">
      <a href="javascript:history.back()">
        <img src="../../images/streamline/canel.png" class="canel-icon" alt>
      </a>
      <div class="bet-info in-block">
        <p>2019-01-30</p>
        <span>B03</span>
        <span class="c-tblue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;third inning is in progress</span>
      </div>
      <img src="../../images/streamline/studio-title.png" class="bs-team" alt>
      <ul class="bet-type" @click="isBetShow = !isBetShow">
        <li @click="betType = 1" :class="{'active': betType === 1}">My Bet</li>
        <li @click="betType = 2" :class="{'active': betType === 2}">Bet history</li>
      </ul>
    </div>

    <div class="left-box">
      <div class="left-content">
        <ul class="cont-title">
          <li :class="{'active': queryType === 1}" @click="queryType = 1">All bets</li>
          <li :class="{'active': queryType === 2}" @click="queryType = 2">First round</li>
          <li :class="{'active': queryType === 3}" @click="queryType = 3">Second inning</li>
          <li :class="{'active': queryType === 4}" @click="queryType = 4">Third game</li>
        </ul>
        <div class="cont-data">
          <ul>
            <li v-for="(item, index) in new Array(32)" :key="index">
              <span>Winner of the competition</span>
              <span class="cspn" @click="isBetShow = !isBetShow">
                RY
                <em>1.36</em>
              </span>
              <span class="cspn" @click="isBetShow = !isBetShow">
                GS
                <em>2.941</em>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-box">
      <!-- 我的投注/投注历史模块 -->
      <div class="my-bet-msgbox" v-show="isBetShow">
        <singleBet></singleBet>
      </div>
      <!-- 我的投注/投注历史模块 -->

      <img src="../../images/home/nav/video.png" class="video-pic" alt>
      <ul class="right-content">
        <li :class="{'active': rightModel === 1}" @click="rightModel = 1">Player data</li>
        <li :class="{'active': rightModel === 2}" @click="rightModel = 2">Data comparison</li>
        <li :class="{'active': rightModel === 3}" @click="rightModel = 3">League points</li>
      </ul>
      <div class="cont-data">
        <!-- 选手数据开始 -->
        <div class="player-data" v-show="rightModel === 1">
          <ul class="db-team">
            <li>
              <img src="../../images/home/right/team-1.png" alt>
              <em>SS</em>
            </li>
            <li>
              <img src="../../images/home/right/team-2.png" alt>
              <em>SDG</em>
            </li>
          </ul>
          <article>
            <h1>Alignment data</h1>
            <div class="personal-info clearfix">
              <ul>
                <li
                  @click="infoIndex = index"
                  :class="{'active': infoIndex === index}"
                  v-for="(item, index) in infoList"
                  v-bind:key="index"
                >{{item}}</li>
              </ul>
              <div class="jj">
                <img src="../../images/home/right/member1.png" alt>
                <b class="block">FLANDE</b>
                <span class="block">Name: Jane Pride</span>
                <div class="progress relative">
                  <div class="bg-yellow"></div>
                  <div class="bg-red"></div>
                  <div class="bg-green"></div>
                </div>
                <div class="progress-info clearfix">
                  <span class="left">10.3KDA</span>
                  <span class="right">15/3/10</span>
                </div>
              </div>
            </div>
          </article>

          <img src="../../images/home/right-en/data-top.png" alt>
          <div class="progress">
            <p class="clearfix">
              <span>100% Win rate</span>
              <span class="right">15/3/18</span>
            </p>
            <el-progress :stroke-width="10" :percentage="10" color="#2378c8" :show-text="false"></el-progress>
          </div>
          <div class="progress">
            <p>76.5%Group rate</p>
            <el-progress :stroke-width="10" :percentage="10" color="#33cd95" :show-text="false"></el-progress>
          </div>
          <div class="progress">
            <p>147%Damage conversion rate</p>
            <el-progress :stroke-width="10" :percentage="10" color="#cd3349" :show-text="false"></el-progress>
          </div>
          <div class="detail-data">
            <div class="row">
              <div>
                <b>7.5</b>
                <p>Killed per game</p>
                <span>NO 1</span>
              </div>
              <div>
                <b>1.5</b>
                <p>Average death</p>
                <span>NO 35</span>
              </div>
              <div>
                <b>8</b>
                <p>Average assists</p>
                <span>NO 5</span>
              </div>
            </div>
            <div class="row">
              <div>
                <b>9</b>
                <p>Equalizing knife</p>
                <span>NO 8</span>
              </div>
              <div>
                <b>735.2</b>
                <p>Average damage</p>
                <span>NO 1</span>
              </div>
              <div>
                <b>454.8</b>
                <p>Average injury</p>
                <span>NO 32</span>
              </div>
            </div>
            <div class="row">
              <div>
                <b>501.6</b>
                <p>Average economy</p>
                <span>NO 2</span>
              </div>
              <div>
                <b>6.5</b>
                <p>Average perch</p>
                <span>NO 21</span>
              </div>
              <div>
                <b>10.5</b>
                <p>Average eye insertion</p>
                <span>NO 46</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 选手数据结束 -->

        <!-- 数据对比开始 -->
        <div class="comparison-data" v-show="rightModel === 2">
          <article>
            <h1>popularity</h1>
            <div>
              <div class="title">
                <p>2019 LPL Spring</p>
                <span>01-23 17.00 Best of 3</span>
              </div>
              <div class="vs-team">
                <div>
                  <img src="../../images/home/right/team-1.png" alt>
                  <em>SS</em>
                </div>
                <span>VS</span>
                <div>
                  <img src="../../images/home/right/team-2.png" alt>
                  <em>SDG</em>
                </div>
              </div>
              <div class="match-situation">
                <span>stand by SS</span>
                <div class="prograss-info">
                  <p class="clearfix">
                    <span class="left">77%</span>
                    <span class="right">23%</span>
                  </p>
                  <el-progress
                    :stroke-width="5"
                    :percentage="10"
                    color="#c31313"
                    :show-text="false"
                  ></el-progress>
                </div>
                <span>stand by SDG</span>
              </div>
            </div>
          </article>
          <article>
            <h1>popularity</h1>
            <div class="season-performance">
              <div class="title">
                <p>Season performance</p>
                <span>Last 10 performances</span>
              </div>
              <div class="vs-team">
                <div>
                  <img src="../../images/home/right/team-1.png" alt>
                  <em>SS</em>
                  <span>
                    <b>3.4</b>(2.2/2.1/5.2)
                  </span>
                </div>
                <span>KDA</span>
                <div>
                  <img src="../../images/home/right/team-2.png" alt>
                  <em>SDG</em>
                  <span>
                    <b>3.3</b>(2.5/2.5/6.2)
                  </span>
                </div>
              </div>
              <div class="match-situation">
                <span>2.2</span>
                <div class="prograss-info">
                  <p>Killed per game</p>
                  <el-progress
                    :stroke-width="5"
                    :percentage="10"
                    color="#c31313"
                    :show-text="false"
                  ></el-progress>
                </div>
                <span>2.5</span>
              </div>
              <div class="match-situation">
                <span>6.8</span>
                <div class="prograss-info">
                  <p>Equalizing the knife</p>
                  <el-progress
                    :stroke-width="5"
                    :percentage="30"
                    color="#c31313"
                    :show-text="false"
                  ></el-progress>
                </div>
                <span>6.7</span>
              </div>
              <div class="match-situation">
                <span>356.8</span>
                <div class="prograss-info">
                  <p>Average output</p>
                  <el-progress
                    :stroke-width="5"
                    :percentage="40"
                    color="#c31313"
                    :show-text="false"
                  ></el-progress>
                </div>
                <span>395.5</span>
              </div>
              <div class="match-situation">
                <span>43</span>
                <div class="prograss-info">
                  <p>Control rate of dragons</p>
                  <el-progress
                    :stroke-width="5"
                    :percentage="50"
                    color="#c31313"
                    :show-text="false"
                  ></el-progress>
                </div>
                <span>52.6</span>
              </div>
              <div class="match-situation">
                <span>75.7</span>
                <div class="prograss-info">
                  <p>Control rate of big dragons</p>
                  <el-progress
                    :stroke-width="5"
                    :percentage="60"
                    color="#c31313"
                    :show-text="false"
                  ></el-progress>
                </div>
                <span>54.6</span>
              </div>
            </div>
          </article>
          <article>
            <h1>Combat record</h1>
            <div class="combat-record">
              <div class="row">
                <p class="c-red">
                  SS
                  <b>1Win</b>
                </p>
                <p class="c-red mt-10">
                  <b>SS</b>Win
                </p>
                <span>2018-08-07</span>
              </div>
              <div class="row">
                <p>Combat record</p>
                <p class="c-blue mt-10">
                  <b>SDG</b>Win
                </p>
                <span>2018-08-15</span>
              </div>
              <div class="row">
                <p class="c-red">
                  SDG
                  <b>2Win</b>
                </p>
                <p class="c-red mt-10">
                  <b>SDG</b>Win
                </p>
                <span>2018-08-29</span>
              </div>
            </div>
          </article>
        </div>
        <!-- 数据对比结束 -->

        <!-- 联赛积分开始 -->
        <div class="league-points" v-show="rightModel === 3">
          <ul class="data-title">
            <li>Rank</li>
            <li>Team</li>
            <li>win</li>
            <li>draw</li>
            <li>negate</li>
            <li>integral</li>
          </ul>
          <div class="data-scroll">
            <ul class="cont-list-data">
              <li v-for="(item, index) in new Array(8)" :key="index">
                <span>
                  <em>{{index<10 ? '0'+parseInt(index+1) : parseInt(index+1)}}</em>
                </span>
                <span>DAMWON Ga</span>
                <span>11</span>
                <span>12</span>
                <span>12</span>
                <span>33</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 联赛积分结束 -->
      </div>
    </div>
  </div>
</template>

<script>
import singleBet from "../home-en/right/settlement"; // 投注
export default {
  data() {
    return {
      queryType: 1,
      betType: 1,
      infoList: ["Top", "Jun", "Mid", "ADC", "Sup"],
      infoIndex: 1,
      rightModel: 1,
      isBetShow: false
    };
  },
  created() {},
  methods: {},
  components: {
    singleBet
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/main";
@import "../../styles/common";
@import "./index";
@import "./studio";
.studio {
  .right-box {
    .right-content {
      li:before {
        left: 20%;
      }
    }
  }
}
</style>
<style lang="less">
.studio {
  .el-progress {
    padding: 0 !important;
    .el-progress-bar__outer {
      background: #1d3e5e;
    }
  }
  .match-situation {
    .el-progress-bar__outer {
      background: #1351c3;
    }
  }
}
</style>
