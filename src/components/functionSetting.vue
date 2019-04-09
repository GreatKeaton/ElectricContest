<template>
  <div class="function-setting">
    <h1>
      <i class="el-icon-menu"></i>功能设定
    </h1>
    <div>
      <ul class="query-set">
        <li
          class="preference"
          :class="{'active': funcSetIndex === 1}"
          @click="funcSetIndex = 1"
        >偏好设定</li>
        <li
          class="calculator"
          :class="{'active': funcSetIndex === 2}"
          @click="funcSetIndex = 2"
        >过关计算器</li>
      </ul>
      <div class="preference" v-show="funcSetIndex === 1">
        <ul>
          <li>
            <span>主题背景：</span>
            <select name id></select>
          </li>
          <li>
            <span>首选盘口：</span>
            <select name id></select>
          </li>
          <li>
            <span>赔率变化：</span>
            <select name id></select>
          </li>
          <li>
            <span>现场提示：</span>
            <select name id></select>
          </li>
          <li>
            <span>水位：</span>
            <select name id></select>
          </li>
          <li>
            <span>默认语言：</span>
            <select name id></select>
          </li>
          <li>
            <span>默认投注金额：</span>
            <select name id></select>
          </li>
          <li>
            <span>快速投注：</span>
            <div>
              <input type="radio">
              默认投注金额
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <input type="radio">
              投注时输入金额
            </div>
          </li>
          <li>
            <span>快捷金额设置：</span>
            <div>默认设置</div>
          </li>
        </ul>
        <button class="blue-btn">确认修改</button>
      </div>
      <div class="calculator" v-show="funcSetIndex === 2">
        <select name id>
          <option value>2/3</option>
        </select>
        <input type="text" value="100">
        <div class="all">
          <span>全赢</span>
          <span>全输</span>
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
            组合数
            <span>3</span>
          </p>
          <p>
            没注金额
            <span class="c-yellow">33.33</span>
          </p>
          <p>
            总彩金
            <span class="c-yellow">154.33</span>
          </p>
        </div>
        <button class="blue-btn reset-btn">重置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        funcSetIndex: 1,
    };
  },
  methods: {},
  watch: {},
  components: {}
};
</script>

<style lang="less">
@import "../styles/main";
@import "../styles/common";
@import "../styles/header";
</style>
