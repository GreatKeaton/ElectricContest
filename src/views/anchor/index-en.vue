<template>
  <div class="anchor relative">
    <img
      src="../../images/home/nav/video.png"
      alt
      width="360px"
      v-show="isWindowSpring"
      :class="{'video-spring-window': isWindowSpring}"
      @mousedown="move"
      @dblclick="isWindowSpring = false"
    >
    <div class="content flex">
      <div class="left-content clearfix">
        <div class="list-data" v-show="isShrink">
          <leftMode></leftMode>
          <span class="shrink cspn" @click="isShrink = !isShrink">
            <i :class="isShrink ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"></i>
          </span>
        </div>
        <div class="simplify-list" v-show="!isShrink">
          <ul class="main-list">
            <li
              v-for="(item, index) in gameList"
              :key="index"
              :class="[listIndex === index ? item.css + ' active' : item.css]"
              v-on:click.stop="listIndex = index; isShrink = true"
            >
              <span>{{item.name}}</span>
            </li>
          </ul>
          <span class="shrink cspn" @click="isShrink = !isShrink">
            <i :class="isShrink ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"></i>
          </span>
        </div>
      </div>
      <div class="c-ct relative" ref="centerBox">
        <div
          class="video-box"
          v-show="!isWindowSpring"
          @mouseover="videoBottomClass='video-bottom-icon'"
          @mouseout="videoBottomClass='video-bottom-hide'"
        >
          <img src="../../images/home/nav/video.png" alt width="100%" v-show="!isCutoverVideo">
          <img src="../../images/streamline/mn.jpg" alt width="100%" v-show="isCutoverVideo">
          <img src="../../images/streamline/qh.png" class="cutover" alt="" @click="isCutoverVideo = !isCutoverVideo" v-show="!isCloseLive">
          <div class="play-top video-top-icon">
            <router-link to="/home">
              <img src="../../images/streamline/canel.png" class="canel-icon" alt>
            </router-link>
            <div class="bszj">
              <p>2019-01-31</p>
              <p>
                B03
                <span class="c-blue">第三局进行中</span>
              </p>
            </div>
            <img src="../../images/home/right-en/top.jpg" class="top-icon" alt>
            <a href="javascript:;" class="zb-btn" @click="anchorShow(false)">Anchor video</a>
          </div>

          <div class="play-list clearfix" :class="videoBottomClass">
            <img src="../../images/home/right/off.png" alt>
            <img src="../../images/home/right/refresh.png" alt>
            <div class="right-list right">
              <a href="javascript:;">follow</a>
              <img src="../../images/home/right/laba.png" alt>
              <a href="javascript:;">Ultra-clear</a>
              <div
                class="dm-query in-block"
                @click="isBarrage = !isBarrage"
                :class="{'active': isBarrage}"
              >
                <span>Barrage</span>
                <i></i>
              </div>
              <a href="#/homeEn" @click="rightBetListType = 'lts';">Enter live room</a>
              <span class="cspn" @click="isWindowSpring = true">Pop-ups</span>
              <img class="cspn" src="../../images/home/right/enlarge.png" alt>
            </div>
          </div>
        </div>
        <div class="game-info">
          <div class="game-scoll">
            <ul class="cont-title">
              <li :class="{'active': queryType === 1}" @click="queryType = 1">All bets</li>
              <li :class="{'active': queryType === 2}" @click="queryType = 2">first round</li>
              <li :class="{'active': queryType === 3}" @click="queryType = 3">Second inning</li>
              <li :class="{'active': queryType === 4}" @click="queryType = 4">Third game</li>
            </ul>
            <dl class="more-bet-box">
              <dt></dt>
              <dd>
                <ul class="bs-result">
                  <li v-for="(item, index) in new Array(60)" v-bind:key="index">
                    <span>Winner of the competition</span>
                    <span>
                      <b>RY</b>1.36
                    </span>
                    <span>
                      <b>GS</b> 2.941
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="c-rt">
        <div class="live-box" v-show="!isCloseLive">
          <img src="../../images/home/nav/video.png" class="live-video" alt v-show="isCutoverVideo">
          <img
            src="../../images/streamline/mn.jpg"
            class="live-video"
            alt
            v-show="!isCutoverVideo"
          >

          <img
            src="../../images/streamline/qh.png"
            class="cutover"
            v-show="!isCloseLive"
            alt
            @click="isCutoverVideo = !isCutoverVideo"
          >
          <img
            src="../../images/streamline/close.png"
            class="close-live"
            alt
            @click="anchorShow(true)"
          >
        </div>
        <div class="content-2 relative" @click="betList2=false">
          <ul class="title">
            <li
              :class="{'active': rightBetListType === item.type}"
              v-on:click.stop="rightListNav(item.type)"
              v-for="(item, index) in rightNavList"
              v-bind:key="index"
            >
              {{item.name}}
              <i
                class="el-icon-caret-bottom"
                v-show="item.children && !betList2"
                @click="betList2 = index + 1"
              ></i>
              <i
                class="el-icon-caret-top"
                v-show="item.children && betList2"
                @click="betList2 = !betList2"
              ></i>
              <ul class="list-2" v-show="betList2 === index + 1">
                <li
                  @click="betListIndex = (ind2 +1);betList2=false;"
                  v-for="(item2, ind2) in item.children"
                  v-bind:key="ind2"
                >{{item2}}</li>
              </ul>
            </li>
            <li
              :class="{'active': rightBetListType ==='more'}"
              v-on:click.stop="rightBetListType='more'"
            >More</li>
          </ul>
          <settlementHtml v-show="rightBetListType === 'tzlb'&&betListIndex===1"></settlementHtml>
          <singleBet v-show="rightBetListType === 'tzlb'&&betListIndex===2"></singleBet>
          <charRoom v-show="rightBetListType === 'lts'"></charRoom>
          <areas v-show="rightBetListType === 'sdq'"></areas>
          <outs v-show="rightBetListType === 'sk'"></outs>
          <squad v-show="rightBetListType === 'zr'"></squad>
          <datas v-show="rightBetListType === 'sj'"></datas>
          <mores v-show="rightBetListType ==='more'"></mores>
        </div>
      </div>
    </div>

    <!----------------弹出层---------------------->
    <el-dialog :visible.sync="dialogVisible" width="870px" class="price-opeare-dialog">
      <section class="dialog-box relative">
        <h1>
          <ul>
            <li @click="dialogIndex = 1" :class="{'active': dialogIndex === 1}">top-up</li>
            <li @click="dialogIndex = 2" :class="{'active': dialogIndex === 2}">withdraw</li>
            <!-- <li @click="dialogIndex = 3" :class="{'active': dialogIndex === 3}">transfer</li> -->
          </ul>
        </h1>
        <!-- 充值开始 -->
        <div class="recharge" v-show="dialogIndex === 1">
          <ul class="pay-list">
            <li
              class="wechat"
              :class="{'active': payListIndex === 1}"
              @click="payListIndex = 1"
            >WeChat</li>
            <li class="zfb" :class="{'active': payListIndex === 2}" @click="payListIndex = 2">Alipay</li>
            <li class="jd" :class="{'active': payListIndex === 3}" @click="payListIndex = 3">JD</li>
            <li class="wy" :class="{'active': payListIndex === 4}" @click="payListIndex = 4">NetEase</li>
            <li class="qq" :class="{'active': payListIndex === 5}" @click="payListIndex = 5">QQ</li>
            <li class="js" :class="{'active': payListIndex === 6}" @click="payListIndex = 6">Extreme</li>
            <li class="rg" :class="{'active': payListIndex === 7}" @click="payListIndex = 7">Manual</li>
          </ul>
          <div class="price-input">
            <div>
              <input type="text">
              <small>Minimum recharge amount XX yuan</small>
            </div>
            <span>
              Single limit：
              <em>5万</em>
            </span>
            <span>
              One-day cumulative limit：
              <em>5万</em>
            </span>
            <button
              class="blue-btn"
              style="padding-left: 38px; width: auto;padding-right: 10px;"
            >Teaching process</button>
          </div>
          <ul class="price-list">
            <li
              :class="{'active': priceListIndex === index}"
              @click="priceListIndex = index"
              v-for="(item, index) in priceList"
              v-bind:key="index"
            >{{item}}元</li>
          </ul>
          <div class="qchat">
            <img src="../../images/home/dialog/qchat.png" alt>
            <p>
              <img src="../../images/home/dialog/wx-icon.png" alt>
              Please use WeChat scan code to pay
            </p>
          </div>
        </div>
        <!-- 充值结束 -->

        <!-- 取款开始 -->
        <div class="draw" v-show="dialogIndex === 2">
          <div class="content">
            <p>
              Completed amount of code, submit for withdraw.
              <span class="search-close">View & Close</span>
            </p>
            <p>
              <span>amount：</span>
              <input type="text" placeholder="Please enter the withdraw amount">
            </p>
            <p class="prompt-1">
              Single withdraw
              <em>100.0RMB</em>to
              <em>50000RMB</em>，Max withdraw per day：
              <em>5 times</em>
            </p>
            <p>
              <span>Password：</span>
              <input type="text" placeholder="Please enter your withdraw password">
            </p>
            <p>
              <span>Bank：</span>
              <el-select class="query-bank" clearable placeholder="choose">
                <el-option
                  v-for="item in ['Bank of China']"
                  :key="item"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </p>

            <div class="mt-30">
              <p>
                <em>*</em>Bank name
              </p>
              <select name id></select>
            </div>
            <div>
              <p>
                <em>*</em>Account name
              </p>
              <input type="text" placeholder="Please enter the account name">
            </div>
            <div>
              <p>
                <em>*</em>opening account
              </p>
              <input type="text" placeholder="Please enter an account opening account">
            </div>
            <div>
              <p>
                <em>*</em>Bank
              </p>
              <input type="text" placeholder="Please enter the bank">
            </div>
            <p class="prompt-2">
              If ICBC needs to fill in this item, examples:
              <span>Henan Industrial and Commercial Bank Wuyi Road Branch</span>
            </p>
          </div>
        </div>
        <!-- 取款结束 -->

        <!-- 转账开始 -->
        <div class="transfer" v-show="dialogIndex === 3">
          <div class="title">
            Master account：
            <span>500,000,00</span>
            <a href="javascript:;">One-click recycling</a>
          </div>
          <div class="query-list clearfix">
            <select name id></select>
            <img class="left" src="../../images/home/dialog/qh.png" alt>
            <select name id></select>
          </div>
          <div class="price-input">
            <span>transfer amount</span>
            <div class="all-input">
              <input type="text" placeholder="Please enter the transfer amount">
              <a href="javascript:;">Transfer all</a>
            </div>
          </div>
          <button class="blue-btn transfer-btn">转账</button>
        </div>
        <!-- 转账结束 -->
      </section>
    </el-dialog>
  </div>
</template>

<script>
import rechargeHtml from "@/views/home/rechargeBox";
import leftMode from "../home-en/left/index";
import settlementHtml from "../home/right/settlement"; // 待结算
import charRoom from "../home-en/right/chatRoom";
import singleBet from "../home-en/right/singleBet"; // 投注
import areas from "../home-en/right/sunDryArea";
import outs from "../home-en/right/outs";
import squad from "../home-en/right/squad"; // 阵容
import datas from "../home-en/right/data"; // 数据
import mores from "../home-en/right/more"; // 更多

export default {
  data() {
    return {
      iptInfo: "",
      operateIndex: 1,
      menuIndex: 1,
      newPanelHide: true,
      betList2: false,
      betListIndex: 1,
      dialogVisible: false,
      dialogIndex: 1,
      priceListIndex: 1,
      payListIndex: 1,
      rightBetListType: "sdq",
      videoClass: "",
      moreBetInd: 1,
      isBarrage: false,
      videoBottomClass: false,
      isWindowSpring: false,
      positionX: 0,
      positionY: 0,
      queryType: 2,
      isShrink: false,
      listIndex: 1,
      isCutoverVideo: false,
      isCloseLive: true,
      lists: [
        "由于万博体育延时结算，如果无法签到(2019年1月11日之前无法签到的会员)，请联系客服进行补签。"
      ],
      priceList: ["100", "200", "1000", "2000", "3000"],
      rightNavList: this.$store.state.rightNavList || [],
      gameList: [
        { name: "RollBall", css: "gq" },
        { name: "today", css: "jr" },
        { name: "Early", css: "zp" },
        { name: "Like", css: "hot" },
        { name: "recommend", css: "like" },
        { name: "All", css: "all" }
      ]
    };
  },
  created() {
    this.rightNavList;
  },
  computed: {
    getUserIcons() {
      return this.$store.state.rightNavList;
    }
  },
  watch: {
    getUserIcons(val) {
      this.rightNavList = val;
    }
  },
  components: {
    settlementHtml,
    leftMode,
    charRoom,
    singleBet,
    areas,
    outs,
    squad,
    datas,
    mores
  },
  mounted() {
    let box = this.$refs.centerBox;
    let videoHeight = document.getElementsByClassName('video-box')[0].offsetHeight;
    box.addEventListener(
      "scroll",
      () => {
        if(!this.isWindowSpring){
          this.isWindowSpring = box.scrollTop > videoHeight ? true : false;
        }else{
          if(!box.scrollTop){
            this.isWindowSpring = false;
          }
        }
      },
      false
    );
  },
  methods: {
    anchorShow: function(bool){
      this.isCloseLive = bool;
      let rightHeight = document.getElementsByClassName('c-rt')[0].offsetHeight;
      document.getElementsByClassName('content-2')[0].style.height = (!bool ? (rightHeight - 210) : rightHeight) + 'px';
    },
    move(e) {
      let odiv = e.target;

      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = e => {
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        this.positionX = top;
        this.positionY = left;

        //移动当前元素
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    rechargeBind: function(ind) {
      this.operateIndex = ind;
      this.dialogVisible = true;
      this.dialogIndex = ind;
    },
    rightListNav: function(type) {
      this.rightBetListType = type;
      // if (type === "tzlb") this.betList2 = !this.betList2;
    }
  },
  destroyed() {
    this.$refs.centerBox.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/main";
@import "../../styles/common";
@import "./index";
</style>
<style lang="less">
.el-dialog__header {
  display: inline-block;
  background: url("../../images/home/dialog/title-bg.png") no-repeat top center;
  background-size: 100% 100%;
  width: 100%;
  height: 40px;
}
.el-dialog__headerbtn {
  z-index: 99;
  top: 10px;
  .el-dialog__close {
    font-size: 22px;
    color: #fff;
    font-weight: bold;

    &:hover {
      color: #fff;
    }
  }
}
.price-opeare-dialog {
  .el-dialog {
    background: black;
    position: relative;

    .el-dialog__body {
      background: #0b87cd;
      padding: 0;
    }
  }
}
.query-bank {
  width: calc(100% - 95px);
  display: inline-block;
  .el-input__inner {
    color: #fff;
    background: #125083;
    border-color: #125083;
    display: inline-block;
    outline: none;
    font-weight: bold;

    &:hover,
    &:active {
      border-color: #125083;
    }
  }
}
</style>