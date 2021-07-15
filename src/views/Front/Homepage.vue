<template>
  <div ref="HomePage">
    <!-- swipper -->
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
    <!-- 最新上映 -->
    <div class="container-lg pt-4 py-5">
      <div class="d-flex justify-content-between align-items-end">
        <h2 class="h4">
          <span class="material-icons font--lg">videocam</span>
          最新上映
        </h2>
        <router-link to="/products" class="text-decoration-none">
          <div class="p-2 hover--success text-dark">
            <p class="h6">查看更多</p>
          </div>
        </router-link>
      </div>
      <div class="py-4">
        <div class="row d-flex">
          <div class="col-12 col-sm-6 col-md-4" v-for="item of adjustRandomProducts" :key="item.id">
            <div class="card position-relative box--shadow">
              <span class="badge bg-warning text-white position-absolute top--10 start--10">{{ item.category }}</span>
              <div class="p-3">
                <img :src="item.imageUrl" class="card-img-top img__card" alt="...">
              </div>
              <div class="card-body pt-1">
                <h3 class="card-title text-center h5">{{ item.title }}</h3>
                <p class="card-text text-center h5 fw-bolder">${{ item.price }}</p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary d-flex align-items-center">
                    <span class="material-icons font--sm">
                      shopping_basket
                    </span>
                    放購物車
                  </a>
                  <a href="#" class="btn btn-secondary d-flex align-items-center">
                    <span class="material-icons font--sm">
                      settings_suggest
                    </span>
                    商品詳細
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Prifix 平台忠旨 -->
    <div class="bg--black py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-md-8 col-lg-6 d-flex flex-column align-items-center">
          <h2 class="text-white text-center py-2 mb-4">平權影音義賣，為世界平權盡一份心</h2>
          <p class="text-white text-center d-none d-sm-block">台灣是個兼容並蓄多元族群的淨土。<br>也不乏許多非營利團體願意站出來為這個議題努力<br>然而世界上仍有許多國家的人民，深受此權益的迫害</p>
          <p class="text-white text-center fw-bold fst-italic text-decoration-underline d-none d-sm-block">也因此， PRIFIX 平台誕生<br>RRIFIX = PRIDE + FIX</p>
          <p class="text-white text-center">PRIFIX 平台販售與平權相關的電影/影集/紀錄片<br>一方面藉由影像傳播議題，一方面也將此販售所得捐至世界平權組織</p>
          <router-link class="text-decoration-none" to="/products">
            <a class="btn btn-outline-light d-flex align-items-center" href="#">
              <span class="material-icons me-1">live_tv</span>
              <span>來去逛影音</span>
            </a>
          </router-link>
        </div>
      </div>
    </div>
    <!-- article -->
    <div class="container-fluid py-5">
      <div class="position-relative mb-5" v-if="articles">
        <d-flex class="justify-content-start">
          <div class="w--articlePhoto">
            <img :src="articles[0].image" alt="" class="img__article" v-if="articles && articles[0] && articles[0].image" data-aos="fade-right" data-aos-duration="1400">
          </div>
        </d-flex>
        <div class="w--article bg--green opacity__article position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center px-3 px-md-5">
          <h3 class="text--black text-center mb-3" v-if="articles && articles[0] && articles[0].title">{{ articles[0].title }}</h3>
          <p class="text--black text-center" v-if="articles && articles[0] && articles[0].description">{{ articles[0].description }}</p>
          <button class="btn btn-outline-dark d-flex align-items-center">
            <span class="material-icons">feed</span>
            完整文章
          </button>
        </div>
      </div>
      <div class="position-relative" v-if="articles">
        <div class="d-flex justify-content-end">
          <div class="w--articlePhoto">
            <img :src="articles[1].image" alt="" class="img__article" v-if="articles && articles[0] && articles[0].image" data-aos="fade-left" data-aos-duration="1400">
          </div>
        </div>
        <div class="w--article bg--yellow opacity__article position-absolute top-0 start-0 h-100 d-flex flex-column align-items-center justify-content-center px-3 px-md-5">
          <h3 class="text--black text-center mb-3" v-if="articles && articles[1] && articles[1].title">{{ articles[1].title }}</h3>
          <p class="text--black text-center" v-if="articles && articles[1] && articles[1].description">{{ articles[1].description }}</p>
          <button class="btn btn-outline-dark d-flex align-items-center">
            <span class="material-icons">feed</span>
            完整文章
          </button>
        </div>
      </div>
    </div>
    <!-- 名人的挺同語錄 -->
    <div class="bg--black pt-3 py-4">
      <div class="container-lg">
        <h2 class="h4 text-white text-center py-2">名人的挺同語錄</h2>
        <div class="row">
           <swiper
            :slides-per-view="slideNum"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :autoplay='
            {
              "delay": 10000,
              "disableOnInteraction": false
            }'
          >
            <swiper-slide class="col-3 mb-5 position-relative" v-for="item of famousQuotes" :key="item.id">
              <img src="@/assets/images/rainbow__bg.jpg" alt="" class="img__quote rounded">
              <div class="position-absolute text-white middle--50">
                <img :src="item.imgUrl" alt="" class="d-flex mb-2 img__famous rounded box--shadow">
                <h3 class="h5 text-center">{{ item.people }}</h3>
                <p class="text-center font--xs">“ {{ item.quote }} ”</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- 訂閱 -->
    <div class="bg--light py-5">
      <h2 class="h4 text-center py-2 px-3">訂閱 PRIFIX ，接收最新影音及平權訊息！</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-8 col-md-6">
          <Form ref="form" v-slot="{ errors }" @submit="onSubmit">
            <div class="input-group mb-3">
              <label for="email"></label>
              <Field class="form-control rounded"
                  placeholder="請輸入電子信箱" id="email"
                  name="email"
                  :class="{ 'is-invalid': errors['email'] }" rules="email|required"></Field>
              <!-- <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage> -->
              <button class="btn btn-primary" type="button" id="subscribeEmail">訂閱</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer>
      <div class="bg--dark__100 py-3">
        <div class="container-lg">
          <ul class="list-unstyled d-flex justify-content-evenly">
            <li>
              <router-link to="/" aria-current="page" class="text-decoration-none"><span class="nav__home nav-link active font__menu text-white">首頁</span></router-link>
            </li>
            <li>
              <router-link to="/products" class="text-decoration-none"><span class="nav__home nav-link font__menu text-white">商品</span></router-link>
            </li>
            <li>
              <router-link to="/coupon" class="text-decoration-none"><span class="nav__home nav-link font__menu text-white">優惠活動</span></router-link>
            </li>
            <li>
              <router-link to="/cart" class="text-decoration-none"><span class="nav__home nav-link font__menu text-white">購物車</span></router-link>
            </li>
          </ul>
          <ul class="list-unstyled d-flex flex-column align-items-center mb-3">
            <li>
              <a href="#" class="text-decoration-none text-white font--sm">住址：台北市松山區民生東路五段184號</a>
            </li>
            <li>
              <a href="tel:+026666123" class="text-decoration-none text-white font--sm">電話：02-666-6123</a>
            </li>
            <li>
              <a href="mailto:prifix@gmail.com" class="text-decoration-none text-white font--sm">電子信箱：prifix@gmail.com</a>
            </li>
          </ul>
          <div class="row d-flex justify-content-center">
            <div class="col-4">
              <ul class="list-unstyled d-flex justify-content-evenly">
                <li>
                  <a href="https://www.facebook.com/yu19941994" class="text-decoraion-none text-white font--sm btn">
                    <span class="material-icons">facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoraion-none text-white font--sm btn">
                    <span class="material-icons">smart_display</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoraion-none text-white font--sm btn">
                    <span class="material-icons">near_me</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoraion-none text-white font--sm btn">
                    <span class="material-icons">chat</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bg--black py-3">
        <div class="text-center text-white font--sm">
           Copyright  ©  2021  HsienYu  個人作業使用，無商業行為
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import { famousQuotes } from '@/fakeData'

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
      },
      products: [],
      randomProducts: [],
      adjustRandomProducts: [],
      fullWidth: 0,
      famousQuotes,
      slideNum: 0,
      articles: []
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    adjustWindowSize () {
      this.fullWidth = window.innerWidth
      if (this.fullWidth > 1200) {
        this.slideNum = 4
      } else if (this.fullWidth > 768) {
        this.randomHandler(3)
        this.slideNum = 3
      } else if (this.fullWidth > 576) {
        this.randomHandler(2)
        this.slideNum = 2
      } else {
        this.randomHandler(1)
        this.slideNum = 1
      }
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    },
    async getProducts () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
      const vm = this
      try {
        const res = await vm.axios.get(url)
        this.products = res.data.products
      } catch (err) {
        console.log(err)
      }
    },
    randomHandler (num) {
      const arr = []
      while (this.randomProducts.length < num) {
        const temp = (Math.random() * this.products.length) >> 0
        this.randomProducts.push(this.products.splice(temp, 1))
      }
      arr.push(this.randomProducts[0][0])
      if (num !== 1) {
        arr.push(this.randomProducts[1][0])
      }
      if (num === 3) {
        arr.push(this.randomProducts[2][0])
      }
      this.adjustRandomProducts = arr
    },
    getArticles () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles?page=:page`
      this.axios.get(url)
        .then(res => {
          console.log(res)
          this.articles = res.data.articles
          console.log(this.articles)
        })
        .catch(err => console.log(err))
    },
    onSubmit () {
      console.log('ya')
    }
  },
  async mounted () {
    await this.getProducts()
    const vm = this
    vm.fullWidth = window.innerWidth
    this.adjustWindowSize()
    window.onresize = () => {
      this.adjustWindowSize()
    }
    this.getArticles()
  }
}
</script>
