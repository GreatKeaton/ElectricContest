<template>
  <div id="headerNav">
    <div class="center">
      <div class="nav">
        <div class="logo">
          <img src="../images/header/logo.png" alt>
          <img
            src="../images/home/right-en/logo1.png"
            class="version-switch"
            alt
            @click="routerTo('streamlineEn', 'streamlineEn')"
          >
        </div>
        <div class="setting" v-show="isNotHeader">
          <div class="setItem pointer" @click="funcSetDialogVisible = true">Preferences</div>
          <div class="setItem pointer" @click="betRecordDialogVisible = true">betting record</div>
          <div class="lang-query">
            <div class="lang-query-input" @click="isQueryLang = !isQueryLang">
              <img src="../images/home/right/zn.png" alt="" v-show="lang === 'home'">
              <img src="../images/home/right/en.png" alt="" v-show="lang === 'homeEn'">
              <i class="el-icon-caret-bottom"></i>
            </div>
            <ul v-show="isQueryLang" @click="isQueryLang = false">
              <li @click="routerTo('home', 'home');lang = 'home'"><img src="../images/home/right/zn.png" alt=""></li>
              <li @click="routerTo('homeEn', 'homeEn');lang = 'homeEn'"><img src="../images/home/right/en.png" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
      <ul class="navItemBox cspn" v-show="isNotHeader">
        <li
          v-for="(item,index) in list"
          v-bind:key="index"
          class="navItem textCen"
          :class="{itemActive:(item === activeName), itemLast:list[index+1] && list[index+1] === activeName}"
          @click="routerTo(index,item.name)"
        >{{item.value}}</li>
      </ul>
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
                      <img src="../images/home/nav/LOL.png" alt>
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
              <img src="../images/home/dialog/data.png" class="mt-10" alt>
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
              <img src="../images/home/dialog/data.png" alt>transaction hour：
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
export default {
  data() {
    return {
      activeName: "",
      betRecordDialogVisible: false,
      funcSetDialogVisible: false,
      funcSetIndex: 1,
      bettingSetList: ["Bet record", "Activity record", "Point query"],
      betSetIndex: 0,
      routhPath: this.$route.name,
      isQueryLang: false,
      lang: this.$route.params.order || "homeEn",
      routeParams: localStorage.getItem('routeHeader'),
      isNotHeader: (this.routhPath === 'streamline' || this.routhPath === 'streamlineEn') || true,
      list: [
        {
          value: "Matches",
          url: "/homeEn",
          name: "homeEn"
        },
        {
          value: "Quiz",
          url: "/quiz",
          name: "quizEn"
        },
        {
          value: "Resources",
          url: "/datacenter",
          name: "datacenterEn"
        },
        {
          value: "News",
          url: "/news",
          name: "newsEn"
        },
        {
          value: "Strategy",
          url: "/strategy",
          name: "strategyEn"
        },
        {
          value: "Betting rules",
          url: "/rules",
          name: "rulesEn"
        },
        {
          value: "ranking",
          url: "/ranking",
          name: "rankingEn"
        },
        {
          value: "E-shop",
          url: "/mall",
          name: "mallEn"
        },
        {
          value: "Videos",
          url: "/videos",
          name: "videosEn"
        }
      ]
    };
  },
  methods: {
    routerTo(index, name) {
      this.routhPath = name;
      this.$router.push({
        name: name,
        params: {
          order: index
        }
      });
      if (name === "home" || name === "homeEn"){
        localStorage.setItem('routeHeader', name);
        this.lang = name;
      }else if(name === 'streamline' || name === 'streamlineEn'){
        localStorage.setItem('routeHeader', name);
      }
    }
  },
  created(){
    console.log(this.routeParams);
  },
  watch: {
    $route(to, from) {
      this.activeName = to.name;
      if (to.name === "home" || to.name === "homeEn"){
        this.lang = to.name;
      }
    }
  },
  components: {}
};
</script>

<style lang='stylus' scoped>
#headerNav {
  margin-bottom: 8px;
  .center {
    width: 1360px;
    margin: 0 auto;

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;

      .setting {
        display: flex;
        justify-content: flex-end;
        color: #ffffff;
        font-size: 14px;

        .setItem {
          margin-right: 20px;
          display: inline-block;
        }

        .lang-query{
          position: relative;
          width: 40px;

          .lang-query-input{
            background: transparent;
            border: 1px solid #24526e;
            height: 20px;
            padding: 2px 5px;
            cursor: pointer;

            .el-icon-caret-bottom{
              color: #24526e;
              float: right;
            }
          }
          &>ul{
            width: 100%;
            position: absolute;
            z-index: 99;
            cursor: pointer;
            li{
              height: 20px;
              border: 1px solid #24526e;
              width: 100%;
              border-top: 0;
              padding-left: 5px;
              img{
                padding-top: 4px;
              }
              &:hover{
                border: 1px solid #2e689e;
              }
            }
          }
        }
      }
    }

    .navItemBox {
      display: flex;
      justify-content: flex-start;
      height: 60px;
      align-items: center;
      color: #359ccc;
      font-size: 18px;

      .navItem {
        width: 150px;
        line-height: 60px;
        background: url('../images/header/line.png') no-repeat center right / auto;

        &:first-of-type {
          background: url('../images/header/line.png') no-repeat center left / auto, url('../images/header/line.png') no-repeat center right / auto;
        }

        &.itemLast {
          background: url('../images/header/line.png') no-repeat center left / auto;
        }

        &.itemActive {
          background: url('../images/header/btn_bg.png') top center / 100% 100%;
          color: #ffffff;
        }
      }

      .itemLast {
        background: none;
      }
    }
  }
}
</style>
<style lang="less">
@import "../styles/main";
@import "../styles/common";
@import url("../styles/header");

.func-set-dialog .el-dialog__header {
  padding: 0;
  background: transparent;
  height: 35px;
}
.betting-record-dialog,
.func-set-dialog {
  .el-dialog__body {
    .absolute;
    top: 0;
    padding: 0;
    width: 100%;
  }
}
.betting-record-dialog .el-dialog__header {
  .block;
  height: 40px;
}
.logo {
  .version-switch {
    vertical-align: -5px;
    margin-left: 30px;
    cursor: pointer;
  }
}
</style>
