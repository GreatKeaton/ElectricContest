<template>
  <section class="videos">
    <h1 class="banner"></h1>
    <div class="content">
      <div class="title">
        <a href="javascript:;" class="video-type">视频类型</a>
        <div class="bt tx-ct">
          <img src="../../images/videos/title-left.png" alt="">
          <span>赛事锦集</span>
          <img src="../../images/videos/title-right.png" alt="">
        </div>
        <a href="javascript:;" class="more-video">更多视频</a>
      </div>

      <div class="pics">
        <a href="javascript:;" class="tull-left"><img src="../../images/videos/left.png" alt=""></a>
        <ul class="box">
          <li v-for="(item, index) in new Array(6)" v-bind:key="index">
            <img src="../../images/videos/01.png" alt="">
            <div class="text">
              <span>2019-LPL 春季赛第六日</span>
              <span class="play-number">2265</span>
              <p>SN <small>vs</small> RNG</p>
            </div>
          </li>
        </ul>
        <a href="javascript:;" class="tull-right"><img src="../../images/videos/right.png" alt=""></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {

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
  @import './videos';
</style>