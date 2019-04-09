<template>
  <div class="betting-record">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      betSetIndex: 0,
      bettingSetList: ["Bet record", "Activity record", "Point query"],
    };
  },
  methods: {}
};
</script>

<style lang="less">
@import "../../styles/main";
@import "../../styles/common";
@import "../../styles/header";
</style>
