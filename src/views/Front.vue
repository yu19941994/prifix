<template>
  <div class="position-relative">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container-fluid">
      <h1>
        <a class="navbar-brand textindent__title" href="#"></a>
      </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav list-unstyled ms-auto d-flex align-items-center">
            <li class="nav-item px-2">
              <router-view to="/" aria-current="page"><span class="nav-link active font__menu">首頁</span></router-view>
            </li>
            <li class="nav-item px-2">
              <router-view to="/blog"><span class="nav-link font__menu">部落格</span></router-view>
            </li>
            <li class="nav-item px-2">
              <router-view to="/products"><span class="nav-link font__menu">商品</span></router-view>
            </li>
            <li class="nav-item px-2">
              <router-view to="/coupon"><span class="nav-link font__menu">優惠活動</span></router-view>
            </li>
            <li class="nav-item px-2">
              <router-view to="/cart" class="nav-link">
                <span class="material-icons">shopping_cart</span>
              </router-view>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="position-absolute text-white zindex__banner position__banner text-center">
      <div class="display-2">Love is Love</div>
      <p class="h2 mb-5">優質平權影音精裝</p>
      <p class="h5 mt-5">台灣是亞洲平權的驕傲，<br>不同形式的愛，都該被看見</p>
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
