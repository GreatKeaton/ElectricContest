<template>
  <div id="headerNav">
    <div class="center">
      <div class="nav">
        <div class="logo">
          <img src="../images/header/logo.png" alt>
          <img
            src="../images/home/right/diamond.png"
            class="version-switch" alt
            @click="routerTo('streamline', 'streamline')"
          >
        </div>
        <div class="setting" v-show="!isNotHeader">
          <div class="setItem pointer" @click="funcSetDialogVisible = true">功能设定</div>
          <div class="setItem pointer" @click="betRecordDialogVisible = true">投注记录</div>
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
      <ul class="navItemBox cspn" v-show="!isNotHeader">
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
      <functionSetting></functionSetting>
    </el-dialog>

    <el-dialog :visible.sync="betRecordDialogVisible" width="845px" class="betting-record-dialog">
      <betRecord></betRecord>
    </el-dialog>
  </div>
</template>

<script>
import functionSetting from '../components/functionSetting';
import betRecord from '../components/betRecord';
export default {
  data() {
    return {
      activeName: "",
      betRecordDialogVisible: false,
      funcSetDialogVisible: false,
      routhPath: this.$route.name,
      isNotHeader: this.routhPath === 'streamline' || this.routhPath === 'streamlineEn',
      isQueryLang: false,
      lang: this.$route.params.order || "homeEn",
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
      if (name === "home" || name === "homeEn"){
        localStorage.setItem('routeHeader', name);
        this.lang = name;
      }else if(name === 'streamline' || name === 'streamlineEn'){
        localStorage.setItem('routeHeader', name);
      }
    }
  },
  watch: {
    $route(to, from) {
      this.activeName = to.name;
      // this.isNotHeader = this.activeName === 'streamline' || this.activeName === 'streamlineEn';
      if (to.name === "home" || to.name === "homeEn"){
        this.lang = to.name;
      }
    }
  },
  components: {
    functionSetting,
    betRecord
  }
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
