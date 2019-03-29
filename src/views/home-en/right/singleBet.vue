<template>
  <div class="single-bet">
    <ul class="lement-title">
      <li :class="{'active': listIndex === 1}" @click="listIndex = 1">Single Bet</li>
      <li :class="{'active': listIndex === 2}" @click="listIndex = 2">Stack Bet</li>
    </ul>

    <div class="single-content" v-show="listIndex === 1">
      <article class="lement-box" v-for="(item, index) in [0, 1]" v-bind:key="index">
        <h1>
          GAL
          <i class="el-icon-close"></i>
        </h1>
        <div>
          <p>
            <img src="../../../images/home/right/i.png">比赛获胜者(总局)First Blood Team（Match 1)
            <span class="right">LOL</span>
          </p>
          <p>
            <b>GAL</b>
            <b>VS</b>
            <b>GS</b>
          </p>
          <p>TCL- Turkish Champion League - 
          2019 Winter Match</p>
          <div class="bsjg-box">
            <span>Bet Amount</span>
            <span class="dx">@6.80</span>
            <span>Win Amount</span>
          </div>
          <p class="betting-limit">
            Min Bet:
            <em>5RMB</em>
          </p>
          <p class="betting-limit">
            Max bet:
            <em>2,968RMB</em>
          </p>
        </div>
      </article>

      <div class="betting-btbox">
        <ul class="belt-list">
          <li>Single Bet：</li>
          <li>Bet</li>
        </ul>
        <p class="betting-limit">
          Total Bet：
          <em>9,999,999RMB</em>
        </p>
        <p class="betting-limit">
          Total Win：
          <em>9,999,999RMB</em>
        </p>
        <button class="betting-btn">Bet</button>
        <button class="all-del">Clear All</button>
        <a href class="auto-receive">
          Auto update payout rate
          <i class="el-icon-caret-bottom"></i>
        </a>
      </div>
    </div>

    <div class="string-content" v-show="listIndex === 2">
      <article class="lement-box" v-for="(item, index) in new Array(2)" v-bind:key="index">
        <h1>
          GAL
          <i class="el-icon-close"></i>
        </h1>
        <div>
          <div class="confirmed">@1.81</div>
          <p>
            <i></i>First Blood Team（Match 1)
            <span class="right">LOL</span>
          </p>
          <p>
            <b>GAL</b>
            <b>VS</b>
            <b>GS</b>
          </p>
          <p>TCL- Turkish Champion League - 
          2019 Winter Match</p>
        </div>
      </article>

      <article class="more-bet-type">
        <h1 class="clearfix cspn" @click="isMore = !isMore">
          More Bet type
          <i class="el-icon-question"></i>
          <i class="right mt-5 pr-10" :class="[isMore?'el-icon-arrow-up':'el-icon-arrow-down']"></i>
        </h1>
        <div v-show="isMore">
          <p>
            2 Stack 1 @
            <em class="fs-18">3.32</em>
          </p>
          <p class="mt-10">
            <a class="red-btn" href>Bet Amount</a>
            <b>X1</b>
          </p>
          <p class="mt-10">
            Max Bet：
            <em>999,999RMB</em>
            <em>200,000RMB</em>
          </p>
          <ul class="price-list">
            <li :class="{'active': priceIndex === 1}" @click="priceIndex = 1">+5</li>
            <li :class="{'active': priceIndex === 2}" @click="priceIndex = 2">+10</li>
            <li :class="{'active': priceIndex === 3}" @click="priceIndex = 3">+25</li>
            <li :class="{'active': priceIndex === 4}" @click="priceIndex = 4">+50</li>
            <li :class="{'active': priceIndex === 5}" @click="priceIndex = 5">+100</li>
            <li :class="{'active': priceIndex === 6}" @click="priceIndex = 6">+200</li>
          </ul>
          <p class="mt-10">
            <em>1 All Bet：</em>
          </p>
          <p class="mt-10">
            Total Bet：
            <em>9,999,999RMB</em>
          </p>
          <p>
            Total Win:
            <em>9,999,999RMB</em>
          </p>
          <button class="betting-btn">Bet</button>
          <button class="all-del">Clear All</button>
          <a href class="auto-receive">
            Auto update payout rate
            <i class="el-icon-caret-bottom"></i>
          </a>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listIndex: 1,
      priceIndex: 2,
      isMore: true
    };
  }
};
</script>
<style lang="less" scope>
@import "../../../styles/main";
@import "../../../styles/common";

.single-bet {
  color: rgba(255, 255, 255, 0.9);
  em {
    color: #dcaa38;
    font-weight: bold;
    .in-block;
  }

  .lement-title {
    .flex;
    & > li {
      flex: 1;
      .tx-ct;
      color: #1c4b77;
      font-size: 14px;
      cursor: pointer;
      line-height: 30px;

      &.active {
        color: #fff;
        background: url("../../../images/home/nav/zh-active.png") no-repeat
          bottom center;
        background-size: 100%;
      }
    }
  }
  .lement-box {
    background: #0e2b43;

    h1 {
      line-height: 25px;
      font-size: 16px;
      padding: 0 5px;
      background: #1c4b77;
      margin-top: 1px;

      i {
        float: right;
        margin-top: 4px;
      }
    }
    & > div {
      font-size: 14px;
      padding: 5px;

      p {
        margin-bottom: 10px;
      }
      img{
        margin-right: 5px;
        vertical-align: -2px;
      }
    }

    .bsjg-box {
      margin-bottom: 5px;
      width: 100%;
      .flex;
      .tx-ct;

      & > span {
        flex: 1;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: #163756;
        width: 33.33%;
      }
      .dx {
        background: #ca4345;
      }
    }
    .betting-limit {
      font-size: 16px;
      margin: 0;
      & > em {
        .in-block;
      }
    }
  }
  .string-content {
    .lement-box {
      .relative;

      .confirmed {
        position: absolute;
        top: -20px;
        left: 50%;
        height: 20px;
        margin-left: -25px;
        color: #fff;
        font-size: 12px;
        background: #01111e;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        .tx-ct;
        padding: 3px 10px;
        font-weight: bold;
      }
    }
    .more-bet-type {
      & > h1 {
        line-height: 25px;
        padding-left: 5px;
        font-size: 14px;
        background: #1c4b77;
      }
      & > div {
        padding: 5px;
        font-size: 14px;

        .red-btn {
          background: #bd3829;
          color: #fff;
          height: 25px;
          line-height: 25px;
          .tx-ct;
          font-size: 14px;
          padding: 5px 20px;
          margin: 5px 10px 10px 0;
        }
        .price-list {
          width: 100%;

          li {
            .in-block;
            width: 30%;
            line-height: 25px;
            border: 1px solid #407199;
            border-radius: 15px;
            margin-right: 2%;
            .tx-ct;
            color: #cfd0d4;
            font-weight: bold;
            margin-top: 10px;
            background: #152638;
            cursor: pointer;

            &.active {
              border-color: #e4b156;
              background: transparent;
              color: #e4b156;
            }
          }
        }
      }
    }
  }
  .betting-btn {
    background: url("../../../images/home/nav/qr-btn.png") no-repeat center
      center;
    width: 86%;
    height: 50px;
    margin: 10px auto;
    .block;
    background-size: 100% 100%;
    border: 0;
    color: #fff;
    font-size: 18px;
  }
  .all-del {
    background: transparent;
    border: 1px solid #47dbf4;
    color: #47dbf4;
    width: 80%;
    margin: 10px auto;
    line-height: 25px;
    .block;
  }
  .auto-receive {
    color: #fff;
    .block;
    .tx-ct;
    font-size: 12px;
    padding-bottom: 20px;
  }
  .betting-btbox {
    background: #0e2b43;

    .belt-list {
      .flex;
      margin-bottom: 10px;
      & > li {
        flex: 2;
        background: #1c4b77;
        padding-left: 5px;
        &:last-child {
          .tx-ct;
          flex: 1;
          border-left: 2px solid #072239;
        }
      }
    }
    .betting-limit {
      padding-left: 5px;
    }
  }
}
</style>
