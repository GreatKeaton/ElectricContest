<template>
  <div class="navigation stream-line">
    <header>
      <img src="../../images/header/logo.png" alt>
      <router-link to="/homeEn"><img
          src="../../images/home/right-en/logo2.png"
          class="version-switch mt-10" alt></router-link>
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
          <ul class="bclx-list right cspn">
            <li @click="goPage('homeEn')">Matches</li>
            <li @click="goPage('rulesEn')">Betting rules</li>
            <li @click="funcSetDialogVisible = true">setting</li>
            <li @click="betRecordDialogVisible = true">history record</li>
            <li>
              <div class="lang-query">
                <div class="lang-query-input" @click="isQueryLang = !isQueryLang">
                  <img src="../../images/home/right/en.png" alt>
                  <i class="el-icon-caret-bottom"></i>
                </div>
                <ul v-show="isQueryLang" @click="isQueryLang = false">
                  <router-link to="/streamline">
                    <li>
                      <img src="../../images/home/right/zn.png" alt>
                    </li>
                  </router-link>
                  <router-link to="/streamlineEn">
                    <li>
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
                      <router-link to="/studioEn">
                        <img src="../../images/home/nav/video-icon.png" alt>
                      </router-link>
                      <router-link to="/studio">
                        <img src="../../images/home/nav/qs.png" alt>
                      </router-link>
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

    <el-dialog class="func-set-dialog" :visible.sync="funcSetDialogVisible" width="523.5px">
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
    </el-dialog>

    <el-dialog :visible.sync="betRecordDialogVisible" width="845px" class="betting-record-dialog">
      <section class="betting-record">
        <h1>
          <i class="el-icon-menu"></i>betting record
        </h1>
        <div>
          <ul class="query-bet-list">
            <li
              :class="{'active': betSetIndex === index}"
              @click="betSetIndex = index"
              v-for="(item, index) in bettingSetList"
              v-bind:key="index"
            >{{item}}</li>
          </ul>
          <!-- 下注记录 -->
          <div class="record-bet" v-show="betSetIndex === 0">
            <div class="query-criteria">
              Transaction Type：
              <select name id style="width: 60px;">
                <option value>all</option>
              </select>
              <div class="jydh-input">
                <a href="javascript:;">transaction</a>
                <input type="text" placeholder="enter your order number">
              </div>hour：
              <select name id></select>
              to
              <select name id></select>
              <a href="javascript:;" class="query-list-btn">Inquire</a>
            </div>
            <div class="query-result">
              <div>
                game type：
                <select name id></select>
                League screening：
                <select name id></select>
              </div>
              <table border="0">
                <thead>
                  <th>number</th>
                  <th>game type</th>
                  <th>Betting details</th>
                  <th>Betting league</th>
                  <th>Bet options</th>
                  <th>Bet type</th>
                  <th>Odds</th>
                  <th>Total bet</th>
                  <th>win/lose</th>
                  <th>status</th>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>
                      <img src="../../images/home/nav/LOL.png" alt>
                      <p>LOL</p>
                    </td>
                    <td>
                      <p>2019年1月21日</p>
                      <p>14:59:01</p>
                      <p>564545415454454</p>
                    </td>
                    <td>
                      <p>Stunt competition</p>
                      <p>（LOL）</p>
                      <p>(1 win)</p>
                    </td>
                    <td>
                      chaos Esports Club@全场0-1
                      Alliance v Chaos Esports Club
                    </td>
                    <td>Registration</td>
                    <td>
                      <p>Esports Masters</p>
                      <p>First round</p>
                      <p>Registration</p>
                    </td>
                    <td>confirm</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2">Total page</td>
                    <td colspan="5"></td>
                    <td>20</td>
                    <td>0.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colspan="2">total</td>
                    <td colspan="5"></td>
                    <td>20</td>
                    <td>0.00</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="list-page">
              Every page shows：20
              <i class="el-icon-d-arrow-left"></i>
              <i class="el-icon-arrow-left"></i>
              1/2
              <i class="el-icon-d-arrow-right"></i>
              <i class="el-icon-arrow-right"></i>
              total：2
            </div>
          </div>
          <!-- 活动记录 -->
          <div class="record-activity" v-show="betSetIndex === 1">
            <div class="query-criteria">
              Note status:
              <select name id style="width: 100px;">
                <option value>Billed note</option>
              </select>
              Note number：
              <select name id style="width: 100px;">
                <option value>Esports Masters</option>
              </select>
              <img src="../../images/home/dialog/data.png" class="mt-10" alt>
              Bet time：
              <select name id></select>
              to
              <select name id></select>
              <a href="javascript:;" class="query-list-btn">Inquire</a>
            </div>
            <div class="query-result">
              <div class="list-data">
                <table border="0">
                  <thead>
                    <tr>
                      <th>number</th>
                      <th>type activity</th>
                      <th>Betting details</th>
                      <th>Betting league</th>
                      <th>Bet options</th>
                      <th>Bet type</th>
                      <th>Purchase rate</th>
                      <th>Total bet</th>
                      <th>win/lose</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Esports Masters</td>
                      <td>
                        <p>2019年1月21日</p>
                        <p>14:59:01</p>
                        <p>545454545</p>
                      </td>
                      <td>
                        <p>Stunt competition</p>
                        <p>（LOL）</p>
                        <p>(1 wins a game)</p>
                      </td>
                      <td>
                        chaos Esports Club@Full audience0-1
                        Alliance v Chaos Esports Club
                      </td>
                      <td>European disk</td>
                      <td>2.25</td>
                      <td>10</td>
                      <td>-</td>
                      <td>confirm</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2">Total page</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>10</td>
                      <td>0.00</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="list-page">
                Every page ：20
                <i class="el-icon-d-arrow-left"></i>
                <i class="el-icon-arrow-left"></i>
                1/2
                <i class="el-icon-d-arrow-right"></i>
                <i class="el-icon-arrow-right"></i>
                total：2
              </div>
            </div>
          </div>
          <!-- 积分查询 -->
          <div v-show="betSetIndex === 2" class="query-integral">
            <div class="query-criteria">
              Transaction Type：
              <select name id style="width: 60px;">
                <option value>all</option>
              </select>
              <div class="jydh-input">
                <a href="javascript:;">Transaction</a>
                <input type="text" placeholder="Please enter your order number">
              </div>
              <img src="../../images/home/dialog/data.png" alt>transaction hour：
              <select name id></select>
              to
              <select name id></select>
              <a href="javascript:;" class="query-list-btn" style="width: 80px;">Inquire</a>
            </div>
            <div class="query-result">
              <div class="list-data">
                <table border="0">
                  <thead>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Income points</th>
                    <th>Expenditure points</th>
                    <th>Remaining points</th>
                    <th>Income expenditure</th>
                    <th>Remarks</th>
                    <th>Status</th>
                  </thead>
                  <tbody>
                    <td>01</td>
                    <td>
                      <p>November 25, 2018</p>
                      <p>10:04:17</p>
                    </td>
                    <td>-</td>
                    <td>100</td>
                    <td>520</td>
                    <td>Registration</td>
                    <td>
                      <p>Esports Masters</p>
                      <p>First round</p>
                      <p>Registration</p>
                    </td>
                    <td>confirm</td>
                  </tbody>
                  <tfoot>
                    <td colspan="2">Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tfoot>
                </table>
              </div>
              <div class="list-page">
                Every page shows：20
                <i class="el-icon-d-arrow-left"></i>
                <i class="el-icon-arrow-left"></i>
                1/2
                <i class="el-icon-d-arrow-right"></i>
                <i class="el-icon-arrow-right"></i>
                total：2
              </div>
            </div>
          </div>
        </div>
      </section>
    </el-dialog>
  </div>
</template>

<script>
import myMarquee from "@/components/mymarquee";
import singleBet from "./../home-en/right/settlement"; // 投注
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
      isQueryLang: false,
      betRecordDialogVisible: false,
      funcSetDialogVisible: false,
      funcSetIndex: 1,
      betSetIndex: 0,
      bettingSetList: ["Bet record", "Activity record", "Point query"],
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
      moreClassifyLabelList: ["Hot", "Today", "LOL", "DUTA2", "AOV", "PUBG"]
    };
  },
  created() {},
  methods: {
    goPage: function(page){
      this.$router.push({name: page});
      // localStorage.setItem('routeHeader', 'homeEn');
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
  .bshsf {
    width: 40% !important;
  }
}
</style>
<style lang="less">
.stream-line {
  .lement-box {
    padding: 10px;
    .confirmed {
      top: 5px !important;
    }
    .bsjg-box {
      margin-bottom: 15px !important;
    }
  }
}
</style>
