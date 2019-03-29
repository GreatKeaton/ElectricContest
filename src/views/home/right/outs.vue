<template>
  <div class="outs" @click="isBigImg=false">
    <p>大家好，欢迎收看万博电竞直播，比赛即将开始</p>
    <div class="content">
      <img src="../../../images/home/right/video.jpg" v-show="isBigImg" class="big-img" alt="">
      <ul class="outs-list">
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">英雄联盟赛事</p>
            <img src="../../../images/home/right/video.jpg" v-on:click.stop="isBigImg = true;" @mouseleave="isBigImg = false;" alt>
            <p>厄加特配和冰女击杀剑姬</p>
          </div>
        </li>
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">英雄联盟赛事</p>
            <p>27分钟 冰女下路单带掉二塔</p>
          </div>
        </li>
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">英雄联盟赛事</p>
            <p>风龙刷新了</p>
          </div>
        </li>
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">英雄联盟赛事</p>
            <p>30分钟 剑姬上路单带掉一塔</p>
          </div>
        </li>
        <li class="clearfix">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">英雄联盟赛事</p>
            <img src="../../../images/home/right/video.jpg" v-on:click.stop="isBigImg = true;" @mouseleave="isBigImg = false;" alt>
            <p>双方一波混战 最终打出3换3</p>
          </div>
        </li>
        <li class="clearfix" v-for="(item, index) in new Array(5)" v-bind:key="index">
          <img src="../../../images/home/nav/outs-icon.png" alt>
          <div>
            <p class="theme">英雄联盟赛事</p>
            <p>风龙刷新了</p>
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
  .tx-ct;

  &>p{
      margin-bottom: 10px;
  }
  .content {
    .clear-scroll;
    height: 708px;

    .big-img{
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
        margin-top: 5px;
        font-size: 14px;
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
