<template>
  <div class="navigation stream-line">
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

    <div class="content flex">
      <div class="c-lf">
        <ul class="main-list">
          <li class="gq" :class="{'active': listIndex === 1}" v-on:click.stop="listBind(1)">
            <span>Snowball</span>

            <ul class="list-2" v-show="listIndex === 1">
              <li class="yxlm" :class="{'active': listIndex3 === 1}" v-on:click.stop="listBind3(1)">
                <span>
                  LOL
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
                  AOV
                  <em>11</em>
                </span>
              </li>
              <li class="jdqs" :class="{'active': listIndex3 === 3}" v-on:click.stop="listBind3(3)">
                <span>
                  PUBG
                  <em>31</em>
                </span>
              </li>
              <li class="zq" :class="{'active': listIndex3 === 4}" v-on:click.stop="listBind3(4)">
                <span>
                  soccer (football)
                  <em>17</em>
                </span>
              </li>
              <li class="lq" :class="{'active': listIndex3 === 5}" v-on:click.stop="listBind3(5)">
                <span>
                  basketball
                  <em>11</em>
                </span>
              </li>
              <li class="swxf" :class="{'active': listIndex3 === 6}" v-on:click.stop="listBind3(6)">
                <span>
                  overwatch
                  <em>17</em>
                </span>
              </li>
              <li class="lscs" :class="{'active': listIndex3 === 7}" v-on:click.stop="listBind3(7)">
                <span>
                  Hearthstone
                  <em>14</em>
                </span>
              </li>
              <li class="mszb" :class="{'active': listIndex3 === 8}" v-on:click.stop="listBind3(8)">
                <span>
                  Warcraft III
                  <em>31</em>
                </span>
              </li>
            </ul>
          </li>
          <li class="jr" :class="{'active': listIndex === 2}" v-on:click.stop="listBind(2)">
            <span>today</span>
          </li>
          <li class="zp" :class="{'active': listIndex === 3}" v-on:click.stop="listBind(3)">
            <span>early bet</span>
          </li>
          <li class="hot" :class="{'active': listIndex === 4}" v-on:click.stop="listBind(4)">
            <span>you may also like</span>
          </li>
          <li class="like" :class="{'active': listIndex === 5}" v-on:click.stop="listBind(5)">
            <span>my recommendation</span>
          </li>
          <li class="all" :class="{'active': listIndex === 6}" v-on:click.stop="listBind(6)">
            <span>all matches</span>
          </li>
          <li class="dzym" v-show="isDzym">
            <dl>
              <dt class="title">Customize my exclusive page</dt>
              <dd>
                <dl>
                  <dt>Function selection bar</dt>
                  <dd>
                    <span v-for="(item, index) in functionLabelList" v-bind:key="index">
                      {{item}}
                      <i class="el-icon-error" @click="functionbind(item, index)"></i>
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>more</dt>
                  <dd>
                    <span v-for="(item, index) in moreClassifyLabelList" v-bind:key="index">
                      {{item}}
                      <i class="el-icon-circle-plus" @click="moreClassify(item, index)"></i>
                    </span>
                  </dd>
                </dl>
                <div class="btn-group">
                  <button class="active">Done</button>
                  <button>Canel</button>
                </div>
              </dd>
            </dl>
          </li>
          <li
            class="zdy"
            :class="{'active': listIndex === 7}"
            v-on:click.stop="listBind(7); isDzym = !isDzym;"
          >
            <span>self setting sports type</span>
          </li>
          <!-- <li class="zdy" :class="{'active': listIndex === 7}" v-on:click.stop="listBind(7)"><span>自定义运动类型</span></li> -->
        </ul>
      </div>

      <div class="c-ct">
        <div class="clearfix">
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
              odds: HongKong
              <img src="../../images/home/nav/xl.png" alt>
            </span>
          </div>
          <ul class="bclx-list right">
            <li>Matches</li>
            <li>Betting rules</li>
            <li>setting</li>
            <li>history record</li>
            <li>
              <select>
                <option value></option>
              </select>
            </li>
          </ul>
        </div>

        <div class="game-list-box">
          <div class="game-info">
            <article v-for="(item, index) in new Array(8)" v-bind:key="index">
              <h1>2019 LCK spring</h1>
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
                      <span>winner</span>
                      <span class="c-yellow">1.266</span>
                     </div>
                  </div>
                  <div class="two-going">
                    <span class="zs">second match in progress</span>
                    <span>B03</span>
                  </div>
                  <p class="ct-going">
                    <span class="pic-icon">
                      <img src="../../images/home/nav/video-icon.png" alt>
                      <img src="../../images/home/nav/qs.png" alt>
                    </span>
                    <span
                      class="more"
                      @click="moreBetInd = (moreBetInd === index) ? false : index"
                    >more</span>
                  </p>
                  <div>
                    <div class="bshsf flex">
                      <img src="../../images/home/nav/we.png" alt>
                      <span class="c-blue">RNG</span>
                      <span>winner</span>
                      <span class="c-yellow">1.266</span>
                    </div>
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
        <div class="fund">
          <ul class="operate list-flex">
            <li :class="{'active': operateIndex === 1}" @click="operateIndex = 1">My Bet</li>
            <li :class="{'active': operateIndex === 2}" @click="operateIndex = 2">Met History</li>
          </ul>
        </div>
        <singleBet></singleBet>
        <!-- <div class="box-content">投注单为空 请添加投注</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import myMarquee from "@/components/mymarquee";
import singleBet from "./../home-en/right/singleBet"; // 投注
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
      tzTypeIndex: 1,
      menuIndex: 1,
      newPanelHide: true,
      zdyPanelHide: true,
      moreBetInd: 1,
      isDzym: false,
      lists: [
        "Due to the delay settlement of Wanbo Sports, if you are unable to sign in (members who cannot sign in before January 11, 2019), please contact customer service for a replacement."
      ],
      functionLabelList: [
        "Snowball",
        "today",
        "early bet",
        "我的",
        "Betting list"
      ],
      moreClassifyLabelList: [
        "Hot",
        "Today",
        "LOL",
        "DUTA2",
        "AOV",
        "PUBG"
      ]
    };
  },
  created() {},
  methods: {
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
  },
  components: {
    myMarquee,
    singleBet
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/main";
@import "../../styles/common";
@import "./index";

.bsjg-box {
  span {
    font-size: 14px !important;
    line-height: 20px !important;
  }
}
.bclx-list {
  margin-left: 10px !important;
}
.ct-going {
  .more {
    font-size: 16px !important;
    padding: 0 !important;
    line-height: 50px;
  }
}
.pic-icon {
  img {
    margin-right: 10px !important;
  }
}
.game-list-box {
  .bshsf{
    width: 40% !important;
  }
}
</style>
<style lang="less">
.stream-line{
  .lement-box{
    padding: 10px;
    .confirmed{
      top: 5px !important;
    }
    .bsjg-box{
      margin-bottom: 15px !important;
    }
  }
}
</style>
