<template>
  <div class="sun-dry-area relative" @click="isPriceSet=false;">
    <div class="chat-room" v-show="!isNotes">
      <div class="chat-content">
        <dl v-for="(item,index) in listDate" v-bind:key="index">
          <dt>{{item.time}}</dt>
          <dd>
            <em :class="'grade'+item.grade" @click="isFollowBind(item, index)"><i :class="{'active': item.follow}"></i></em>
            <span class="user-name">{{item.username}}:</span>
            <span class="item-content cspn" @click="bsBind(item)">{{item.content}}</span>
          </dd>
        </dl>
      </div>
      <div class="chat-opeater">
        <div class="query-inp relative">
          <span class="user-query" @click="isQueryUser = !isQueryUser">
            用户
            <i :class="[isQueryUser ? 'el-icon-caret-top' : 'el-icon-caret-bottom']"></i>
            <ul class="query-option" v-show="isQueryUser">
              <li>投注内容</li>
              <li>成就等级</li>
              <li>用户</li>
            </ul>
          </span>
          <input type="text" placeholder="请输入搜索内容">
          <span class="search">
            <i class="el-icon-search"></i>
          </span>
        </div>
        <div class="btn-group">
          <button class="follow-btn" @click="isFollow = !isFollow">
            我的关注
            <i :class="[isFollow ? 'el-icon-caret-bottom' : 'el-icon-caret-top']"></i>
            <ul class="query-option" v-show="isFollow">
              <li>已关注</li>
              <li>未关注</li>
            </ul>
          </button>
          <button class="dry-btn" @click="isNotes = true; isNotesMsg= true;">
            <i></i>晒单
          </button>
        </div>
      </div>
    </div>
    <div class="my-notes" v-show="isNotes">
      <h1>我的注单</h1>
      <h2>2019 LCK春季赛</h2>
      <i class="close-notes el-icon-error" @click="isNotes = false"></i>
      <div class="area-list">
        <dl class="lement-box" v-for="(item, index) in new Array(10)" v-bind:key="index">
          <dt @click="photoBind(index)">GAL</dt>
          <dd>
            <div class="confirmed">@ 1.81</div>
            <p>
              <i></i>比赛获胜者(总局)
              <span class="right">LOL</span>
            </p>
            <p>
              <b>GAL</b>
              <b>VS</b>
              <b>GS</b>
            </p>
            <p>TCL-土耳其冠军联赛-2019冬季赛</p>
          </dd>
        </dl>
      </div>
    </div>

    <div class="msg-box" v-show="isMsgbox">
      <!-- 荣耀等级详情 -->
      <div class="user-detail tx-ct" v-show="isUserLevel">
        <i class="el-icon-close right cspn" @click="isMsgbox=false;isUserLevel=false;"></i>
        <img src="../../../images/home/right/user-icon.jpg" alt>
        <p>
          <span class="c-yellow">皇帝巡街</span>
          <span class="lift">108</span>
        </p>
        <p class="level">
          <img src="../../../images/home/right/user-level.jpg" alt>
          <span>胜率：40%</span>
        </p>
        <p>粉丝：120</p>
        <a href="javascript:;" class="follow-btn" @click="followBind">关注</a>
      </div>
      <!-- 是否确认跟投 -->
      <div class="heel-throw" v-show="isHeelThrow">
        <div class="title">
          <h1>确认跟投吗？</h1>
          <b>2019LCK 春季赛</b>
        </div>
        <ul>
          <li>玩家昵称：{{heelThrowData.username}}</li>
          <li>
            玩家成就：
            <i :class="'grade'+heelThrowData.grade"></i>
          </li>
          <li>玩家胜率：{{heelThrowData.username}}</li>
          <li>玩家赛事：{{heelThrowData.username}}</li>
          <li>
            玩家内容：
            <span class="item-content">{{heelThrowData.content}}</span>
          </li>
          <li>投注金额：{{heelThrowData.price || '999'}}</li>
          <li>投注金额：
            <span v-show="!isPriceSet" v-on:click.stop="isPriceSet = !isPriceSet">{{heelThrowData.priceBet || '999'}}</span>
            <input class="price-input" type="text" v-show="isPriceSet" v-model="heelThrowData.priceBet" v-on:click.stop="" >
          </li>
        </ul>
        <div class="group-btn">
          <button>确认跟投</button>
          <button @click="isMsgbox=false;isHeelThrow=false;">取消</button>
        </div>
      </div>
      <!-- 是否确认晒单 -->
      <div class="msg-content" v-show="isNotesMsg">
        <h1>确认晒出</h1>
        <p>Expert 比赛获胜者608</p>
        <div class="btn-group">
          <button>确认</button>
          <button @click="isMsgbox=false;isNotesMsg=false;">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listIndex: 1,
      isMsgbox: false,
      isNotes: false,
      isFollow: false,
      isQueryUser: false,
      isUserLevel: false,
      isNotesMsg: false,
      isHeelThrow: false,
      heelThrowData: {},
      isPriceSet: false,
      listDate: [
        {
          time: "2019-02-03 09:50",
          grade: 1,
          username: "风吹裤裆飘天上",
          price: 1000,
          content: "Expert 比赛获胜 6.8"
        },
        {
          time: "2019-02-03 09:52",
          grade: 2,
          username: "少先队员",
          content: "Expert 比赛获胜 6.8"
        },
        {
          time: "2019-02-03 09:53",
          grade: 4,
          username: "天空吹来五个字",
          content: "Expert 比赛获胜 6.8"
        },
        {
          time: "2019-02-03 09:56",
          grade: 3,
          username: "皇帝寻街",
          content: "Expert 比赛获胜 6.8"
        }
      ]
    };
  },
  computed: {},
  methods: {
    isFollowBool: function(bool = false){
      this.isMsgbox = bool;
      this.isUserLevel = bool;
    },
    isFollowBind: function(data, index) {
      this.isFollowBool(true);
      this.listDate[index].follow = true;
    },
    followBind: function(){
      this.isFollowBool();
    },
    photoBind: function(index) {
      this.isMsgbox = true;
    },
    bsBind: function(item) {
      this.heelThrowData = item;
      this.isHeelThrow = true;
      this.isMsgbox = true;
    }
  }
};
</script>
<style lang="less" scope>
@import "../../../styles/main";
@import "../../../styles/common";
@import "../../../styles/share";
* {
  margin: 0;
  padding: 0;
}
.sun-dry-area {
  height: calc(100% - 50px) !important;
  .item-content {
    background: #1f6098;
    font-size: 12px;
    padding: 0 5px;
    .in-block;
  }
  .chat-room {
    height: 100% !important;
    // min-height: 724px;
    .chat-content {
      background: #07111b;
      padding: 5px;
      dl {
        color: #fff;
        margin-bottom: 20px;
        font-size: 12px;
        & > dt {
          color: #b2b7bd;
          margin-bottom: 5px;
        }
        & > dd {
          line-height: 25px;
          em {
          font-size: 12px;
          .in-block;
          padding: 0 10px;
          border-radius: 6px;
          .relative;
          .cspn;

          &:before {
            content: "";
            width: 100%;
            .tx-ct;
            .block;
            font-style: normal;
          }

          &>i.active{
            width: 10px;
            height: 10px;
            .in-block;
            background: url('../../../images/home/right/love.png') no-repeat;
            .absolute;
            top: 7px;
            left: -4px;
          }
          }
          .user-name {
            color: #c7a254;
            font-weight: bold;
          }
        }
      }
      .grade1 {
        background: #2f8788;
        &::before {
          content: "至尊星耀";
        }
      }
      .grade2 {
        background: #86302f;
        &::before {
          content: "最强王者";
        }
      }
      .grade3 {
        background: #723088;
        &::before {
          content: "超凡大师";
        }
      }
      .grade4 {
        background: #6b5e70;
        &::before {
          content: "青铜五";
        }
      }
    }
    .chat-opeater {
      background: #153655;
      width: 100%;
      height: 120px;
      position: absolute;
      bottom: 0;
      right: 0;
      border-top: 2px solid #49769f;

      .query-option {
        .absolute;
        top: -60px;
        left: 0;
        background: #12314e;
        color: #95bbdf;
        width: 100px;
        line-height: 30px;
        li {
          &:hover,
          &.active {
            background: #286aa7;
          }
        }
      }

      .query-inp {
        .user-query {
          color: #fff;
          background: #286aa7;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          font-size: 14px;
          padding: 5px;
          margin-left: 10px;
          cursor: pointer;
          .tx-ct;

          .query-option {
            top: -90px;
            left: 10px;
            width: 80px;
          }
        }
        & > input {
          background: #091a2c;
          border: 0;
          height: 30px;
          margin-left: -5px;
          padding-left: 5px;
          width: 175px;
          outline: none;
          color: #fff;
        }
        .search {
          border-radius: 5px;
          width: 30px;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
          .in-block;
          .tx-ct;
          background: #49769f;
          color: #fff;
          margin-left: -5px;
          margin-top: -10px;
        }
      }
      .btn-group {
        margin-top: 20px;
        .tx-ct;
        button {
          width: 35%;
          height: 30px;
          line-height: 30px;
          border-radius: 15px;
          border: 0;
          color: #fff;
          outline: none;
          .cspn;

          &.follow-btn {
            background: #286aa7;
            .relative;
          }

          &.dry-btn {
            margin-left: 15px;
            background: #091a2c;
          }
        }
      }
    }
  }
}
</style>
