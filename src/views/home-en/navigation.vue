<template>
  <div class="navigation">
    <img
        src="../../images/home/nav/video.png"
        alt
        width="360px"
        v-show="isWindowSpring"
        :class="{'video-spring-window': isWindowSpring}"
        @mousedown="move"
        @dblclick="isWindowSpring = false"
      >
    <div class="top-title">
      <div class="search-inp">
        <input type="text" placeholder="Stimulate the battlefield" maxlength="20">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="searchInfo"></i>
        <img src="../../images/home/nav/icon_video.png" alt class="video-icon">
      </div>
      <div class="marquee" v-if="showMarquee">
        <img src="../../images/home/nav/announce.png" alt>
        <my-marquee :lists="lists"></my-marquee>
      </div>
      <div class="tz">
        <span>
          speed bet
          <img src="../../images/home/nav/tz.png" alt>
        </span>
        <span>
          leverage : default
          <img src="../../images/home/nav/xl.png" alt>
        </span>
        <span>
          select league : all
          <img src="../../images/home/nav/xl.png" alt>
        </span>
        <span>
          odds: hong kong
          <img src="../../images/home/nav/xl.png" alt>
        </span>
      </div>
    </div>

    <div class="content flex">
      <div class="c-lf">
        <ul class="main-list">
          <li
            v-for="(item, index) in gameList"
            :key="index"
            :class="[listIndex === index ? item.css + ' active' : item.css]"
            v-on:click.stop="listBind(index)"
          >
            <span>{{item.name}}</span>

            <ul class="list-2" v-show="listIndex === index">
              <li v-for="(item2, index2) in item.children"
                :key="index2"
                :class="[listIndex3 === index2 ? item2.css + ' active' : item2.css]"
                v-on:click.stop="listBind3(index2)">
                  <span>
                    {{item2.name}}
                    <em>{{item2.num}}</em>
                  </span>

                  <ul class="list-3" v-show="listIndex3 === index2">
                    <li v-for="(item3, index3) in item2.children"
                        :key="index3"
                        :class="{'active': listIndex4 === index3}"
                        v-on:click.stop="listIndex4 = index3">
                      {{item3.name}}
                      <em>{{item3.num}}</em>
                    </li>
                  </ul>
                </li>
            </ul>
          </li>
          <li class="dzym" v-show="listIndex === 'zdy'">
            <dl>
              <dt class="title">Customize exclusive page</dt>
              <dd>
                <dl>
                  <dt>Function selection bar</dt>
                  <dd>
                    <span v-for="(item, index) in functionList" :key="index">
                      {{item.name}}
                      <i class="el-icon-error" @click="functionbind(item, index)"></i>
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>More categories</dt>
                  <dd>
                    <span v-for="(item, index) in moreClassifyLabelList" :key="index">
                      {{item.name}}
                      <i class="el-icon-circle-plus" @click="moreClassify(item, index)"></i>
                    </span>
                  </dd>
                </dl>
                <div class="btn-group">
                  <button @click="doneAdd" class="active">Done</button>
                  <button>Canel</button>
                </div>
              </dd>
            </dl>
          </li>
          <li class="zdy" :class="{'active': listIndex === 7}" v-on:click.stop="listBind('zdy')">
            <span>self setting sports type</span>
          </li>
        </ul>
      </div>

      <div class="c-ct relative">
        <div
          class="video-box"
          v-show="!isWindowSpring"
          @mouseover="videoClass='video-top-icon'; videoBottomClass='video-bottom-icon'"
          @mouseout="videoClass='video-top-hide'; videoBottomClass='video-bottom-hide'"
        >
          <img src="../../images/home/nav/video.png" alt width="100%">
          <div class="play-top" :class="videoClass">
            <!-- <img src="../../images/home/right-en/canel.jpg" class="canel-icon" alt="">
            <div class="bszj">
              <p>2019-01-31</p>
              <p>B03 <span class="c-blue">third inning progress</span></p>
            </div> -->
            <img src="../../images/home/right-en/top.jpg" class="top-icon" alt="">
            <!-- <a href="javascript:;" class="zb-btn">Anchor video</a> -->
          </div>
          <div class="play-list clearfix" :class="videoBottomClass">
            <img src="../../images/home/right/off.png" alt="">
            <img src="../../images/home/right/refresh.png" alt="">
            <div class="right-list right">
              <a href="javascript:;">关注</a>
              <img src="../../images/home/right/laba.png" alt="">
              <a href="javascript:;">超清</a>
              <div class="dm-query in-block">
                <span>弹幕</span>
                <i></i>
              </div>
              <a href="javascript:;" @click="rightPage = 'chatRoom'; rightBetListType = 'lts'">进入直播间</a>
              <span @click="isWindowSpring = true">弹窗</span>
              <img src="../../images/home/right/enlarge.png" alt="">
            </div>
          </div>
        </div>
        <img
          src="../../images/home/right/enter-video.png"
          alt
          class="go-chat-room-nav"
          @click="rightPage = 'chatRoom'"
          v-show="rightPage !== 'chatRoom'"
        >
        <div class="game-info">
          <div class="game-scoll">
            <article v-for="(item, index) in new Array(8)" v-bind:key="index">
              <h1>2019 LCK spring</h1>
              <div>
                <div class="gq-title">
                  <img src="../../images/home/nav/LOL.png" alt>
                  <span>2019-01-17 19:00</span>
                </div>
                <div class="gq-detail">
                  <div>
                    <img src="../../images/home/nav/ir.png" alt>
                    <span class="c-blue">RNG</span>
                    <span>winner</span>
                    <span
                      class="c-yellow cspn"
                      @click="rightPage = 'chatRoom';rightBetListType = 'tzlb';betListIndex=2"
                    >1.266</span>
                  </div>
                  <p class="ct-going">
                    <span class="two-going">second match in progress</span>
                    <span class="pic-icon cspn">
                      <img src="../../images/home/nav/home.png" alt>
                      <img
                        src="../../images/home/nav/video-icon.png"
                        title="chatroom"
                        @click="rightPage = 'chatRoom';rightBetListType = 'lts'"
                      >
                      <img src="../../images/home/nav/qs.png" alt>
                      <img src="../../images/home/nav/5666.png" alt>
                    </span>
                    <span class="more" @click="moreBetInd = (moreBetInd === index) ? false : index">more bet</span>
                  </p>
                  <div>
                    <img src="../../images/home/nav/we.png" alt>
                    <span class="c-blue">RNG</span>
                    <span>winner</span>
                    <span
                      class="c-yellow cspn"
                      @click="rightPage = 'chatRoom';rightBetListType = 'tzlb';betListIndex=2"
                    >1.266</span>
                    <span style="padding-left: 108px;">B03</span>
                  </div>
                </div>
              </div>
              <dl v-show="moreBetInd === index" class="more-bet-box">
                <dt>
                  <span>All bets</span>
                  <span>first round</span>
                  <span>Second inning</span>
                  <span>Third game</span>
                </dt>
                <dd>
                  <ul class="bs-result">
                    <li v-for="(item, index) in new Array(10)" v-bind:key="index">
                      <span>winner</span>
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
            </article>
          </div>
        </div>
      </div>

      <div class="c-rt">
        <div class="content-1" v-if="rightPage === 'info'">
          <div class="fund">
            <div class="user">
              <img src="../../images/home/nav/tx.png" alt>
              <div>
                <span>M116998898</span>
                <span class="svip">E-sports master</span>
                <span class="lift">108</span>
              </div>
            </div>

            <ul class="info list-flex">
              <li>
                <img src="../../images/home/nav/ye.png" alt>
                <span>balance</span>
                <small>956120.00</small>
              </li>
              <li>
                <img src="../../images/home/nav/jf.png" alt>
                <span>balance</span>
                <small>184619</small>
              </li>
              <li>
                <img src="../../images/home/nav/pm.png" alt>
                <span>balance</span>
                <small>59</small>
              </li>
            </ul>

            <ul class="operate list-flex">
              <li :class="{'active': operateIndex === 1}" @click="rechargeBind(1)">top-up</li>
              <li :class="{'active': operateIndex === 2}" @click="rechargeBind(2)">withdraw</li>
              <!-- <li :class="{'active': operateIndex === 3}" @click="rechargeBind(3)">transfer</li> -->
            </ul>
          </div>

          <article class="news" v-if="newPanelHide">
            <h1>
              Latest news
              <i class="close" v-on:click.stop="newPanelHide = false"></i>
            </h1>
            <img src="../../images/home/nav/menu.jpg" alt>
          </article>

          <article class="menus">
            <h1>
              self define menu
            </h1>
            <ul class>
              <li class="cz" :class="{'active': menuIndex === 1}" @click="menuIndex = 1">top-up</li>
              <li class="tq" :class="{'active': menuIndex === 2}" @click="menuIndex = 2">withdraw</li>
              <li class="zz" :class="{'active': menuIndex === 3}" @click="menuIndex = 3">ranking</li>
              <li class="zxkf" :class="{'active': menuIndex === 4}" @click="menuIndex = 4">
                <span>customer service</span>
              </li>
              <li
                class="zzkf"
                :class="{'active': menuIndex === 5}"
                @click="menuIndex = 5"
              >self service</li>
              <li class="wdyh" :class="{'active': menuIndex === 6}" @click="menuIndex = 6">coupon</li>
              <li class="jpmt" :class="{'active': menuIndex === 7}" @click="menuIndex = 7">showcase</li>
              <li class="gd" :class="{'active': menuIndex === 8}" @click="menuIndex = 8">more</li>
            </ul>
            <a class>confirm</a>
          </article>
        </div>

        <div class="content-2 relative" v-if="rightPage === 'chatRoom'" @click="betList2=false">
          <ul class="title">
            <li
              :class="{'active': rightBetListType === item.type}"
              v-on:click.stop="rightListNav(item.type)"
              v-for="(item, index) in rightNavList"
              v-bind:key="index"
            >
              {{item.name}}
              <i class="el-icon-caret-bottom" v-show="item.children && !betList2" @click="betList2 = index + 1"></i>
              <i class="el-icon-caret-top" v-show="item.children && betList2" @click="betList2 = !betList2"></i>
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
import myMarquee from "@/components/mymarquee";
import rechargeHtml from "@/views/home/rechargeBox";
import settlementHtml from "./right/settlement"; // 待结算
import charRoom from "./right/chatRoom";
import singleBet from "./right/singleBet"; // 投注
import areas from "./right/sunDryArea";
import outs from "./right/outs";
import squad from "./right/squad"; // 阵容
import datas from "./right/data"; // 数据
import mores from "./right/more"; // 更多

export default {
  data() {
    return {
      showMarquee: true,
      iptInfo: "",
      placeholderInfo: "Stimulate the battlefield",
      listIndex: 1,
      listIndex2: 1,
      listIndex3: 1,
      listIndex4: 2,
      operateIndex: 1,
      menuIndex: 1,
      newPanelHide: true,
      rightPage: "info",
      betList2: false,
      betListIndex: 1,
      dialogVisible: false,
      payListIndex: 1,
      dialogIndex: 1,
      rightBetListType: "sdq",
      rightNavList: this.$store.state.rightEnNavList || [],
      priceListIndex: 1,
      videoClass: '',
      moreBetInd: 1,
      videoBottomClass: false,
      isWindowSpring: false,
      positionX: 0,
      positionY: 0,
      priceList: ["100", "200", "1000", "2000", "3000"],
      lists: [
        "Due to the delay settlement of Wanbo Sports, if you are unable to sign in (members who cannot sign in before January 11, 2019), please contact customer service for a replacement."
      ],
      moreClassifyLabelList: JSON.parse(localStorage.getItem('moreListEn')) || [
        {name: "Recom", css: "like"},
        {name: "Today", css: "like"},
        {name: "LOL", css: "like"},
        {name: "DUTA2", css: "like"},
        {name: "AOV", css: "like"},
        {name: "PUBG", css: "like"}
      ],
      gameList: JSON.parse(localStorage.getItem('gameListEn')) || [
        {
          name: "Snowball",
          css: "gq",
          children: [
            {
              name: "LOL",
              num: 49,
              children: [
                { name: "LCK", num: 6},
                { name: "LGK", num: 1}
              ], css: "yxlm" 
            },
            { name: "AOV", css: "wzry"  },
            { name: "PUBG", css: "jdqs"  },
            { name: "soccer", css: "zq"  },
            { name: "basketball", css: "lq"  },
            { name: "overwatch", css: "swxf"  },
            { name: "Hearthstone", css: "lscs"  },
            { name: "Warcraft III", css: "mszb"  }
          ]
        },
        { name: "today", css: "jr" },
        { name: "early bet", css: "zp" },
        { name: "you may also like", css: "hot" },
        { name: "my recommendation", css: "like" },
        { name: "all matches", css: "all" }
      ],
      functionList: [],
    };
  },
  created() {
    this.functionList = JSON.parse(JSON.stringify(this.gameList));
  },
  computed: {
    getUserIcons() {
      return this.$store.state.rightEnNavList;
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
    doneAdd: function(){
      this.gameList = this.functionList;
      this.listIndex = false;
      localStorage.setItem('gameListEn', JSON.stringify(this.gameList));
      localStorage.setItem('moreListEn', JSON.stringify(this.moreClassifyLabelList))
    },
    rightListNav: function(type) {
      this.rightBetListType = type;
    },
    rechargeBind: function(ind) {
      this.operateIndex = ind;
      this.dialogVisible = true;
      this.dialogIndex = ind;
    },
    moreClassify: function(data, ind) {
      this.functionList.push(data);
      Array.from(new Set(this.functionList));
      this.moreClassifyLabelList = this.objectEach(
        this.moreClassifyLabelList,
        ind
      );
    },
    functionbind: function(data, ind) {
      this.moreClassifyLabelList.push(data);
      this.functionList = this.objectEach(this.functionList, ind);
    },
    objectEach: function(data, ind) {
      let list = [];
      data.forEach((v, k) => {
        if (k === ind) return;
        list.push(v);
      });
      return list;
    },
    listBind: function(ind = 1) {
      this.listIndex = this.listIndex === ind ? !this.listIndex : ind;
    },
    listBind2: function(ind = 1) {
      this.listIndex2 = this.listIndex2 === ind ? !this.listIndex2 : ind;
    },
    listBind3: function(ind = 1) {
      this.listIndex3 = this.listIndex3 === ind ? !this.listIndex3 : ind;
    },
    searchInfo() {}
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/main";
@import "../../styles/common";
@import "./../home/navigation.less";
</style>
<style lang="less" scoped>
.content-2 {
  .title {
    cursor: pointer;
    font-size: 12px;
    border-top: 1px solid #125b8e;
    margin-top: 10px;
    margin-bottom: 5px;

    & > li {
      width: 45px;
      vertical-align: top;
      padding-top: 5px;
      line-height: normal !important;
      li{
        line-height: 30px;
      }
    }
  }
}
.marquee {
  width: 602px !important;
}
.navigation {
  .top-title {
    .tz {
      width: 500px;
    }
  }
  .prompt-1 {
    margin-left: 10px !important;
    em {
      padding: 0 5px 0 0 !important;
    }
  }
  .search-close {
    width: 90px !important;
    font-size: 14px !important;
  }
}
.two-going {
  width: 160px !important;
  left: 305px !important;
}
.pic-icon {
  left: 490px !important;
  img {
    margin-right: 10px !important;
  }
}
.c-rt {
  .operate {
    margin-top: 0 !important;
  }
  .user div {
    width: 170px;
    span {
      margin-bottom: 10px !important;
    }
    .svip {
      font-size: 14px;
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
.search-close {
  width: 120px !important;
}
.zxkf {
  position: relative;
  span {
    position: absolute;
    bottom: 3px;
    left: 0;
  }
}
</style>