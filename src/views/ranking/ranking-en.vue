<template>
  <section class="ranking">
    <h1 class="banner">who's the king?</h1>

    <div class="content">
      <div class="query-opera clearfix">
        <div class="opera-type">
          <span :class="{'active': typeActive === 1}" @click="typeActive = 1">hero ranking</span>
          <span :class="{'active': typeActive === 2}" @click="typeActive = 2">mission system</span>
        </div>
        <a href="javascript:;" class="follow-btn">my follow list<i class="el-icon-caret-bottom"></i></a>
        <div class="update-date">
          <span>latest update：2019-01-28 06:00:00</span>
          <span>latest update：2019-01-28 06:00:00</span>
        </div>
      </div>

      <div class="my-info clearfix">
        <div class="record">
          <h4>My ManBetX eSports ranking</h4>
          <p>
            <span>ranking：<strong>102</strong></span>
            <span class="grade">rank：<strong>E-sports master</strong></span>
            <span>point：<strong>2100</strong></span>
            <span>winning rate：<strong>40%</strong></span>
            <span class="life">Lifting：<strong>↑ 5名</strong></span>
          </p>
        </div>
        <div class="follow">
          <span>no follow：<strong>10</strong></span>
          <span>no followed：<strong>22</strong></span>
        </div>
      </div>

      <div class="rank-list">
        <ul class="left-nav">
          <li :class="{'active': rankNavActive === 1}" @click="rankNavActive = 1">Mythic win ranking</li>
          <li :class="{'active': rankNavActive === 2}" @click="rankNavActive = 2">Mythic win rate ranking</li>
          <li :class="{'active': rankNavActive === 3}" @click="rankNavActive = 3">Achievement score ranking</li>
          <li :class="{'active': rankNavActive === 4}" @click="rankNavActive = 4">glory ranking</li>
          <li :class="{'active': rankNavActive === 5}" @click="rankNavActive = 5">following list</li>
        </ul>

        <div class="right-list">
          <ul>
            <li class="title">
              <span>ranking</span>
              <span>player</span>
              <span>rank</span>
              <span>win</span>
              <span>Mythic time</span>
            </li>
            <li v-for="(item, index) in new Array(4)" v-bind:key="index" :class="'rank-leave'+index">
              <span>
                <strong v-if="index >= 3">{{index + 1}}</strong>
                <i v-if="index < 3" :class="'rank-icon rank-icon'+index"></i>
              </span>
              <span>Manbetx NO1</span>
              <span class="grade">supreme legendX(10 star)</span>
              <span>20190131</span>
              <span>01/31 22:33 <img src="../../images/ranking/add.png" class="add" alt=""></span>
            </li>
          </ul>

          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      typeActive: 1,
      rankNavActive: 1,
      tableData: [{
            date: '2016-05-02',
            name: 'wang xiaohu',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: 'wang xiaohu',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: 'wang xiaohu',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: 'wang xiaohu',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
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
  @import './ranking';
</style>

<style lang="less">
  .ranking{
    .right-list{
      .el-pagination{
        margin-bottom: 20px;
        display: block;
        text-align:center;

        &.is-background{
          .btn-next,
          .btn-prev,
          .el-pager li{
            background-color: transparent;
          }

          .el-icon-arrow-left:before{
            content: '上一页';
            height: 28px;
            line-height: 28px;
          }
          .el-icon-arrow-right:before{
            content: '下一页';
            height: 28px;
            line-height: 28px;
          }
          .el-icon-arrow-left,
          .el-icon-arrow-right,
          .el-pager li{
            border: 1px solid rgba(255, 255, 255, .6);
            height: auto;
            padding: 0 15px;
            border-radius: 20px;

            &.active{
              background: #2f6197;
              color: #fff;
              border-color: #2f6197;
            }
          }
        }
      }
    }
  }
</style>
