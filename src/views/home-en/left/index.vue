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

        <ul class="list-2" v-show="listIndex === index">
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
          <dt class="title">Customize exclusive page</dt>
          <dd>
            <dl>
              <dt>Function selection bar</dt>
              <dd>
                <span v-for="(item, index) in functionList" :key="index">
                  {{item.name}}
                  <i class="el-icon-error" @click="functionbind(item, index)"></i>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>More categories</dt>
              <dd>
                <span v-for="(item, index) in moreClassifyLabelList" :key="index">
                  {{item.name}}
                  <i class="el-icon-circle-plus" @click="moreClassify(item, index)"></i>
                </span>
              </dd>
            </dl>
            <div class="btn-group">
              <button @click="doneAdd" class="active">Done</button>
              <button>Canel</button>
            </div>
          </dd>
        </dl>
      </li>
      <li class="zdy" :class="{'active': listIndex === 7}" v-on:click.stop="listBind('zdy')">
        <span>self setting sports type</span>
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
      moreClassifyLabelList: JSON.parse(localStorage.getItem("moreListEn")) || [
        { name: "Recom", css: "like" },
        { name: "Today", css: "like" },
        { name: "LOL", css: "like" },
        { name: "DUTA2", css: "like" },
        { name: "AOV", css: "like" },
        { name: "PUBG", css: "like" }
      ],
      gameList: JSON.parse(localStorage.getItem("gameListEn")) || [
        {
          name: "Snowball",
          css: "gq",
          children: [
            {
              name: "LOL",
              num: 49,
              children: [{ name: "LCK", num: 6 }, { name: "LGK", num: 1 }],
              css: "yxlm"
            },
            { name: "AOV", css: "wzry" },
            { name: "PUBG", css: "jdqs" },
            { name: "soccer", css: "zq" },
            { name: "basketball", css: "lq" },
            { name: "overwatch", css: "swxf" },
            { name: "Hearthstone", css: "lscs" },
            { name: "Warcraft III", css: "mszb" }
          ]
        },
        { name: "today", css: "jr" },
        { name: "early bet", css: "zp" },
        { name: "you may also like", css: "hot" },
        { name: "my recommendation", css: "like" },
        { name: "all matches", css: "all" }
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
      localStorage.setItem("gameListEn", JSON.stringify(this.gameList));
      localStorage.setItem(
        "moreListEn",
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
    listBind: function(ind = 1) {
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
@import "./index";
</style>
