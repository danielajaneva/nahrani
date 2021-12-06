<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in items" :key="item.name">
      <Swipercard :item="item" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import Swipercard from "./Swipercard.vue";

export default {
  name: "Cardswiper",
  title: "Multiple slides per view",
  props: ["items"],

  components: {
    Swiper,
    SwiperSlide,
    Swipercard,
  },

  directives: {
    swiper: directive,
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 1.2,
        spaceBetween: 30,
        grabCursor: true,

        keyboard: {
          enabled: true,
        },
        breakpoints: {
          440: {
            slidesPerView: 1.5,
          },
          590: {
            slidesPerView: 2,
          },
          830: {
            slidesPerView: 2.5,
          },
          1050: {
            slidesPerView: 3,
          },
          1275: {
            slidesPerView: 4,
          },
          1660: {
            spaceBetween: 50,
            slidesPerView: 4,
          },
        },
      },
    };
  },
};
</script>
<style>
.swiper {
  @apply overflow-visible w-full my-10;
}
.swiper-wrapper {
  padding: 20px;
}
.swiper-slide {
  @apply h-auto;
}
</style>
