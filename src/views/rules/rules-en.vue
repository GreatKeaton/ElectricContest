<template>
  <div class="rules">
    <div class="left">
      <ul class="main-list">
        <li class="spjc" :class="{'active': listIndex === 1}">
          <span>video tutorial<em v-on:click.stop="listBind(1)"></em></span>
          
          <ul class="list-2" v-show="listIndex === 1">
            <li class="yxjs" :class="{'active': listIndex2 === 1}" v-on:click.stop="listBind2(1)"><span>game platform intro</span></li>
            <li class="czjj" :class="{'active': listIndex2 === 2}" v-on:click.stop="listBind2(2)"><span>operation manual</span></li>
            <li class="rwlq" :class="{'active': listIndex2 === 3}" v-on:click.stop="listBind2(3)"><span>mission collection tutorial</span></li>
            <li class="xzjc" :class="{'active': listIndex2 === 4}" v-on:click.stop="listBind2(4)"><span>Client download tutorial</span></li>
            <li class="qtfw" :class="{'active': listIndex2 === 5}" v-on:click.stop="listBind2(5)"><span>Other Service</span></li>
          </ul>
        </li>
        <li class="xsjc" :class="{'active': listIndex === 2}"><span>Newbie Tutorial<em v-on:click.stop="listBind(2)"></em></span></li>
        <li class="ckbz" :class="{'active': listIndex === 3}"><span>Deposit Help<em v-on:click.stop="listBind(3)"></em></span></li>
        <li class="pkjs" :class="{'active': listIndex === 4}"><span>Handicap Intro<em v-on:click.stop="listBind(4)"></em></span></li>
        <li class="yxgz" :class="{'active': listIndex === 5}"><span>Game Rules<em v-on:click.stop="listBind(5)"></em></span></li>
      </ul>
    </div>

    <article class="right">
      <h1>operation manual</h1>
       <video width="320" height="240" controls>
        <source src="../../images/rules/2.mp4" type="video/mp4">
        Your browser does not support the Video tag.
      </video>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listIndex: 1,
      listIndex2: 1,
      listIndex3: 1,
    }
  },
  created () {

    },
  methods: {
    listBind: function(ind = 1){
      this.listIndex = (this.listIndex === ind) ? !this.listIndex : ind;
    },
    listBind2: function(ind = 1){
      this.listIndex2 = (this.listIndex2 === ind) ? !this.listIndex2 : ind;
    },
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
  @import '../../styles/main';
  @import '../../styles/common';
  @import './rules';
</style>
