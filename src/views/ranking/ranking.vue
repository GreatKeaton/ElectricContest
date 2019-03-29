<template>
  <section class="ranking">
    <h1 class="banner">谁是王者</h1>

    <div class="content">
      <div class="query-opera clearfix">
        <div class="opera-type">
          <span :class="{'active': typeActive === 1}" @click="typeActive = 1">英雄排行</span>
          <span :class="{'active': typeActive === 2}" @click="typeActive = 2">任务系统</span>
        </div>
        <a href="javascript:;" class="follow-btn">我关注的<i class="el-icon-caret-bottom"></i></a>
        <div class="update-date">
          <span>最新更新：2019-01-28 06:00:00</span>
          <span>最近更新：2019-01-28 06:00:00</span>
        </div>
      </div>

      <div class="my-info clearfix">
        <div class="record">
          <h4>我的ManBetX电竞排名</h4>
          <p>
            <span>排名：<strong>102</strong></span>
            <span class="grade">段位：<strong>电竞大师</strong></span>
            <span>积分：<strong>2100</strong></span>
            <span>胜率：<strong>40%</strong></span>
            <span class="life">升降：<strong>↑ 5名</strong></span>
          </p>
        </div>
        <div class="follow">
          <span>已关注人数：<strong>10</strong></span>
          <span>被关注人数：<strong>22</strong></span>
        </div>
      </div>

      <div class="rank-list">
        <ul class="left-nav">
          <li :class="{'active': rankNavActive === 1}" @click="rankNavActive = 1">荣耀胜场排行</li>
          <li :class="{'active': rankNavActive === 2}" @click="rankNavActive = 2">荣耀胜率排行</li>
          <li :class="{'active': rankNavActive === 3}" @click="rankNavActive = 3">成就积分排行</li>
          <li :class="{'active': rankNavActive === 4}" @click="rankNavActive = 4">璀璨段位排行</li>
          <li :class="{'active': rankNavActive === 5}" @click="rankNavActive = 5">关注列表</li>
        </ul>

        <div class="right-list">
          <ul>
            <li class="title">
              <span>排名</span>
              <span>玩家</span>
              <span>段位</span>
              <span>净胜场</span>
              <span>荣耀时间</span>
            </li>
            <li v-for="(item, index) in new Array(4)" v-bind:key="index" :class="'rank-leave'+index">
              <span>
                <strong v-if="index >= 3">{{index + 1}}</strong>
                <i v-if="index < 3" :class="'rank-icon rank-icon'+index"></i>
              </span>
              <span>万博NO1</span>
              <span class="grade">超凡至尊X(10星)</span>
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
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
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
