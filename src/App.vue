<template>
  <div id="app" :style="'height:' + appHeight ">
    <HeaderBar v-show="routeParams == 'home'"></HeaderBar>
    <headerEn v-show="routeParams !== 'home'"></headerEn>
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import HeaderBar from "@/components/header";
import headerEn from "@/components/header-en";
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right",
      defaultLangu: 'homeEn',
      appHeight: '600px',
      routeParams: localStorage.getItem('routeHeader') || this.defaultLangu
    };
  },
  created() {
    this.appHeight = document.body.offsetHeight + 'px';
    this.$store.state.rightNavList = [
      { name: "投注列表", children: ["投注历史", "我的投注"], type: "tzlb" },
      { name: "聊天室", children: ["特級锦标赛(DATA2)", "特級锦标赛(DATA2)"], type: "lts" },
      { name: "晒单区", type: "sdq" },
      { name: "赛况", type: "sk" },
      { name: "阵容", type: "zr" }
    ];
    this.$store.state.rightEnNavList = [
      { name: "Bet List", children: ["Bet History", "My Bet"], type: "tzlb" },
      { name: "Chat Room", children: ["DATA1", "DATA2"], type: "lts" },
      { name: "Share Bet", type: "sdq" },
      { name: "Match", type: "sk" },
      { name: "Formation", type: "zr" }
    ];
    this.$store.state.rightNavOtherList = [{ name: "数据", type: "sj" }];
    this.$store.state.rightEnNavOtherList = [{ name: "DATA", type: "sj" }];
  },
  watch: {
    $route(to, from) {
      const toDepth = to.params.order;
      const fromDepth = from.params.order;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      let header = localStorage.getItem('routeHeader');
      console.log(header);
      if(!header){
        console.log(toDepth,'kkkk');
        header = (toDepth == 'home' || toDepth == 'homeEn') ? toDepth : this.defaultLangu;
        localStorage.setItem('routeHeader', header);
      }
      this.routeParams = header;
    }
  },
  components: {
    HeaderBar,
    headerEn
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  min-height: 100vh;
  min-width: 1360px;
  background: url('./images/bg.png') top center / 100% auto;

  .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
    transition: all 0.3s ease;
  }

  .slide-right-enter {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slide-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-left-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
