<template>
  <div class="strategy">
    <div class="banner">
      <h1>攻略中心</h1>
      <div class="search">
        <input type="text" placeholder="搜索一下">
        <i class="search-icon"></i>
      </div>
      <span>可搜索所有游戏种类 / 英雄 / 技能 / 道具装备及相关攻略玩法</span>
    </div>

    <div class="content">
      <div class="left-list">
        <h1>|| 本周热门攻略推荐 <span><img src="../../images/strategy/more.png">查看更多</span></h1>
        <ul class="week-recommend">
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

      <div class="right-list">
        <article class="activity-recommend">
          <h1><img src="../../images/strategy/active.png">活动推荐<a href="">更多</a></h1>
          <div>
            <img class="activity-pic" src="../../images/strategy/title.png" alt="">
          </div>
        </article>

        <article class="right-bottom">
          <h1><img src="../../images/strategy/yxlm.png">英雄联盟</h1>
          <ul class='yxlm-panel'>
            <li v-for="(item, index) in new Array(3)" v-bind:key='index'>
              <i class="el-icon-caret-right"></i>
              <span class='text'>花式偷家大盘点！</span>
              <span class='date'>12-19</span>
            </li>
            <li v-for="(item, index) in new Array(8)" v-bind:key='index'>
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
  @import './strategy';
</style>
