<template>
  <div class="home-left">
    <ul class="main-list">
      <li
        v-for="(item, index) in gameList"
        :key="index"
        :class="[listIndex === index ? item.css + ' active' : item.css]"
        v-on:click.stop="listBind(index)"
      >
        <span>{{item.name}}</span>

        <!-- <ul class="list-2" v-show="listIndex === index"> -->
        <ul class="list-2">
          <li
            v-for="(item2, index2) in item.children"
            :key="index2"
            :class="[listIndex3 === index2 ? item2.css + ' active' : item2.css]"
            v-on:click.stop="listBind3(index2)"
          >
            <span>
              {{item2.name}}
              <em>{{item2.num}}</em>
            </span>

            <ul class="list-3" v-show="listIndex3 === index2">
              <li
                v-for="(item3, index3) in item2.children"
                :key="index3"
                :class="{'active': listIndex4 === index3}"
                v-on:click.stop="listIndex4 = index3"
              >
                {{item3.name}}
                <em>{{item3.num}}</em>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="dzym" v-show="listIndex === 'zdy'">
        <dl>
          <dt class="title">定制我的专属页面</dt>
          <dd>
            <dl>
              <dt>功能选择栏</dt>
              <dd>
                <span v-for="(item, index) in functionList" :key="index">
                  {{item.name}}
                  <i class="el-icon-error" @click="functionbind(item, index)"></i>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>更多分类</dt>
              <dd>
                <span v-for="(item, index) in moreClassifyLabelList" :key="index">
                  {{item.name}}
                  <i class="el-icon-circle-plus" @click="moreClassify(item, index)"></i>
                </span>
              </dd>
            </dl>
            <div class="btn-group">
              <button class="active" @click="doneAdd">完成</button>
              <button @click="listIndex = false">取消</button>
            </div>
          </dd>
        </dl>
      </li>
      <li class="zdy" :class="{'active': listIndex === 7}" v-on:click.stop="listBind('zdy')">
        <span>自定义运动类型</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listIndex: 1,
      listIndex2: 1,
      listIndex3: 1,
      listIndex4: 2,
      moreClassifyLabelList: JSON.parse(localStorage.getItem("moreList")) || [
        { name: "热门推荐", css: "like" },
        { name: "今日排行", css: "like" },
        { name: "英雄联盟", css: "like" },
        { name: "DUTA2", css: "like" },
        { name: "王者荣耀", css: "like" },
        { name: "绝地求生", css: "like" }
      ],
      functionList: [],
      gameList: JSON.parse(localStorage.getItem("gameList")) || [
        {
          name: "滚球",
          css: "gq",
          children: [
            {
              name: "英雄联盟",
              num: 49,
              children: [{ name: "LCK", num: 6 }, { name: "LGK", num: 1 }],
              css: "yxlm"
            },
            { name: "王者荣耀", css: "wzry" },
            { name: "绝地求生", css: "jdqs" },
            { name: "足球", css: "zq" },
            { name: "篮球", css: "lq" },
            { name: "守望先锋", css: "swxf" },
            { name: "炉石传说", css: "lscs" },
            { name: "魔兽争霸Ⅲ", css: "mszb" }
          ]
        },
        { name: "今日", css: "jr" },
        { name: "早盘", css: "zp" },
        { name: "猜你喜欢", css: "hot" },
        { name: "我的推荐", css: "like" },
        { name: "所有赛事", css: "all" }
      ]
    };
  },
  created() {
    this.functionList = JSON.parse(JSON.stringify(this.gameList));
  },
  methods: {
    doneAdd: function() {
      this.gameList = this.functionList;
      this.listIndex = false;
      localStorage.setItem("gameList", JSON.stringify(this.gameList));
      localStorage.setItem(
        "moreList",
        JSON.stringify(this.moreClassifyLabelList)
      );
    },
    moreClassify: function(data, ind) {
      this.functionList.push(data);
      Array.from(new Set(this.functionList));
      this.moreClassifyLabelList = this.objectEach(
        this.moreClassifyLabelList,
        ind
      );
    },
    functionbind: function(data, ind) {
      this.moreClassifyLabelList.push(data);
      this.functionList = this.objectEach(this.functionList, ind);
    },
    objectEach: function(data, ind) {
      let list = [];
      data.forEach((v, k) => {
        if (k === ind) return;
        list.push(v);
      });
      return list;
    },
    listBind: function(ind) {
      this.listIndex = this.listIndex === ind ? !this.listIndex : ind;
    },
    listBind2: function(ind = 1) {
      this.listIndex2 = this.listIndex2 === ind ? !this.listIndex2 : ind;
    },
    listBind3: function(ind = 1) {
      this.listIndex3 = this.listIndex3 === ind ? !this.listIndex3 : ind;
    }
  }
};
</script>
<style lang="less" scope>
@import "../../../styles/main";
@import "../../../styles/common";
@import "../../home-en/left/index";
</style>
