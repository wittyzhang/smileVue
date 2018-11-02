<template>
  <div>
    <!-- 楼层 -->
    <div class="floor _mt20">
      <div class="floor-title">{{ floorTitle }}</div>
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData0.image" alt="">
        </div>
        <div>
          <div class="floor-two">
            <img :src="floorData1.image" alt="">
          </div>
          <div><img :src="floorData2.image" alt=""></div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(item, index) in floorData.slice(3)" :key="index">
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['floorData','floorTitle'],
  data() {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {},
    }
  },
  created() {
    
  },
  watch: {
    floorData() {
      this.floorData0 = this.floorData[0];
      this.floorData1 = this.floorData[1];
      this.floorData2 = this.floorData[2];
    },
  },
};
</script>
