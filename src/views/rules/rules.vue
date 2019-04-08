<template>
  <div class="rules">
    <header v-if="isHeader">
      <router-link to="/home"><img src="../../images/header/logo.png" alt></router-link>
    </header>
    <div class="rules-content">
      <div class="left">
        <ul class="main-list">
          <li class="spjc" :class="{'active': listIndex === 1}">
            <span>
              视频教程
              <em v-on:click.stop="listBind(1)"></em>
            </span>

            <ul class="list-2" v-show="listIndex === 1">
              <li class="yxjs" :class="{'active': listIndex2 === 1}" v-on:click.stop="listBind2(1)">
                <span>游戏平台介绍</span>
              </li>
              <li class="czjj" :class="{'active': listIndex2 === 2}" v-on:click.stop="listBind2(2)">
                <span>操作简介</span>
              </li>
              <li class="rwlq" :class="{'active': listIndex2 === 3}" v-on:click.stop="listBind2(3)">
                <span>任务领取教程</span>
              </li>
              <li class="xzjc" :class="{'active': listIndex2 === 4}" v-on:click.stop="listBind2(4)">
                <span>客户端下载教程</span>
              </li>
              <li class="qtfw" :class="{'active': listIndex2 === 5}" v-on:click.stop="listBind2(5)">
                <span>其他服务</span>
              </li>
            </ul>
          </li>
          <li class="xsjc" :class="{'active': listIndex === 2}">
            <span>
              新手教程
              <em v-on:click.stop="listBind(2)"></em>
            </span>
          </li>
          <li class="ckbz" :class="{'active': listIndex === 3}">
            <span>
              存款帮助
              <em v-on:click.stop="listBind(3)"></em>
            </span>
          </li>
          <li class="pkjs" :class="{'active': listIndex === 4}">
            <span>
              盘口介绍
              <em v-on:click.stop="listBind(4)"></em>
            </span>
          </li>
          <li class="yxgz" :class="{'active': listIndex === 5}">
            <span>
              游戏规则
              <em v-on:click.stop="listBind(5)"></em>
            </span>
          </li>
        </ul>
      </div>

      <article class="right">
        <h1>操作简介</h1>
        <video width="320" height="240" controls>
          <source src="../../images/rules/2.mp4" type="video/mp4">您的浏览器不支持Video标签。
        </video>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listIndex: 1,
      listIndex2: 1,
      listIndex3: 1,
      isHeader: false
    };
  },
  created() {
    // this.fromPage = this.$route.params.from;
    this.isHeader = localStorage.getItem('routeHeader') === 'streamline';
  },
  methods: {
    listBind: function(ind = 1) {
      this.listIndex = this.listIndex === ind ? false : ind;
    },
    listBind2: function(ind = 1) {
      this.listIndex2 = this.listIndex2 === ind ? false : ind;
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "../../styles/main";
@import "../../styles/common";
@import "./rules";
</style>
