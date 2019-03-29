<template>
  <div class="outs" @click="isBigImg=false">
    <p>hello all, welcomet to Wanbo E-sports live, Match starting soon</p>
    <div class="content">
      <img src="../../../images/home/right/video.jpg" v-show="isBigImg" class="big-img" alt>
      <ul class="outs-list">
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">League of Legend Match</p>
            <img
              src="../../../images/home/right/video.jpg"
              v-on:click.stop="isBigImg = true;"
              @mouseleave="isBigImg = false;"
              alt
            >
            <p>Ergat and Ice Girl Kill Jianji</p>
          </div>
        </li>
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">League of Legend Match</p>
            <p>27 min Lissandra destory bottom tower alone</p>
          </div>
        </li>
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">League of Legend Match</p>
            <p>Wind dragon Reborn</p>
          </div>
        </li>
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">League of Legend Match</p>
            <p>30 min Lissandra destory bottom tower alone</p>
          </div>
        </li>
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">League of Legend Match</p>
            <img
              src="../../../images/home/right/video.jpg"
              v-on:click.stop="isBigImg = true;"
              @mouseleave="isBigImg = false;"
              alt
            >
            <p>Ergat and Ice Girl Kill Jianji</p>
          </div>
        </li>
        <li class="clearfix" v-for="(item, index) in new Array(5)" v-bind:key="index">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">League of Legend Match</p>
            <p>Wind dragon Reborn</p>
          </div>
        </li>
      </ul>
    </div>
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
.outs {
  color: #fff;
  font-size: 12px;

  & > p {
    margin-bottom: 10px;
  }
  .content {
    .tx-ct;
    .clear-scroll;
    height: 708px;

    .big-img {
      .absolute;
      top: 16%;
      left: -740px;
      width: 627px;
      height: 348px;
    }
  }

  .outs-list {
    text-align: left;
    padding: 5px;
    li {
      margin-bottom: 20px;

      p {
        line-height: 23px;
      }
      img,
      div {
        .left;
      }
      div {
        font-size: 14px;
        width: calc(100% - 55px);
        padding-left: 10px;
        img {
          width: 205px;
          height: 125px;
        }
      }
      .theme {
        color: #65bbd2;
      }
    }
  }
}
</style>
