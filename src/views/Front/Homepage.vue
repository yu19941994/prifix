<template>
  <div>
    <div class="position-absolute text-white zindex__banner position__banner text-center">
      <div class="font--title">Love is Love</div>
      <p class="font--subtitle mb-3 mb-md-5">優質平權影音精裝</p>
      <p class="font--description mt-3 mt-md-5 mb-1 mb-md-3 d-none d-sm-block">台灣是亞洲平權的驕傲，<br>不同形式的愛，都該被看見</p>
      <p class="font--description mt-3 mt-md-5 mb-1 mb-md-3 d-sm-none">台灣是亞洲平權的驕傲，不同形式的愛，都該被看見</p>
      <div class="position-relative d-none d-sm-block">
        <span class="material-icons font--xl animate__fadeInDown">arrow_drop_down</span>
      </div>
    </div>
    <swiper
      :autoplay='
        {
          "delay": 8000,
          "disableOnInteraction": false
        }'
      >
      <swiper-slide v-for="image in product.imagesUrl" :key="image">
        <img :src="image" alt="" class="img__banner">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

SwiperCore.use([Autoplay])
export default {
  data () {
    return {
      product: {
        imagesUrl: [
          require('@/assets/images/banner1.png'),
          require('@/assets/images/banner2.png'),
          require('@/assets/images/banner3.png')
        ]
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
}
</script>
