<template>
  <div class="hide">
    <div class="mall-bg">
      <div class="mall-menu">
        <div class="line"></div>
        <div class="menu-all menu-1" v-for="(item,index) in items"  v-bind:key="index">
          <div id="menu-bor" :class='{active: item.isSubShow}' @click="showToggle(index)">
            <img :src="index === nowIndex? item.src_one : item.src ">&#8197;
            <span>{{item.text}}</span>
          </div>
          <ul class="menu-ul menu-1-ul" v-show="item.isSubShow">
            <li v-for="(subItem,index) in item.subItems" v-bind:key="index">
              <div class="oneMenuChild">{{subItem.option}}</div>
            </li>
          </ul>
        </div>

        <div class="menu-cart menu-all">
          <img :src="isCart == true ? cart_one:cart" @mouseover="isCart=true" @mouseout="isCart=false">&#8197;
          <span>cart</span>
        </div>

      </div>

      <div class="scroll">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="../../images/mall/banner.png"></swiper-slide>
          <swiper-slide><img src="../../images/mall/banner.png"></swiper-slide>
          <swiper-slide><img src="../../images/mall/banner.png"></swiper-slide>
          <swiper-slide><img src="../../images/mall/banner.png"></swiper-slide>
          <swiper-slide><img src="../../images/mall/banner.png"></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination " slot="pagination"></div>
        </swiper>
      </div>

      <div class="mall-title title-1">
        <div class="line"></div>
        <span class="span-1">new item</span>
        <span class="span-2">more>></span>
      </div>
      <div class="product-all">
        <div class="product" :class="'product-' + (index+1)" v-for="(item, index) in new Array(5)" v-bind:key="index">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">manbetx gaming mouse</p>
            <p class="text-2">normal price：￥1679</p>
            <p class="text-2">our price：￥1000</p>
            <p class="text-3"><span>point：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
      </div>
      <div class="mall-title title-1">
        <div class="line"></div>
        <span class="span-1">hot item</span>
      </div>
      <div class="product-all-2 product-all">
        <div class="product" :class="'product-' + (index+1)" v-for="(item, index) in new Array(5)" v-bind:key="index">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">manbetx gaming mouse</p>
            <p class="text-2">normal price：￥1679</p>
            <p class="text-2">our price：￥1000</p>
            <p class="text-3"><span>point：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
      </div>
      <div class="down-line down-line-1"></div>
      <div class="icon-all">
        <div class="icon-d icon-1">
          <img src="../../images/mall/icon/weixiu.png">&#8197;
          <span>1 hour fast repair service</span>
        </div>
        <div class="icon-d icon-2">
          <img src="../../images/mall/icon/qitiantuihuan.png">&#8197;
          <span>7 days return</span>
        </div>
        <div class="icon-d  icon-3">
          <img src="../../images/mall/icon/change-days.png">&#8197;
          <span>1 hour fast repair service</span>
        </div>
        <div class="icon-d  icon-4">
          <img src="../../images/mall/icon/ziyuan.png">&#8197;
          <span>above 150 RMB free postage</span>
        </div>
      </div>
      <div class="down-line down-line-2"></div>
      <div class="footer">
        <ul>
          <li><a href="#" class="big-text">shopping guide</a></li>
          <li><a href="#">shopping Q&A</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">Shopping process</a></li>
        </ul>
        <ul>
          <li><a href="#" class="big-text">payment method</a></li>
          <li><a href="#">Cash on delivery</a></li>
          <li><a href="#">Delivery payment method</a></li>
          <li><a href="#">online payment</a></li>
        </ul>
        <ul>
          <li><a href="#" class="big-text">delivery method</a></li>
          <li><a href="#">delivery area and fees</a></li>
          <li><a href="#">Receive info</a></li>
          <li><a href="#">Fast Reward</a></li>
        </ul>
        <ul>
          <li><a href="#" class="big-text">after sales service</a></li>
          <li><a href="#">Fast exchange process</a></li>
          <li><a href="#">fast exchange policy</a></li>
          <li><a href="#">financial policy</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'HelloWorld',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        /*   commonClass: 'nav-item',
           activeClass: 'active',*/

        dropdownActive: false,
        nowIndex: -1,
        isCart: false,
        cart: require('../../images/mall/normal/gouwuche.png'),
        cart_one: require('../../images/mall/hover/gwc.png'),
        items: [
          {
            text: 'Gaming accessories',
            src: require('../../images/mall/normal/jianpan.png'),
            src_one: require('../../images/mall/hover/ws.png'),
            isSubShow: false,
            subItems: [
              {
                option: 'headphone'
              },
              {
                option: 'gaming mouse'
              },
              {
                option: 'keyboard'
              },
              {
                option: 'gaming chair'
              },
              {
                option: 'tobacco alcohol'
              },
            ]
          },
          {
            text: 'e-sports energy drink',
            src: require('../../images/mall/normal/yinliao.png'),
            src_one: require('../../images/mall/hover/yl.png'),
            isSubShow: false,
            subItems: [
              {
                option: 'headphone2'
              },
              {
                option: 'gaming mouse'
              },
              {
                option: 'keyboard'
              },
              {
                option: 'gaming chair'
              },
              {
                option: 'tobacco alcohol'
              },
            ]
          },
          {
            text: 'Game card',
            src: require('../../images/mall/normal/chongzhiqia(1).png'),
            src_one: require('../../images/mall/hover/yxk.png'),
            isSubShow: false,
            subItems: [
              {
                option: 'headphone3'
              },
              {
                option: 'gaming mouse'
              },
              {
                option: 'keyboard'
              },
              {
                option: 'gaming chair'
              },
              {
                option: 'tobacco alcohol'
              },
            ]
          },
          {
            text: 'smart device',
            src: require('../../images/mall/normal/znsb.png'),
            src_one: require('../../images/mall/hover/zn.png'),
            isSubShow: false,
            subItems: [
              {
                option: 'headphone4'
              },
              {
                option: 'gaming mouse'
              },
              {
                option: 'keyboard'
              },
              {
                option: 'gaming chair'
              },
              {
                option: 'tobacco alcohol'
              },
            ]
          },
          {
            text: 'Accessories',
            src: require('../../images/mall/normal/peijian(1).png'),
            src_one: require('../../images/mall/hover/pj.png'),
            isSubShow: false,
            subItems: [
              {
                option: 'headphone5'
              },
              {
                option: 'gaming mouse'
              },
              {
                option: 'keyboard'
              },
              {
                option: 'gaming chair'
              },
              {
                option: 'tobacco alcohol'
              },
            ]
          }
        ],

        swiperOption: {
          notNextTick: true,
          //循环
          loop: true,
          //设定初始化时slide的索引
          initialSlide: 0,
          //自动播放
          /*autoplay: true,*/
          autoplay: {
              delay: 5000,
          },
          // 设置轮播
          /*  effect: 'flip',*/
          //滑动速度
         /* speed: 800,*/
          //滑动方向
          /*direction: 'horizontal',*/
          //小手掌抓取滑动
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数
          on: {
            slideChangeTransitionEnd: function () {
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
          },
          //左右点击
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //分页器设置
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]


      }
    },
    created() {
      // swiper()
      // {
      //   return this.$refs.mySwiper.swiper;
      // }
    },
    mounted() {
    },
    methods: {
      dropdown: function (index) {
        this.nowIndex = index;
      },
      // 点击展开折叠菜单事件
      showToggle (index) {
        this.items.forEach((value,key)=>{
          if(index === key) {
            value.isSubShow = !value.isSubShow
          }else {
            value.isSubShow = false
          }
        })

        // this.items.forEach((i,index) => {
        //   // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
        //
        //   if (i.isSubShow !== this.items[ind].isSubShow) {
        //     i.isSubShow = false;
        //   }
        // });
        // item.isSubShow = !item.isSubShow;
        // console.log(item.isSubShow);

      },
      aa: function () {

      }

    },
    components: {}
  }
</script>

<style lang='stylus' scoped>
  @import '../../styles/reset.css';
  @import 'index.less';

</style>
<style lang="stylus">
  .swiper-pagination-bullet-active {
    border: none;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    border: 1px solid #fff;
  }
</style>
