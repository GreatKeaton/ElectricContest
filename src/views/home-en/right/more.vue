<template>
  <div class="more">
    <dl>
      <dt class="title">
        <i class="el-icon-arrow-left"></i>Options selection
      </dt>
      <dd>
        <dl>
          <dt class="clearfix">Options selection（{{functionLabelList.length}}/5）
            <span class="right">drag</span>
          </dt>
          <dd>
            <span v-for="(item, index) in functionLabelList" v-bind:key="index">
              {{item}}
              <i class="el-icon-error" @click="functionbind(item, index)"></i>
            </span>
            <span class="append">Add</span>
          </dd>
        </dl>
        <dl>
          <dt>More Categories</dt>
          <dd>
            <span v-for="(item, index) in moreClassifyLabelList" v-bind:key="index">
              {{item}}
              <i class="el-icon-circle-plus" @click="moreClassify(item, index)"></i>
            </span>
          </dd>
        </dl>
        <div class="btn-group">
          <button class="active">Done</button>
          <button>Cancel</button>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listIndex: 1,
      functionLabelList: ["Bet List", "Chatroom", "Share Bet", "Match"],
      moreClassifyLabelList: ["Formation", "Date"]
    };
  },
  methods: {
    moreClassify: function(data, ind) {
      let fll = this.functionLabelList || [];
      if(fll.length < 5){
        fll.push(data);
        Array.from(new Set(this.functionLabelList));
        this.moreClassifyLabelList = this.objectEach(
          this.moreClassifyLabelList,
          ind
        );
      }else{
        this.$message({
          message: '最多选择5个功能项',
          type: 'warning'
        });
      }
    },
    functionbind: function(data, ind) {
      this.moreClassifyLabelList.push(data);
      this.functionLabelList = this.objectEach(this.functionLabelList, ind);
    },
    objectEach: function(data, ind) {
      let list = [];
      data.forEach((v, k) => {
        if (k === ind) return;
        list.push(v);
      });
      return list;
    }
  }
};
</script>
<style lang="less" scope>
@import "../../../styles/main";
@import "../../../styles/common";
.more {
  &::before {
    background: none;
  }

  dt {
    color: #fff;
    padding-left: 5px;
    font-size: 14px;
    line-height: 30px;
    padding-top: 15px;

    & > span {
      font-size: 12px;
      margin-right: 15px;
    }
  }
  .title {
    font-size: 18px;
    padding: 5px;
    background: -prefix-linear-zgradient(top, #001529, #014771);
    background: linear-gradient(to bottom, #001529, #014771);
    i {
      padding-right: 5px;
    }
  }
  dd {
    margin-bottom: 15px;
    & > span {
      background: #12507b;
      width: 28%;
      margin-right: 5%;
      font-size: 14px;
      line-height: 30px;
      border-radius: 5px;
      color: #fff;
      margin-top: 10px;
      .tx-ct;
      .in-block;
      .relative;

      i {
        .absolute;
        top: -5px;
        width: 10px;
        height: 10px;
        right: -5px;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .append {
      margin-left: -5px;
      background: #0d2c42;
      color: #75a7ca;
    }
  }
  .btn-group {
    .flex;
    button {
      flex: 1;
      margin: 20px 10px 20px 0;
      line-height: 40px;
      background: #014880;
      color: #a1b7ce;
      border-width: 0;
      font-size: 14px;
      cursor: pointer;
      outline: none;

      &.active {
        color: #fff;
        background: url("../../../images/home/nav/zh-active.png") no-repeat
          bottom center;
        background-size: 100%;
      }
    }
  }
}
</style>
