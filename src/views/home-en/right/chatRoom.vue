<template>
  <div class="chat-room relative" @click="isPriceSet=false;">
    <div class="chat-content">
      <dl v-for="(item,index) in listDate" v-bind:key="index">
        <dt>{{item.time}}</dt>
        <dd>
          <i :class="'grade'+item.grade" @click="isMsgbox=true;isUserLevel=true"></i>
          <span class="user-name">{{item.username}}:</span>{{isUserLevel}}
          <span class="item-content">{{item.content}}</span>
        </dd>
      </dl>
    </div>
    <div class="chat-opeater">
      <div>
        <span class="user-query">Master</span>
        <span class="icon-group">
          <img
            src="../../../images/home/right/icon5.png"
            alt
            @click="isNotes = true;"
          >
          <img
            src="../../../images/home/right/icon6.png"
            alt
            @click="isPresentationPoints = !isPresentationPoints"
          >
          <img src="../../../images/home/right/icon7.png" alt>
          <img src="../../../images/home/right/icon8.png" alt>
          <img src="../../../images/home/right/smile.png" alt>
        </span>
      </div>
      <div class="report-input">
        <input type="text" placeholder="Let's chat">
        <span class="report">Enter</span>
      </div>
    </div>

    <article class="presentation-points" v-show="isPresentationPoints">
      <h1>
        Giving bonus points
        <i class="el-icon-close right cspn" @click="isPresentationPoints = false"></i>
      </h1>
      <div>
        <div class="bx">
          <img src="../../../images/home/right/treasure-box.png" alt>
          <span class="c-yellow right">Send out your points and share your joy!</span>
        </div>
        <div class="point-mode">
          <p>Presentation:</p>
          <div class="query-mode">
            <div>
              <input type="radio">
              <b>Sunshine</b>
              <span>(distribution)</span>
            </div>
            <div>
              <input type="radio">
              <b>Lucky</b>
              <span>(random)</span>
            </div>
          </div>
          <p>
            !Giving
            <em>50</em>Trigger Big Gift Special Effects
          </p>
          <p>
            !Giving
            <em>300</em>triggers world banners
          </p>
          <div class="point-inp">
            <input type="text" name id>
            <a href="javascript:;">give</a>
          </div>
          <ul class="flex">
            <li
              :class="{'active': priceNum === item}"
              @click="priceNum = item"
              v-for="(item, index) in priceNumArr"
              v-bind:key="index"
            >{{item}}</li>
          </ul>
        </div>
      </div>
    </article>

    <div class="my-notes" v-show="isNotes">
      <h1>My note</h1>
      <h2>2019 LCK Spring</h2>
      <i class="close-notes el-icon-error" @click="isNotes = false"></i>
      <div class="area-list">
        <dl class="lement-box" v-for="(item, index) in new Array(10)" v-bind:key="index">
          <dt @click="isMsgbox = true; isNotesMsg = true;">GAL</dt>
          <dd>
            <div class="confirmed">@ 1.81</div>
            <p>
              <i></i>Winner of the competition
              <span class="right">LOL</span>
            </p>
            <p>
              <b>GAL</b>
              <b>VS</b>
              <b>GS</b>
            </p>
            <p>TCL-Turkey Champions League-2019 Winter Tournament</p>
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
          <span class="c-yellow">Emperor patrol</span>
          <span class="lift">108</span>
        </p>
        <p class="level">
          <img src="../../../images/home/right/user-level.jpg" alt>
          <span>Win rate：40%</span>
        </p>
        <p>Fan：120</p>
        <a href="javascript:;" class="follow-btn" @click="isMsgbox=false;isUserLevel=false;">Follow</a>
      </div>
      <!-- 是否确认跟投 -->
      <div class="heel-throw" v-show="isHeelThrow">
        <div class="title">
          <h1>Confirm with vote?？</h1>
          <b>2019LCK Spring</b>
        </div>
        <ul>
          <li>Player nickname：{{heelThrowData.username}}</li>
          <li>
            Player achievement：
            <i :class="'grade'+heelThrowData.grade"></i>
          </li>
          <li>Player win rate：{{heelThrowData.username}}</li>
          <li>Player event：{{heelThrowData.username}}</li>
          <li>
            Player content：
            <span class="item-content">{{heelThrowData.content}}</span>
          </li>
          <li>Bet amount：{{heelThrowData.price || '999'}}</li>
          <li>Bet amount：
            <span v-show="!isPriceSet" v-on:click.stop="isPriceSet = !isPriceSet">{{heelThrowData.priceBet || '999'}}</span>
            <input class="price-input" type="text" v-show="isPriceSet" v-model="heelThrowData.priceBet" v-on:click.stop="" >
          </li>
        </ul>
        <div class="group-btn">
          <button>Confirmation?</button>
          <button @click="isMsgbox=false;isHeelThrow=false;">cancel</button>
        </div>
      </div>
      <!-- 是否确认晒单 -->
      <div class="msg-content" v-show="isNotesMsg">
        <h1>Confirm the drying out</h1>
        <p>Expert Winner of the competition 608</p>
        <div class="btn-group">
          <button>confirm</button>
          <button @click="isMsgbox=false;isNotesMsg=false;">cancel</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isPresentationPoints: false,
      priceNumArr: [1, 10, 66, 1314, 9999],
      priceNum: 66,
      isMsgbox: false,
      isNotes: false,
      isFollow: false,
      isQueryUser: false,
      isUserLevel: false,
      isNotesMsg: false,
      isHeelThrow: false,
      isPriceSet: false,
      heelThrowData: {},
      listDate: [
        {
          time: "2019-02-03 09:50",
          grade: 1,
          username: "Flying in the sky",
          content:
            "Lorem ipsum lapu Lorem ipsum lapu lorem ipsum lapu Lorem ipsum"
        },
        {
          time: "2019-02-03 09:52",
          grade: 2,
          username: "Expert T",
          content:
            "Lorem ipsum lapu Lorem ipsum lapu lorem ipsum lapu Lorem ipsum"
        },
        {
          time: "2019-02-03 09:53",
          grade: 4,
          username: "Hurricane",
          content:
            "Lorem ipsum lapu Lorem ipsum lapu lorem ipsum lapu Lorem ipsum"
        },
        {
          time: "2019-02-03 09:56",
          grade: 3,
          username: "King",
          content:
            "Lorem ipsum lapu Lorem ipsum lapu lorem ipsum lapu Lorem ipsum"
        }
      ]
    };
  },
  methods: {
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
.chat-room {
  height: 724px;
  .chat-content {
    background: #07111b;
    padding: 5px;
    dl {
      color: #fff;
      margin-bottom: 10px;
      font-size: 12px;
      & > dt {
        color: #b2b7bd;
        margin-bottom: 5px;
      }
      & > dd {
        line-height: 25px;
        i {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          width: 60px;
          .in-block;
          border-radius: 6px;

          &:before {
            content: "";
            width: 100%;
            .tx-ct;
            .block;
            font-style: normal;
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
        content: "Master";
      }
    }
    .grade2 {
      background: #86302f;
      &::before {
        content: "Expert";
      }
    }
    .grade3 {
      background: #723088;
      &::before {
        content: "Bronse";
      }
    }
    .grade4 {
      background: #6b5e70;
      &::before {
        content: "Mystic";
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
    padding-top: 20px;

    .user-query {
      color: #fff;
      background: #286aa7;
      border-radius: 5px;
      font-size: 14px;
      padding: 5px;
      margin-left: 10px;
      cursor: pointer;
      .tx-ct;
    }
    .icon-group {
      color: #fff;
      .right;
      margin-right: 15px;
      img {
        .cspn;
        padding-right: 5px;
      }
    }

    .report-input {
      margin-top: 15px;
      & > input {
        background: #091a2c;
        border: 0;
        height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        width: 195px;
        outline: none;
        color: #fff;
      }
      .report {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 60px;
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
  }
  .presentation-points {
    .absolute;
    bottom: 135px;
    width: 100%;
    background: #0f233b;

    h1 {
      background: #1c4b77;
      color: #fff;
      padding-left: 15px;
      font-weight: 200;
      font-size: 18px;
      line-height: 35px;

      .el-icon-close {
        padding-top: 8px;
        padding-right: 10px;
        font-weight: bold;
      }
    }
    & > div {
      padding-top: 15px;
      .bx {
        & > img {
          width: 80px;
          margin-left: 10px;
        }
        .c-yellow {
          color: #ebe859;
          font-size: 12px;
          width: 180px;
          line-height: 20px;
          padding-top: 15px;
        }
      }
      .point-mode {
        background: #102b46;
        padding-top: 10px;
        color: #fff;
        padding-left: 15px;
        padding-right: 15px;

        .point-inp {
          .relative;
          input {
            background: #08101d;
            height: 30px;
            width: 100%;
            color: #fff;
            border-color: #08101d;
          }
          a {
            background: #247fd0;
            width: 50px;
            height: 30px;
            line-height: 30px;
            border-radius: 5px;
            color: #fff;
            font-size: 14px;
            .tx-ct;
            .in-block;
            .absolute;
            right: 0;
            top: 0;
          }
        }

        .query-mode {
          .flex;
          margin-top: 10px;
          & > div {
            flex: 1;
            margin-left: 10px;
            margin-right: 10px;

            & > input {
              height: 10px;
            }
            & > span {
              .block;
              font-size: 12px;
              padding-left: 20px;
              padding-top: -5px;
            }
          }
          & + p {
            font-size: 12px;
            margin-top: 10px;
            line-height: 25px;
            em {
              color: #ebe859;
              padding: 0 5px;
            }
            & + p {
              margin-bottom: 10px;
              font-size: 12px;
              em {
                color: #ebe859;
                padding: 0 5px;
              }
            }
          }
        }

        & > ul {
          padding: 15px 0;
          li {
            flex: 1;
            border: 1px solid #fff;
            padding: 5px 10px;
            .tx-ct;
            margin-right: 5px;
            margin-left: 5px;
            border-radius: 5px;
            font-size: 12px;
            .cspn;

            &.active {
              border-color: #3d82bb;
              background: #3d82bb;
            }
          }
        }
      }
    }
  }
  .my-notes{
    .absolute;
    top: 0;
    left: 0;
  }
}
</style>
