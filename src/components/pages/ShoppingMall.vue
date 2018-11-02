<template>
  <div>
    <!-- 搜索条 -->
    <div class="search-bar">
      <van-row gutter="5">
        <van-col span="3"><img :src="lIcon" width='60%' class="location-icon"></van-col>
        <van-col span="16">
          <input type="text" class="search-input" placeholder="猕猴桃">
        </van-col>
        <van-col span="5">
          <!-- <van-boutton size="mini">查找</van-boutton> -->
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div class="swipe-warp">
      <van-swipe :autoplay='3000'>
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" alt="" width="100%" >
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 分类 -->
    <div class="type-bar _mt20">
      <div v-for="(cate, index) in category" :key="index" class="type-item">
        <img v-lazy="cate.image" alt="">
        <span>{{ cate.mallCategoryName }}</span>
      </div>
    </div>
    <!-- 广告 -->
    <div class="ad-banner _mt20">
      <img v-lazy="adBanner" alt="">
    </div>
    <!-- 商品推荐区域 -->
    <div class="recommend-area _mt20">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <ul>
          <li v-for="(item, index) in recommend" :key="index">
            <div class="imgbox">
              <img v-lazy="item.image" alt="">
            </div>
            <div class="infobox">
              <h3 class="name">{{ item.goodsName }}</h3>
              <span class="sp">{{ item.price | toMoney }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 楼层 -->
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
    <!-- 热卖组件 -->
    <div class="hot-area _mt20">
      <div class="hot-title">热卖</div>
      <div class="hot-body">
        <van-list>
          <van-row gutter="20">
              <van-col span="12" v-for="(item, index) in hotGoods" :key="index">
                <goodsInfo
                  :goodsImage="item.image"
                  :goodsName="item.name"
                  :goodsPrice="item.mallPrice"
                ></goodsInfo>
              </van-col>
            </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/serviceAPI.conf.js';
import toMoney from '@/filter/moneyFilter.js';
import floorComponent from '@/components/component/floorComponent';
import goodsInfo from '@/components/component/goodsInfoComponent';


const locIcon = require('../../assets/images/location.png');
// https://www.easy-mock.com/mock/5bd8193ff9030954ea19846d/smilevue/product

export default {
  data() {
    return {
      lIcon: locIcon,
      bannerPicArray: [],
      category: {},
      adBanner: '',
      floorName: {},
      recommend: [],
      hotGoods: [],
    };
  },
  components: {
    floorComponent,
    goodsInfo,
  },
  created() {
    axios({
      url: url.getShoppingMallInfo,
      method: 'get',
    }).then((res) => {
      if (res.status === 200) {
        const data = res.data.data;
        this.category = data.category;
        this.adBanner = data.advertesPicture.PICTURE_ADDRESS;
        this.bannerPicArray = data.slides;
        this.floor1 = data.floor1;
        this.floor2 = data.floor2;
        this.floor3 = data.floor3;
        this.floorName = data.floorName;
        this.recommend = data.recommend;
        this.hotGoods = data.hotGoods;
      }
    }).catch((error) => {
      console.log(error);
    });
  },
  filters: {
    toMoney(value) {
      return toMoney(value);
    },
  },
};
</script>

<style scoped lang = "scss">

</style>
