<template>
  <div class="strategy">
    <div class="banner">
      <h1>Strategy guide center</h1>
      <div class="search">
        <input type="text" placeholder="Search for">
        <i class="search-icon"></i>
      </div>
      <span>Search all game types / Heroes / Skills / Props and related gameplay</span>
    </div>

    <div class="content">
      <div class="left-list">
        <h1>|| Weekly recommended guide <span><img src="../../images/strategy/more.png">more</span></h1>
        <ul class="week-recommend">
          <li v-for="(item, index) in new Array(10)" v-bind:key='index'>
            <img src="../../images/strategy/title.png" alt="">
            <article>
              <h1>The barbarian berserker is back, axes thirsty for more choppy choppy!</h1>
              <div>
                <p>The barbarian berserker is back, axes thirsty for more choppy choppy!</p>
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
          <h1><img src="../../images/strategy/active.png">activities / event recommendation<a href="">more</a></h1>
          <div>
            <img class="activity-pic" src="../../images/strategy/title.png" alt="">
          </div>
        </article>

        <article class="right-bottom">
          <h1><img src="../../images/strategy/yxlm.png">LOL</h1>
          <ul class='yxlm-panel'>
            <li v-for="(item, index) in new Array(3)" v-bind:key='index'>
              <i class="el-icon-caret-right"></i>
              <span class='text'>Heisendong and Gunslinger teach you how to take your Heimerdinger from zero to hero!</span>
              <span class='date'>12-19</span>
            </li>
            <li v-for="(item, index) in new Array(8)" v-bind:key='index'>
              <i class="el-icon-caret-right"></i>
              <span class='text'>Heisendong and Gunslinger teach you how to take your Heimerdinger from zero to hero!</span>
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
  .strategy{
    height: 808px;
    overflow: hidden;
  }
</style>
