<template>
  <div class="function-setting">
    <h1>
      <i class="el-icon-menu"></i>Preferences
    </h1>
    <div>
      <ul class="query-set">
        <li
          class="preference"
          :class="{'active': funcSetIndex === 1}"
          @click="funcSetIndex = 1"
        >Preferences</li>
        <li
          class="calculator"
          :class="{'active': funcSetIndex === 2}"
          @click="funcSetIndex = 2"
        >Clearance calculator</li>
      </ul>
      <div class="preference" v-show="funcSetIndex === 1">
        <ul>
          <li>
            <span>Theme：</span>
            <select name id></select>
          </li>
          <li>
            <span>Preferred：</span>
            <select name id></select>
          </li>
          <li>
            <span>Odds change：</span>
            <select name id></select>
          </li>
          <li>
            <span>Live prompt：</span>
            <select name id></select>
          </li>
          <li>
            <span>Water level：</span>
            <select name id></select>
          </li>
          <li>
            <span>default lang：</span>
            <select name id></select>
          </li>
          <li>
            <span>bet Amount：</span>
            <select name id></select>
          </li>
          <li>
            <span>Quick bet：</span>
            <div>
              <input type="radio">
              Default bet amount
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <input type="radio">
              placing a bet
            </div>
          </li>
          <li>
            <span>amount setting：</span>
            <div>default setting</div>
          </li>
        </ul>
        <button class="blue-btn">confirm</button>
      </div>
      <div class="calculator" v-show="funcSetIndex === 2">
        <select name id>
          <option value>2/3</option>
        </select>
        <input type="text" value="100">
        <div class="all">
          <span>win</span>
          <span>loss</span>
        </div>
        <ol type="1">
          <li>
            <span>1</span>
            <input type="text" class="price">
            <input type="radio" class="rdo">
            <input type="radio" class="rdo">
          </li>
          <li>
            <span>2</span>
            <input type="text" class="price">
            <input type="radio" class="rdo">
            <input type="radio" class="rdo">
          </li>
          <li>
            <span>3</span>
            <input type="text" class="price">
            <input type="radio" class="rdo">
            <input type="radio" class="rdo">
          </li>
        </ol>
        <div class="num-list">
          <p>
            Combination number
            <span>3</span>
          </p>
          <p>
            Bet amount
            <span class="c-yellow">33.33</span>
          </p>
          <p>
            Total winnings
            <span class="c-yellow">154.33</span>
          </p>
        </div>
        <button class="blue-btn reset-btn">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funcSetIndex: 1
    };
  },
  methods: {},
  watch: {},
  components: {}
};
</script>

<style lang="less">
@import "../../styles/main";
@import "../../styles/common";
@import "../../styles/header";
</style>
