<template>
  <div id="headerNav">
    <div class="center">
      <div class="nav">
        <div class="logo">
          <img src="../images/header/logo.png" alt>
          <img
            src="../images/home/right/diamond.png"
            class="version-switch"
            alt
            v-show="routhPath !== 'streamline'"
            @click="routerTo('streamline', 'streamline')"
          >
          <img
            src="../images/home/right/diamond-2.png"
            class="version-switch"
            alt
            v-show="routhPath === 'streamline'"
            @click="routerTo('home', 'home')"
          >
        </div>
        <div class="setting">
          <div class="setItem pointer" @click="funcSetDialogVisible = true">功能设定</div>
          <div class="setItem pointer" @click="betRecordDialogVisible = true">投注记录</div>
          <select
            name
            id
            class="langu-change"
            v-model="language"
            @change="routerTo(language, language)"
          >
            <option value="home">中文</option>
            <option value="homeEn">英文</option>
          </select>
        </div>
      </div>
      <ul class="navItemBox cspn">
        <li
          v-for="(item,index) in list"
          :key="index"
          class="navItem textCen"
          :class="{itemActive:(item.name === activeName),itemLast:list[index+1] && list[index+1].name === activeName}"
        >
          <div @click="routerTo(index,item.name)">{{item.value}}</div>
        </li>
      </ul>
    </div>

    <el-dialog class="func-set-dialog" :visible.sync="funcSetDialogVisible" width="523.5px">
      <div class="function-setting">
        <h1>
          <i class="el-icon-menu"></i>功能设定
        </h1>
        <div>
          <ul class="query-set">
            <li
              class="preference"
              :class="{'active': funcSetIndex === 1}"
              @click="funcSetIndex = 1"
            >偏好设定</li>
            <li
              class="calculator"
              :class="{'active': funcSetIndex === 2}"
              @click="funcSetIndex = 2"
            >过关计算器</li>
          </ul>
          <div class="preference" v-show="funcSetIndex === 1">
            <ul>
              <li>
                <span>主题背景：</span>
                <select name id></select>
              </li>
              <li>
                <span>首选盘口：</span>
                <select name id></select>
              </li>
              <li>
                <span>赔率变化：</span>
                <select name id></select>
              </li>
              <li>
                <span>现场提示：</span>
                <select name id></select>
              </li>
              <li>
                <span>水位：</span>
                <select name id></select>
              </li>
              <li>
                <span>默认语言：</span>
                <select name id></select>
              </li>
              <li>
                <span>默认投注金额：</span>
                <select name id></select>
              </li>
              <li>
                <span>快速投注：</span>
                <div>
                  <input type="radio">
                  默认投注金额
                </div>
              </li>
              <li>
                <span></span>
                <div>
                  <input type="radio">
                  投注时输入金额
                </div>
              </li>
              <li>
                <span>快捷金额设置：</span>
                <div>默认设置</div>
              </li>
            </ul>
            <button class="blue-btn">确认修改</button>
          </div>
          <div class="calculator" v-show="funcSetIndex === 2">
            <select name id>
              <option value>2/3</option>
            </select>
            <input type="text" value="100">
            <div class="all">
              <span>全赢</span>
              <span>全输</span>
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
                组合数
                <span>3</span>
              </p>
              <p>
                没注金额
                <span class="c-yellow">33.33</span>
              </p>
              <p>
                总彩金
                <span class="c-yellow">154.33</span>
              </p>
            </div>
            <button class="blue-btn reset-btn">重置</button>
          </div>
        </div>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="betRecordDialogVisible" width="845px" class="betting-record-dialog">
      <section class="betting-record">
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
      bettingSetList: ["下注记录", "活动记录", "积分查询"],
      betSetIndex: 0,
      routhPath: this.$route.name,
      language: this.$route.params.order || "home",
      list: [
        {
          value: "赛事",
          url: "/home",
          name: "home"
        },
        {
          value: "竞猜活动",
          url: "/quiz",
          name: "quiz"
        },
        {
          value: "数据中心",
          url: "/datacenter",
          name: "datacenter"
        },
        {
          value: "赛事新闻",
          url: "/news",
          name: "news"
        },
        {
          value: "情报攻略",
          url: "/strategy",
          name: "strategy"
        },
        {
          value: "玩法规则",
          url: "/rules",
          name: "rules"
        },
        {
          value: "排行成就榜",
          url: "/ranking",
          name: "ranking"
        },
        {
          value: "商城",
          url: "/mall",
          name: "mall"
        },
        {
          value: "视频中心",
          url: "/videos",
          name: "videos"
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
      if (index === "home" || index === "homeEn"){
        localStorage.setItem('routeHeader', index);
         this.language = false;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.activeName = to.name;
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
        }

        .langu-change {
          border-color: gray;
          background: transparent;
          color: #fff;
          cursor: pointer;
          outline: none;

          option {
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background-color: rgba(3, 14, 8, 0.8);
          }

          option:hover {
            background-color: #1E90FF;
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
