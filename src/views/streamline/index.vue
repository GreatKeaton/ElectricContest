<template>
  <div class="navigation streamline">
    <header>
      <img src="../../images/header/logo.png" alt>
      <router-link to="/home">
        <img src="../../images/home/right/diamond-2.png" class="version-switch mt-10" alt>
      </router-link>
    </header>
    <div class="top-title">
      <div class="search-inp">
        RMB: 19000
        <i></i>
      </div>
      <div class="marquee" v-if="showMarquee">
        <img src="../../images/home/nav/announce.png" alt>
        <my-marquee :lists="lists"></my-marquee>
      </div>
    </div>

    <div class="content flex relative">
      <div class="c-lf">
        <ul class="main-list">
          <li class="gq" :class="{'active': listIndex === 1}" v-on:click.stop="listBind(1)">
            <span>滚球</span>

            <ul class="list-2" v-show="listIndex === 1">
              <li class="yxlm" :class="{'active': listIndex3 === 1}" v-on:click.stop="listBind3(1)">
                <span>
                  英雄联盟
                  <em>49</em>
                </span>

                <ul class="list-3" v-show="listIndex3 === 1">
                  <li :class="{'active': listIndex4 === 1}" v-on:click.stop="listIndex4 = 1">
                    LCK
                    <em>1</em>
                  </li>
                  <li :class="{'active': listIndex4 === 2}" v-on:click.stop="listIndex4 = 2">
                    LGK
                    <em>6</em>
                  </li>
                </ul>
              </li>
              <li class="wzry" :class="{'active': listIndex3 === 2}" v-on:click.stop="listBind3(2)">
                <span>
                  王者荣耀
                  <em>11</em>
                </span>
              </li>
              <li class="jdqs" :class="{'active': listIndex3 === 3}" v-on:click.stop="listBind3(3)">
                <span>
                  绝地求生
                  <em>31</em>
                </span>
              </li>
              <li class="zq" :class="{'active': listIndex3 === 4}" v-on:click.stop="listBind3(4)">
                <span>
                  足球
                  <em>17</em>
                </span>
              </li>
              <li class="lq" :class="{'active': listIndex3 === 5}" v-on:click.stop="listBind3(5)">
                <span>
                  篮球
                  <em>11</em>
                </span>
              </li>
              <li class="swxf" :class="{'active': listIndex3 === 6}" v-on:click.stop="listBind3(6)">
                <span>
                  守望先锋
                  <em>17</em>
                </span>
              </li>
              <li class="lscs" :class="{'active': listIndex3 === 7}" v-on:click.stop="listBind3(7)">
                <span>
                  炉石传说
                  <em>14</em>
                </span>
              </li>
              <li class="mszb" :class="{'active': listIndex3 === 8}" v-on:click.stop="listBind3(8)">
                <span>
                  魔兽争霸Ⅲ
                  <em>31</em>
                </span>
              </li>
            </ul>
          </li>
          <li class="jr" :class="{'active': listIndex === 2}" v-on:click.stop="listBind(2)">
            <span>今日</span>
          </li>
          <li class="zp" :class="{'active': listIndex === 3}" v-on:click.stop="listBind(3)">
            <span>早盘</span>
          </li>
          <li class="hot" :class="{'active': listIndex === 4}" v-on:click.stop="listBind(4)">
            <span>猜你喜欢</span>
          </li>
          <li class="like" :class="{'active': listIndex === 5}" v-on:click.stop="listBind(5)">
            <span>我的推荐</span>
          </li>
          <li class="all" :class="{'active': listIndex === 6}" v-on:click.stop="listBind(6)">
            <span>所有赛事</span>
          </li>
          <!-- <li class="zdy" :class="{'active': listIndex === 7}" v-on:click.stop="listBind(7)"><span>自定义运动类型</span></li> -->
        </ul>
      </div>

      <div class="c-ct">
        <div class="clearfix">
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
          <ul class="bclx-list right cspn">
            <li @click="goPage('datacenter')">赛果</li>
            <li @click="goPage('rules')">玩法规则</li>
            <li @click="funcSetDialogVisible = true">功能设定</li>
            <li @click="betRecordDialogVisible = true">投注记录</li>
            <li>
              <div class="lang-query">
                <div class="lang-query-input" @click="isQueryLang = !isQueryLang">
                  <img src="../../images/home/right/zn.png" alt>
                  <i class="el-icon-caret-bottom"></i>
                </div>
                <ul v-show="isQueryLang" @click="isQueryLang = false">
                  <router-link to="/streamline">
                    <li @click="lang = 'zn'">
                      <img src="../../images/home/right/zn.png" alt>
                    </li>
                  </router-link>
                  <router-link to="/streamlineEn">
                    <li @click="lang = 'en'">
                      <img src="../../images/home/right/en.png" alt>
                    </li>
                  </router-link>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div class="game-list-box">
          <div class="game-info">
            <article v-for="(item, index) in new Array(8)" v-bind:key="index">
              <h1>2019 LCK春赛季</h1>
              <div>
                <div class="gq-title">
                  <img src="../../images/home/nav/LOL.png" alt>
                  <span>2019-01-17 19:00</span>
                </div>
                <div class="gq-detail">
                  <div>
                    <div class="bshsf flex">
                      <img src="../../images/home/nav/ir.png" alt>
                      <span class="c-blue">RNG</span>
                      <span style="width: 100px;">比赛获胜方</span>
                      <span class="c-yellow">1.266</span>
                    </div>
                  </div>
                  <div class="two-going">
                    <span class="zs">第二局进行中</span>
                    <span>赛制：三局两胜</span>
                  </div>
                  <p class="ct-going">
                    <span class="pic-icon">
                      <router-link to="/studio">
                        <img src="../../images/home/nav/video-icon.png" alt>
                      </router-link>
                      <router-link to="/studio">
                        <img src="../../images/home/nav/qs.png" alt>
                      </router-link>
                    </span>
                    <span
                      class="more"
                      @click="moreBetInd = (moreBetInd === index) ? false : index"
                    >更多投注</span>
                  </p>
                  <div>
                    <div class="bshsf flex">
                      <img src="../../images/home/nav/we.png" alt>
                      <span class="c-blue">RNG</span>
                      <span>比赛获胜方</span>
                      <span class="c-yellow">1.266</span>
                      <!-- <span>赛制：三局两胜</span> -->
                    </div>
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
        <div class="fund">
          <ul class="operate list-flex">
            <li :class="{'active': operateIndex === 1}" @click="operateIndex = 1">我的投注</li>
            <li :class="{'active': operateIndex === 2}" @click="operateIndex = 2">投注历史</li>
          </ul>
        </div>
        <singleBet></singleBet>
        <!-- <div class="box-content">投注单为空 请添加投注</div> -->
      </div>
    </div>

    <el-dialog class="func-set-dialog" :visible.sync="funcSetDialogVisible" width="523.5px">
      <functionSetting></functionSetting>
    </el-dialog>

    <el-dialog :visible.sync="betRecordDialogVisible" width="845px" class="betting-record-dialog">
      <betRecord></betRecord>
    </el-dialog>
  </div>
</template>

<script>
import myMarquee from "@/components/mymarquee";
import singleBet from "./../home/right/settlement"; // 投注
import functionSetting from "../../components/functionSetting";
import betRecord from "../../components/betRecord";
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
      tzTypeIndex: 1,
      menuIndex: 1,
      newPanelHide: true,
      zdyPanelHide: true,
      moreBetInd: 1,
      isQueryLang: false,
      betRecordDialogVisible: false,
      funcSetDialogVisible: false,
      betSetIndex: 0,
      bettingSetList: ["下注记录", "活动记录", "积分查询"],
      lists: [
        "由于万博体育延时结算，如果无法签到(2019年1月11日之前无法签到的会员)，请联系客服进行补签。"
      ]
    };
  },
  created() {},
  methods: {
    goPage: function(page){
      this.$router.push({name: page});
      // localStorage.setItem('routeHeader', 'home');
    },
    listBind: function(ind = 1) {
      this.listIndex = this.listIndex === ind ? !this.listIndex : ind;
    },
    listBind2: function(ind = 1) {
      this.listIndex2 = this.listIndex2 === ind ? !this.listIndex2 : ind;
    },
    listBind3: function(ind = 1) {
      this.listIndex3 = this.listIndex3 === ind ? !this.listIndex3 : ind;
    }
  },
  components: {
    myMarquee,
    singleBet,
    functionSetting,
    betRecord
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/main";
@import "../../styles/common";
@import "./index";
// @import "../../styles/header";
</style>
<style lang="less">
.el-dialog__header {
  display: inline-block;
  background: url(/static/img/title-bg.1d50136.png) no-repeat top center;
  background-size: 100% 100%;
  width: 100%;
  height: 40px;
}
</style>
