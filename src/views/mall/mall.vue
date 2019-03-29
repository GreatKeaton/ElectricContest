<template>
  <div class="hide">
    <div class="mall-bg">
      <div class="mall-menu">
        <div class="line"></div>
        <div class="menu-all menu-1" v-for="(item,index) in items" >
          <div id="menu-bor" :class='{active: item.isSubShow}' @click="showToggle(index)">
            <img :src="index === nowIndex? item.src_one : item.src ">&#8197;
            <span>{{item.text}}</span>
          </div>
          <ul class="menu-ul menu-1-ul" v-show="item.isSubShow">
            <li v-for="subItem in item.subItems">
              <div class="oneMenuChild">{{subItem.option}}</div>
            </li>
          </ul>
        </div>

        <div class="menu-cart menu-all">
          <img :src="isCart == true ? cart_one:cart" @mouseover="isCart=true" @mouseout="isCart=false">&#8197;
          <span>购物车</span>
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
        <span class="span-1">新品上架</span>
        <span class="span-2">查看更多>></span>
      </div>
      <div class="product-all">
        <div class="product product-1">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
        <div class="product product-2">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
        <div class="product product-3">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
        <div class="product product-4">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
        <div class="product product-5">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
      </div>
      <div class="mall-title title-1">
        <div class="line"></div>
        <span class="span-1">热卖商品</span>
      </div>
      <div class="product-all-2 product-all">
        <div class="product product-1">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
        <div class="product product-2">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
        <div class="product product-3">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
        <div class="product product-4">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
        <div class="product product-5">
          <img src="../../images/mall/cptp.png">
          <div class="product-text product-1-text">
            <p class="text-1">万博电竞吃鸡鼠标LOL穿越火线鼠标</p>
            <p class="text-2"><span>市场价：￥1679</span>&#12288;&#12288;<span>本店价：￥1000</span></p>
            <p class="text-3"><span>积分价：</span><span class="blue-text">￥13990</span></p>
          </div>
        </div>
      </div>
      <div class="down-line down-line-1"></div>
      <div class="icon-all">
        <div class="icon-d icon-1">
          <img src="../../images/mall/icon/weixiu.png">&#8197;
          <span>1小时快修服务</span>
        </div>
        <div class="icon-d icon-2">
          <img src="../../images/mall/icon/qitiantuihuan.png">&#8197;
          <span>7天无理由退货</span>
        </div>
        <div class="icon-d  icon-3">
          <img src="../../images/mall/icon/change-days.png">&#8197;
          <span>1小时快修服务</span>
        </div>
        <div class="icon-d  icon-4">
          <img src="../../images/mall/icon/ziyuan.png">&#8197;
          <span>满150包邮</span>
        </div>
      </div>
      <div class="down-line down-line-2"></div>
      <div class="footer">
        <ul>
          <li><a href="#" class="big-text">购物指南</a></li>
          <li><a href="#">购物常见问题</a></li>
          <li><a href="#">订单状态</a></li>
          <li><a href="#">购物流程</a></li>
        </ul>
        </ul>
        <ul>
          <li><a href="#" class="big-text">支付方式</a></li>
          <li><a href="#">货到付款</a></li>
          <li><a href="#">配送支付方式</a></li>
          <li><a href="#">在线支付</a></li>
        </ul>
        <ul>
          <li><a href="#" class="big-text">配送方式</a></li>
          <li><a href="#">配送范围与费用</a></li>
          <li><a href="#">签收须知</a></li>
          <li><a href="#">快速收获</a></li>
        </ul>
        <ul>
          <li><a href="#" class="big-text">售后服务</a></li>
          <li><a href="#">速换货流程</a></li>
          <li><a href="#">速换货政策</a></li>
          <li><a href="#">财务政策</a></li>
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
            text: '电竞外设',
            src: require('../../images/mall/normal/jianpan.png'),
            src_one: require('../../images/mall/hover/ws.png'),
            isSubShow: false,
            subItems: [
              {
                option: '耳机'
              },
              {
                option: '鼠标'
              },
              {
                option: '键盘'
              },
              {
                option: '电竞椅'
              },
              {
                option: '烟酒'
              },
            ]
          },
          {
            text: '电竞饮料',
            src: require('../../images/mall/normal/yinliao.png'),
            src_one: require('../../images/mall/hover/yl.png'),
            isSubShow: false,
            subItems: [
              {
                option: '耳机2'
              },
              {
                option: '鼠标'
              },
              {
                option: '键盘'
              },
              {
                option: '电竞椅'
              },
              {
                option: '烟酒'
              },
            ]
          },
          {
            text: '游戏卡',
            src: require('../../images/mall/normal/chongzhiqia(1).png'),
            src_one: require('../../images/mall/hover/yxk.png'),
            isSubShow: false,
            subItems: [
              {
                option: '耳机3'
              },
              {
                option: '鼠标'
              },
              {
                option: '键盘'
              },
              {
                option: '电竞椅'
              },
              {
                option: '烟酒'
              },
            ]
          },
          {
            text: '智能设备',
            src: require('../../images/mall/normal/znsb.png'),
            src_one: require('../../images/mall/hover/zn.png'),
            isSubShow: false,
            subItems: [
              {
                option: '耳机4'
              },
              {
                option: '鼠标'
              },
              {
                option: '键盘'
              },
              {
                option: '电竞椅'
              },
              {
                option: '烟酒'
              },
            ]
          },
          {
            text: '配件',
            src: require('../../images/mall/normal/peijian(1).png'),
            src_one: require('../../images/mall/hover/pj.png'),
            isSubShow: false,
            subItems: [
              {
                option: '耳机5'
              },
              {
                option: '耳机'
              },
              {
                option: '耳机'
              },
              {
                option: '耳机'
              },
              {
                option: '耳机'
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
      swiper()
      {
        return this.$refs.mySwiper.swiper;
      }
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
