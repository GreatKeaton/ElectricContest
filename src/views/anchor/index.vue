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
      <div class="c-ct relative">
        <div
          class="video-box"
          v-show="!isWindowSpring"
          @mouseover="videoClass='video-top-icon'; videoBottomClass='video-bottom-icon'"
          @mouseout="videoClass='video-top-hide'; videoBottomClass='video-bottom-hide'"
        >
          <img src="../../images/home/nav/video.png" alt width="100%" v-show="!isCutoverVideo">
          <img src="../../images/home/nav/outs-game.jpg" alt width="100%" v-show="isCutoverVideo">
          <img src="../../images/streamline/qh.png" class="cutover" alt="" @click="isCutoverVideo = !isCutoverVideo">
          <div class="play-top" :class="videoClass">
            <img src="../../images/streamline/canel.png" class="canel-icon" alt="">
            <div class="bszj">
              <p>2019-01-31</p>
              <p>B03 <span class="c-blue">第三局进行中</span></p>
            </div>
            <img src="../../images/home/right-en/top.jpg" class="top-icon" alt>
            <a href="javascript:;" class="zb-btn">主播视频</a>
          </div>
          <div class="play-list clearfix" :class="videoBottomClass">
            <img src="../../images/home/right/off.png" alt>
            <img src="../../images/home/right/refresh.png" alt>
            <div class="right-list right">
              <a href="javascript:;">关注</a>
              <img src="../../images/home/right/laba.png" alt>
              <a href="javascript:;">超清</a>
              <div
                class="dm-query in-block"
                @click="isBarrage = !isBarrage"
                :class="{'active': isBarrage}"
              >
                <span>弹幕</span>
                <i></i>
              </div>
              <a href="#/home" @click="rightBetListType = 'lts';">进入直播间</a>
              <span class="cspn" @click="isWindowSpring = true">弹窗</span>
              <img class="cspn" src="../../images/home/right/enlarge.png" alt>
            </div>
          </div>
        </div>
        <div class="game-info">
          <div class="game-scoll">
            <ul class="cont-title">
              <li :class="{'active': queryType === 1}" @click="queryType = 1">所有下注</li>
              <li :class="{'active': queryType === 2}" @click="queryType = 2">第一局</li>
              <li :class="{'active': queryType === 3}" @click="queryType = 3">第二局</li>
              <li :class="{'active': queryType === 4}" @click="queryType = 4">第三局</li>
            </ul>
            <dl class="more-bet-box">
              <dt></dt>
              <dd>
                <ul class="bs-result">
                  <li v-for="(item, index) in new Array(10)" v-bind:key="index">
                    <span>比赛获胜方</span>
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
            <img src="../../images/home/nav/outs-game.jpg" class="live-video" alt="" v-show="!isCutoverVideo">

            <img src="../../images/streamline/qh.png" class="cutover" alt="" @click="isCutoverVideo = !isCutoverVideo">
            <img src="../../images/streamline/close.png" class="close-live" alt="" @click="isCloseLive = true">
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
            >更多</li>
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
            <li @click="dialogIndex = 1" :class="{'active': dialogIndex === 1}">充值</li>
            <li @click="dialogIndex = 2" :class="{'active': dialogIndex === 2}">取款</li>
            <!-- <li @click="dialogIndex = 3" :class="{'active': dialogIndex === 3}">转账</li> -->
          </ul>
        </h1>
        <!-- 充值开始 -->
        <div class="recharge" v-show="dialogIndex === 1">
          <ul class="pay-list">
            <li
              class="wechat"
              :class="{'active': payListIndex === 1}"
              @click="payListIndex = 1"
            >微信支付</li>
            <li class="zfb" :class="{'active': payListIndex === 2}" @click="payListIndex = 2">支付宝</li>
            <li class="jd" :class="{'active': payListIndex === 3}" @click="payListIndex = 3">京东支付</li>
            <li class="wy" :class="{'active': payListIndex === 4}" @click="payListIndex = 4">网易支付</li>
            <li class="qq" :class="{'active': payListIndex === 5}" @click="payListIndex = 5">QQ支付</li>
            <li class="js" :class="{'active': payListIndex === 6}" @click="payListIndex = 6">极速支付</li>
            <li class="rg" :class="{'active': payListIndex === 7}" @click="payListIndex = 7">人工支付</li>
          </ul>
          <div class="price-input">
            <div>
              <input type="text">
              <small>最小充值金额XX元</small>
            </div>
            <span>
              单笔限额：
              <em>5万</em>
            </span>
            <span>
              单日累计限额：
              <em>5万</em>
            </span>
            <button class="blue-btn">教学流程</button>
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
              请使用微信扫码支付
            </p>
          </div>
        </div>
        <!-- 充值结束 -->

        <!-- 取款开始 -->
        <div class="draw" v-show="dialogIndex === 2">
          <div class="content">
            <p>
              你已完成了打码量，可以提交申请取款
              <span class="search-close">查看&关闭</span>
            </p>
            <p>
              <span>取款金额：</span>
              <input type="text" placeholder="请输入取款金额">
            </p>
            <p class="prompt-1">
              单笔取款范围
              <em>100.0元</em>至
              <em>50000元</em>，每天最高取款次数：
              <em>5次</em>
            </p>
            <p>
              <span>取款密码：</span>
              <input type="text" placeholder="请输入你的取款密码">
            </p>
            <p>
              <span>选择银行：</span>
              <el-select class="query-bank" clearable placeholder="请选择">
                <el-option
                  v-for="item in ['中国银行']"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </p>

            <div class="mt-30">
              <p>
                <em>*</em>银行名称
              </p>
              <select name id></select>
            </div>
            <div>
              <p>
                <em>*</em>开户姓名
              </p>
              <input type="text" placeholder="请输入开户姓名">
            </div>
            <div>
              <p>
                <em>*</em>开户账号
              </p>
              <input type="text" placeholder="请输入开户账户">
            </div>
            <div>
              <p>
                <em>*</em>开户行
              </p>
              <input type="text" placeholder="请输入开户行">
            </div>
            <p class="prompt-2">
              如工行需填写此项， 示例：
              <span>河南工商银行五一路支行</span>
            </p>
          </div>
        </div>
        <!-- 取款结束 -->

        <!-- 转账开始 -->
        <div class="transfer" v-show="dialogIndex === 3">
          <div class="title">
            主账户：
            <span>500,000,00</span>
            <a href="javascript:;">一键回收</a>
          </div>
          <div class="query-list clearfix">
            <select name id></select>
            <img class="left" src="../../images/home/dialog/qh.png" alt>
            <select name id></select>
          </div>
          <div class="price-input">
            <span>转账金额</span>
            <div class="all-input">
              <input type="text" placeholder="请输入转账金额">
              <a href="javascript:;">全部转入</a>
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
import myMarquee from "@/components/mymarquee";
import rechargeHtml from "@/views/home/rechargeBox";
import leftMode from "../home/left/index";
import settlementHtml from "../home/right/settlement"; // 待结算
import charRoom from "../home/right/chatRoom";
import singleBet from "../home/right/singleBet"; // 投注
import areas from "../home/right/sunDryArea";
import outs from "../home/right/outs";
import squad from "../home/right/squad"; // 阵容
import datas from "../home/right/data"; // 数据
import mores from "../home/right/more"; // 更多

export default {
  data() {
    return {
      showMarquee: true,
      iptInfo: "",
      placeholderInfo: "刺激战场",
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
      gameList: [],
      listIndex: 1,
      isCutoverVideo: false,
      isCloseLive: false,
      lists: [
        "由于万博体育延时结算，如果无法签到(2019年1月11日之前无法签到的会员)，请联系客服进行补签。"
      ],
      priceList: ["100", "200", "1000", "2000", "3000"],
      rightNavList: this.$store.state.rightNavList || [],
      gameList: JSON.parse(localStorage.getItem("gameList")) || [
        { name: "滚球", css: "gq" },
        { name: "今日", css: "jr" },
        { name: "早盘", css: "zp" },
        { name: "猜你喜欢", css: "hot" },
        { name: "我的推荐", css: "like" },
        { name: "所有赛事", css: "all" }
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
    myMarquee,
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
  methods: {
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