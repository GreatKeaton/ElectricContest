<template>
  <div class="squad">
    <div class="title">
      <ul>
        <li>
            <img src="../../../images/home/right/team-1.png" alt="">
            <span>SS</span>
        </li>
        <li>
            <img src="../../../images/home/right/team-2.png" alt="">
            <span>SDG</span>
        </li>
      </ul>
      <div class="bt">对阵数据</div>
    </div>
    <!-- 个人对阵信息资料 -->
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
        <img src="../../../images/home/right/member1.png" alt>
        <b class="block">FLANDE</b>
        <span class="block">姓名：简自豪</span>
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
    <!-- 对阵详情 -->
    <div class="squad-detail">
      <img src="../../../images/home/right-en/data-top.jpg" alt="">

      <div class="progress-group">
        <span>100%胜率</span>
        <el-progress color="#2378c8" :show-text="false" :stroke-width="8" :percentage="70"></el-progress>
        <span>76.5%参团率</span>
        <el-progress color="#34cd95" :show-text="false" :stroke-width="8" :percentage="23"></el-progress>
        <span>147%伤害转化率</span>
        <el-progress color="#cd3449" :show-text="false" :stroke-width="8" :percentage="56"></el-progress>
      </div>

      <div class="detail-data">
        <div class="row">
          <div>
            <b>7.5</b>
            <p>场均击杀</p>
            <span>联赛第 1</span>
          </div>
          <div>
            <b>1.5</b>
            <p>场均死亡</p>
            <span>联赛第 35</span>
          </div>
          <div>
            <b>8</b>
            <p>场均助攻</p>
            <span>联赛第 5</span>
          </div>
        </div>
        <div class="row">
          <div>
            <b>9</b>
            <p>分均补刀</p>
            <span>联赛第 8</span>
          </div>
          <div>
            <b>735.2</b>
            <p>分均伤害</p>
            <span>联赛第 1</span>
          </div>
          <div>
            <b>454.8</b>
            <p>分均承伤</p>
            <span>联赛第 32</span>
          </div>
        </div>
        <div class="row">
          <div>
            <b>501.6</b>
            <p>分均经济</p>
            <span>联赛第 2</span>
          </div>
          <div>
            <b>6.5</b>
            <p>场均排眼</p>
            <span>联赛第 21</span>
          </div>
          <div>
            <b>10.5</b>
            <p>场均插眼</p>
            <span>联赛第 46</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoIndex: 1,
      infoList: ["上单", "打野", "中单", "ADC", "辅助"],
      progress: {
        data1: 70,
        data2: 30,
        data3: 65
      }
    };
  },
  methods: {}
};
</script>
<style lang="less" scope>
@import "../../../styles/main";
@import "../../../styles/common";
.squad {
  .title {
    .bt {
      background: #0e3860;
      color: #aacce8;
      .tx-ct;
      font-size: 16px;
      font-weight: bold;
      line-height: 30px;
    }
    & > ul {
      .flex;
      li {
        flex: 1;
        .tx-ct;
        span {
          color: #fff;
          .block;
          font-size: 12px;
        }
        img{
          width: 40px;
        }
        &:first-child {
          .relative;
          &::after {
            content: "";
            height: 90%;
            width: 3px;
            background: url("../../../images/home/right/white-line.png")
              no-repeat center center;
            background-size: 100% 100%;
            .block;
            .absolute;
            top: 0;
            right: 0;
          }

          img {
            margin-top: 8px;
          }
        }
      }
    }
  }
  .personal-info {
    padding-left: 10px;
    padding-right: 10px;
    & > ul {
      width: 90px;
      .left;
      .in-block;
      li {
        background: #0a243d;
        color: #a5aaad;
        height: 28px;
        line-height: 28px;
        margin-top: 5px;
        font-size: 14px;
        .cspn;
        .tx-ct;
        font-weight: bold;

        &.active {
          color: #fff;
          background: url("../../../images/home/nav/zh-active.png") no-repeat
            center center;
          background-size: 100% 100%;
        }
      }
    }
    .jj {
      .tx-ct;
      .in-block;
      width: calc(100% - 90px);
      .left;
      padding-top: 10px;

      img{
        width: 80px;
      }
      & > b {
        color: #fff;
      }
      & > span,
      .progress {
        color: #bde0ff;
        font-size: 14px;
      }
      .progress,
      .progress-info {
        width: 150px;
        margin: 0 auto;
      }
      .progress {
        height: 3px;
        margin-top: 5px;
        & > div {
          height: 3px;
          .in-block;
          .absolute;
        }
        .bg-red {
          background: #af2e81;
          width: 100%;
          left: 0;
        }
        .bg-yellow {
          background: #b2a32e;
          width: 40%;
          z-index: 99;
          left: 0;
        }
        .bg-green {
          background: #3db079;
          width: 45%;
          z-index: 99;
          right: 0;
        }
      }
      .progress-info {
        color: #fff;
        font-size: 14px;
        margin-top: 2px;
      }
    }
  }
  .squad-detail {
    border-top: 1px solid #62c2db;
    background: #0d2c49;
    color: #8fcff3;
    margin-top: 5px;

    img{
      width: 90%;
      margin: 8px auto;
      .block;
    }
    .progress-group {
      width: 228px;
      margin: 5px auto;

      & > span {
        font-size: 14px;
      }
      .el-progress {
        margin-bottom: 5px;
      }
      .el-progress-bar__outer {
        background: #1d3e5f;
      }
    }

    .detail-data {
      .flex;
      .mt-10;
      .row {
        flex: 1;
        .relative;
        &::after {
          content: "";
          width: 3px;
          height: 100%;
          background: url("../../../images/home/right/line.png") no-repeat
            center center;
          .absolute;
          top: 0;
          right: 0;
        }
        &:last-child {
          &::after {
            background: none;
          }
        }

        b,
        p,
        span {
          .block;
          .tx-ct;
        }
        b {
          color: #fff;
          font-weight: bold;
          font-size: 16px;
        }
        p {
          color: #21547f;
          margin-top: -3px;
          font-size: 12px;
          height: 30px;
        }
        & > div {
          margin-bottom: 5px;

          &:first-child{
            p{
              height: auto;
              
            }
          }
        }

        span {
          color: #90cef5;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
