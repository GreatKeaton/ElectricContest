<template>
  <div class="betting-record">
    <h1>
      <i class="el-icon-menu"></i>投注记录
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
          交易类型：
          <select name id style="width: 60px;">
            <option value>全部</option>
          </select>
          <div class="jydh-input">
            <a href="javascript:;">交易单号</a>
            <input type="text" placeholder="请输入您的交易单号">
          </div>交易时间：
          <select name id></select>
          至
          <select name id></select>
          <a href="javascript:;" class="query-list-btn">查询</a>
        </div>
        <div class="query-result">
          <div>
            游戏类型：
            <select name id></select>
            联赛筛选：
            <select name id></select>
          </div>
          <table border="0">
            <thead>
              <th>编号</th>
              <th>游戏类型</th>
              <th>投注详情</th>
              <th>投注联赛</th>
              <th>投注选项</th>
              <th>投注类型</th>
              <th>赔率</th>
              <th>总投注</th>
              <th>赢/输</th>
              <th>状态</th>
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
                  <p>特技竞标赛</p>
                  <p>（LOL）</p>
                  <p>(1胜一场)</p>
                </td>
                <td>
                  chaos Esports Club@全场0-1
                  Alliance v Chaos Esports Club
                </td>
                <td>比赛报名</td>
                <td>
                  <p>电竞大师赛</p>
                  <p>第一场</p>
                  <p>比赛报名</p>
                </td>
                <td>确认</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">本页总计</td>
                <td colspan="5"></td>
                <td>20</td>
                <td>0.00</td>
                <td></td>
              </tr>
              <tr>
                <td colspan="2">总计</td>
                <td colspan="5"></td>
                <td>20</td>
                <td>0.00</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="list-page">
          每页显示：20
          <i class="el-icon-d-arrow-left"></i>
          <i class="el-icon-arrow-left"></i>
          1/2
          <i class="el-icon-d-arrow-right"></i>
          <i class="el-icon-arrow-right"></i>
          共计：2
        </div>
      </div>
      <!-- 活动记录 -->
      <div class="record-activity" v-show="betSetIndex === 1">
        <div class="query-criteria">
          注单状态：
          <select name id style="width: 100px;">
            <option value>已结算注单</option>
          </select>
          注单号：
          <select name id style="width: 100px;">
            <option value>电竞大师赛</option>
          </select>
          <img src="../images/home/dialog/data.png" class="mt-10" alt>
          下注时间：
          <select name id></select>
          至
          <select name id></select>
          <a href="javascript:;" class="query-list-btn">查询</a>
        </div>
        <div class="query-result">
          <div class="list-data">
            <table border="0">
              <thead>
                <tr>
                  <th>编号</th>
                  <th>活动类型</th>
                  <th>投注详情</th>
                  <th>投注联赛</th>
                  <th>投注选项</th>
                  <th>投注类型</th>
                  <th>购率</th>
                  <th>总投注</th>
                  <th>赢/输</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>电竞大师赛</td>
                  <td>
                    <p>2019年1月21日</p>
                    <p>14:59:01</p>
                    <p>545454545</p>
                  </td>
                  <td>
                    <p>特技竞标赛</p>
                    <p>（LOL）</p>
                    <p>(1胜一场)</p>
                  </td>
                  <td>
                    chaos Esports Club@全场0-1
                    Alliance v Chaos Esports Club
                  </td>
                  <td>欧洲盘</td>
                  <td>2.25</td>
                  <td>10</td>
                  <td>-</td>
                  <td>确认</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2">本页总计</td>
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
            每页显示：20
            <i class="el-icon-d-arrow-left"></i>
            <i class="el-icon-arrow-left"></i>
            1/2
            <i class="el-icon-d-arrow-right"></i>
            <i class="el-icon-arrow-right"></i>
            共计：2
          </div>
        </div>
      </div>
      <!-- 积分查询 -->
      <div v-show="betSetIndex === 2" class="query-integral">
        <div class="query-criteria">
          交易类型：
          <select name id style="width: 60px;">
            <option value>全部</option>
          </select>
          <div class="jydh-input">
            <a href="javascript:;">交易单号</a>
            <input type="text" placeholder="请输入您的交易单号">
          </div>
          <img src="../images/home/dialog/data.png" alt>交易时间：
          <select name id></select>
          至
          <select name id></select>
          <a href="javascript:;" class="query-list-btn" style="width: 80px;">查询</a>
        </div>
        <div class="query-result">
          <div class="list-data">
            <table border="0">
              <thead>
                <th>编号</th>
                <th>日期</th>
                <th>收入积分</th>
                <th>支出积分</th>
                <th>剩余积分</th>
                <th>收支类型</th>
                <th>备注</th>
                <th>状态</th>
              </thead>
              <tbody>
                <td>01</td>
                <td>
                  <p>2018年11月25日</p>
                  <p>10:04:17</p>
                </td>
                <td>-</td>
                <td>100</td>
                <td>520</td>
                <td>比赛报名</td>
                <td>
                  <p>电竞大师赛</p>
                  <p>第一场</p>
                  <p>比赛报名</p>
                </td>
                <td>确认</td>
              </tbody>
              <tfoot>
                <td colspan="2">本页总计</td>
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
            每页显示：20
            <i class="el-icon-d-arrow-left"></i>
            <i class="el-icon-arrow-left"></i>
            1/2
            <i class="el-icon-d-arrow-right"></i>
            <i class="el-icon-arrow-right"></i>
            共计：2
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
      bettingSetList: ["下注记录", "活动记录", "积分查询"]
    };
  },
  methods: {}
};
</script>

<style lang="less">
@import "../styles/main";
@import "../styles/common";
@import "../styles/header";
</style>
