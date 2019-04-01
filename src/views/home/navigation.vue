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
        <input type="text" placeholder="刺激战场" maxlength="20">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="searchInfo"></i>
        <img src="../../images/home/nav/icon_video.png" alt class="video-icon">
      </div>
      <div class="marquee" v-if="showMarquee">
        <img src="../../images/home/nav/announce.png" alt>
        <my-marquee :lists="lists"></my-marquee>
      </div>
      <div class="tz">
        <span>
          快速投注
          <img src="../../images/home/nav/tz.png" alt>
        </span>
        <span>
          水位：默认
          <img src="../../images/home/nav/xl.png" alt>
        </span>
        <span>
          选择联赛：全部
          <img src="../../images/home/nav/xl.png" alt>
        </span>
        <span>
          赔率：香港盘
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
              <dt class="title">定制我的专属页面</dt>
              <dd>
                <dl>
                  <dt>功能选择栏</dt>
                  <dd>
                    <span v-for="(item, index) in functionList" :key="index">
                      {{item.name}}
                      <i class="el-icon-error" @click="functionbind(item, index)"></i>
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>更多分类</dt>
                  <dd>
                    <span v-for="(item, index) in moreClassifyLabelList" :key="index">
                      {{item.name}}
                      <i class="el-icon-circle-plus" @click="moreClassify(item, index)"></i>
                    </span>
                  </dd>
                </dl>
                <div class="btn-group">
                  <button class="active" @click="doneAdd">完成</button>
                  <button @click="listIndex = false">取消</button>
                </div>
              </dd>
            </dl>
          </li>
          <li class="zdy" :class="{'active': listIndex === 7}" v-on:click.stop="listBind('zdy')">
            <span>自定义运动类型</span>
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
              <p>B03 <span class="c-blue">第三局进行中</span></p>
            </div>-->
            <img src="../../images/home/right-en/top.jpg" class="top-icon" alt>
            <!-- <a href="javascript:;" class="zb-btn">主播视频</a> -->
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
              <a href="javascript:;" @click="rightPage = 'chatRoom'; rightBetListType = 'lts'">进入直播间</a>
              <span class="cspn" @click="isWindowSpring = true">弹窗</span>
              <img class="cspn" src="../../images/home/right/enlarge.png" alt>
            </div>
          </div>
        </div>
        <img
          src="../../images/home/right/enter-video.png"
          alt
          class="go-chat-room-nav"
          @click="rightPage = 'chatRoom'; rightBetListType = 'lts'"
          v-show="rightPage !== 'chatRoom'"
        >
        <div class="game-info">
          <div class="game-scoll">
            <article v-for="(item, index) in new Array(8)" v-bind:key="index">
              <h1>2019 LCK春赛季</h1>
              <div>
                <div class="gq-title">
                  <img src="../../images/home/nav/LOL.png" alt>
                  <span>2019-01-17 19:00</span>
                </div>
                <div class="gq-detail">
                  <div>
                    <img src="../../images/home/nav/ir.png" alt>
                    <span class="c-blue">RNG</span>
                    <span>比赛获胜方</span>
                    <span
                      class="c-yellow cspn"
                      @click="rightPage = 'chatRoom';rightBetListType = 'tzlb'; betListIndex=2"
                    >1.266</span>
                  </div>
                  <p class="ct-going">
                    <span class="two-going">第二局进行中</span>
                    <span class="pic-icon">
                      <img src="../../images/home/nav/home.png">
                      <img src="../../images/home/nav/video-icon.png" alt title="聊天室"
                        @click="rightPage = 'chatRoom';rightBetListType = 'lts'">
                      <img src="../../images/home/nav/qs.png" alt>
                      <img src="../../images/home/nav/5666.png" alt>
                    </span>
                    <span
                      class="more"
                      @click="moreBetInd = (moreBetInd === index) ? false : index"
                    >更多投注</span>
                  </p>
                  <div>
                    <img src="../../images/home/nav/we.png" alt>
                    <span class="c-blue">RNG</span>
                    <span>比赛获胜方</span>
                    <span
                      class="c-yellow cspn"
                      @click="rightPage = 'chatRoom';rightBetListType = 'tzlb';betListIndex=2"
                    >1.266</span>
                    <span>赛制：三局两胜</span>
                  </div>
                </div>
              </div>
              <dl v-show="moreBetInd === index" class="more-bet-box">
                <dt>
                  <span>所有下注</span>
                  <span>第一局</span>
                  <span>第二局</span>
                  <span>第三局</span>
                </dt>
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
                <span class="svip">电竞大师</span>
                <span class="lift">108</span>
              </div>
            </div>

            <ul class="info list-flex">
              <li>
                <img src="../../images/home/nav/ye.png" alt>
                <span>余额</span>
                <small>956120.00</small>
              </li>
              <li>
                <img src="../../images/home/nav/jf.png" alt>
                <span>积分</span>
                <small>184619</small>
              </li>
              <li>
                <img src="../../images/home/nav/pm.png" alt>
                <span>排名</span>
                <small>59</small>
              </li>
            </ul>

            <ul class="operate list-flex">
              <li :class="{'active': operateIndex === 1}" @click="rechargeBind(1)">充值</li>
              <li :class="{'active': operateIndex === 2}" @click="rechargeBind(2)">提款</li>
              <!-- <li :class="{'active': operateIndex === 3}" @click="rechargeBind(3)">转账</li> -->
            </ul>
          </div>

          <article class="news" v-if="newPanelHide">
            <h1>
              热门新闻
              <i class="close" v-on:click.stop="newPanelHide = false"></i>
            </h1>
            <img src="../../images/home/nav/menu.jpg" alt>
          </article>

          <article class="menus">
            <h1>自定义菜单</h1>
            <ul class>
              <li class="cz" :class="{'active': menuIndex === 1}" @click="menuIndex = 1">充值</li>
              <li class="tq" :class="{'active': menuIndex === 2}" @click="menuIndex = 2">提取</li>
              <li class="zz" :class="{'active': menuIndex === 3}" @click="menuIndex = 3">排行榜</li>
              <li class="zxkf" :class="{'active': menuIndex === 4}" @click="menuIndex = 4">在线客服</li>
              <li class="zzkf" :class="{'active': menuIndex === 5}" @click="menuIndex = 5">自助客服</li>
              <li class="wdyh" :class="{'active': menuIndex === 6}" @click="menuIndex = 6">我的优惠</li>
              <li class="jpmt" :class="{'active': menuIndex === 7}" @click="menuIndex = 7">精品美图</li>
              <li class="gd" :class="{'active': menuIndex === 8}" @click="menuIndex = 8">更多</li>
            </ul>
            <a class>确认</a>
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
      placeholderInfo: "刺激战场",
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
      lists: [
        "由于万博体育延时结算，如果无法签到(2019年1月11日之前无法签到的会员)，请联系客服进行补签。"
      ],
      moreClassifyLabelList: JSON.parse(localStorage.getItem('moreList')) || [
        {name: "热门推荐", css: "like"},
        {name: "今日排行", css: "like"},
        {name: "英雄联盟", css: "like"},
        {name: "DUTA2", css: "like"},
        {name: "王者荣耀", css: "like"},
        {name: "绝地求生", css: "like"}
      ],
      gameList: JSON.parse(localStorage.getItem('gameList')) || [
        {
          name: "滚球",
          css: "gq",
          children: [
            {
              name: "英雄联盟",
              num: 49,
              children: [
                { name: "LCK", num: 6},
                { name: "LGK", num: 1}
              ], css: "yxlm" 
            },
            { name: "王者荣耀", css: "wzry"  },
            { name: "绝地求生", css: "jdqs"  },
            { name: "足球", css: "zq"  },
            { name: "篮球", css: "lq"  },
            { name: "守望先锋", css: "swxf"  },
            { name: "炉石传说", css: "lscs"  },
            { name: "魔兽争霸Ⅲ", css: "mszb"  }
          ]
        },
        { name: "今日", css: "jr" },
        { name: "早盘", css: "zp" },
        { name: "猜你喜欢", css: "hot" },
        { name: "我的推荐", css: "like" },
        { name: "所有赛事", css: "all" }
      ],
      functionList: [],
      priceList: ["100", "200", "1000", "2000", "3000"],
      rightNavList: this.$store.state.rightNavList || []
    };
  },
  created() {
    this.functionList = JSON.parse(JSON.stringify(this.gameList));
    this.rightNavList
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
      localStorage.setItem('gameList', JSON.stringify(this.gameList));
      localStorage.setItem('moreList', JSON.stringify(this.moreClassifyLabelList))
    },
    rightListNav: function(type) {
      this.rightBetListType = type;
      // if (type === "tzlb") this.betList2 = !this.betList2;
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
    listBind: function(ind) {
      // let ind = ('zdy' === index) ? this.gameList.length : index;
      // console.log(ind);
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
@import "./navigation";
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