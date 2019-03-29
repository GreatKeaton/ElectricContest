<template>
  <div class="datas">
    <article class="zcl-box">
      <h1 class="sblue-nav">支持率</h1>
      <div>
        <p>2019 LPL春季赛 常规赛</p>
        <span class="bs-time">01-23 12.00 Best of 3</span>
        <div class="vs-team">
          <img src="../../../images/home/right/team-1.png" alt>
          <span class="vs">VS</span>
          <img src="../../../images/home/right/team-2.png" alt>
        </div>
        <div class="progress-db">
            <span>支持SS</span>
            <el-progress :percentage="70" color="#c31313" :show-text="false"></el-progress>
            <span>支持SDG</span>
        </div>
      </div>
    </article>
    <article class="zcl-box mt-10">
      <h1 class="sblue-nav">赛季表现</h1>
      <div>
        <img src="../../../images/home/right/right-data-progress.jpg" class="test-img" alt="">
      </div>
    </article>
    <article class="zcl-box mt-10">
      <h1 class="sblue-nav">交战记录</h1>
      <div>
        <img src="../../../images/home/right/right-data-bs.jpg" class="test-img" alt="">
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isBigImg: false
    };
  },
  methods: {}
};
</script>
<style lang="less" scope>
@import "../../../styles/main";
@import "../../../styles/common";
.datas {
  color: #ffffff;
  .zcl-box {
    .tx-ct;
    & > div {
      padding-top: 5px;
      & > p {
        font-size: 14px;
      }
      .vs {
        vertical-align: 20px;
        margin: 0 30px;
        font-weight: bold;
      }
      .bs-time {
        font-size: 12px;
        color: #31536f;
      }
    }
  }
  .vs-team{
      img{
          width: auto;
          .in-block;
      }
  }
  .progress-db{
      .relative;
      span{
          width: 30px;
          .in-block;
          font-size: 12px;
          color: #93b2cf;
      }
      .el-progress{
          width: 198px;
          .in-block;
          .el-progress-bar__outer{
              background: #1352c3;
          }
      }
  }
  .sblue-nav {
    background: #0e3256;
    color: #93b2cf;
    border-top: 1px solid #62c2da;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    .tx-ct;

    .test-img{
        width: 100%;
    }
  }
}
</style>
