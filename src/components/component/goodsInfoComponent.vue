<template>
  <div>
    <div class="goods-info">
      <div class="goods-image">
        <img v-lazy="goodsImage" width="90%" />
      </div>
      <div class="goods-name">{{goodsName}}</div>
      <div class="goods-price">{{goodsPrice | moneyFilter }}</div>
    </div>
  </div>
</template>

<script>
import toMoney from '@/filter/moneyFilter.js';

export default {
  props: ['goodsImage', 'goodsName', 'goodsPrice'],
  filters: {
    moneyFilter(value) {
      return toMoney(value);
    },
  },
};
</script>
