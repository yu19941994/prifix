<template>
  <div ref="HomePage">
    <Loading v-model:active="isLoading"
      :is-full-page="fullPage">
    </Loading>
    <!-- swipper -->
    <div class="position-absolute text-white zindex__banner__text position__banner text-center">
      <div class="font--title">Love is Love</div>
      <p class="font--subtitle mb-3 mb-md-5">優質平權影音精裝</p>
      <p class="font--description mt-3 mt-md-5 mb-1 mb-md-3 d-none d-sm-block">台灣是亞洲平權的驕傲，<br>不同形式的愛，都該被看見</p>
      <p class="font--description mt-3 mt-md-5 mb-1 mb-md-3 d-sm-none">台灣是亞洲平權的驕傲，不同形式的愛，都該被看見</p>
      <div class="position-relative d-none d-sm-block">
        <span class="material-icons font--xl animate__fadeInDown">arrow_drop_down</span>
      </div>
    </div>
    <Swiper class="swiper-wrapper__banner"
      :autoplay='
        {
          "delay": 8000,
          "disableOnInteraction": false
        }'
      >
      <Swiper-slide v-for="image in product.imagesUrl" :key="image">
        <img :src="image" alt="橫幅圖片" class="img__banner">
      </Swiper-slide>
    </Swiper>
    <!-- 最新上映 -->
    <div class="container-lg pt-4 py-5">
      <div class="d-flex justify-content-between align-items-end">
        <h2 class="h4">
          <span class="material-icons font--lg">videocam</span>
          最新上映
        </h2>
        <router-link to="/products" class="text-decoration-none">
          <div class="p-2 hover--success text-dark">
            <p class="h6 mb-0">查看更多</p>
          </div>
        </router-link>
      </div>
      <div class="py-4">
        <ul class="row d-flex list-unstyled">
          <li class="col-12 col-sm-6 col-md-4" v-for="item of adjustRandomProducts" :key="item.id">
            <div class="card position-relative box--shadow">
              <button class="btn bg-transparent text-white top-0 end-0 zindex--cat position-absolute border-0" @click="addFavoriteHandler(item)" type="button">
                <span class="material-icons text-danger" v-if="myFavorite.includes(item.id)">bookmark</span>
                <span class="material-icons text-white" v-else>bookmark</span>
              </button>
              <span class="badge bg-secondary text-white position-absolute top-0 start-0 zindex--cat d-flex p-2">{{ item.category }}</span>
              <div class="mb-2">
                <router-link class="img__card overflow-hidden position-relative d-block" :to="`/productDetail/${item.id}`">
                  <img :src="item.imageUrl" class="card-img-top img__card__inside" alt="產品圖片">
                </router-link>
              </div>
              <div class="card-body pt-1">
                <h3 class="card-title text-center h5">{{ item.title }}</h3>
                <p class="card-text text-center h5 fw-bolder">${{ item.price }}</p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary d-flex align-items-center" @click="$emit('add-cart', item, 1)">
                    <span class="material-icons font--sm">
                      shopping_basket
                    </span>
                    放購物車
                  </a>
                  <router-link href="#" class="btn btn-secondary d-flex align-items-center" :to="`/productDetail/${item.id}`">
                    <span class="material-icons font--sm">
                      settings_suggest
                    </span>
                    商品詳細
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Prifix 平台忠旨 -->
    <div class="bg--black py-5">
      <div class="row d-flex justify-content-center gx-0">
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
    <div class="container-fluid py-5 overflowX">
      <div class="position-relative mb-5" v-if="articles">
        <div class="d-flex justify-content-start">
          <div class="w--articlePhoto">
            <img :src="articles[0].image" alt="文章圖片" class="img__article" v-if="articles && articles[0] && articles[0].image" data-aos="fade-right" data-aos-duration="1400">
          </div>
        </div>
        <div class="w--article bg--green opacity__article position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center px-3 px-md-5">
          <h3 class="text--black text-center mb-3" v-if="articles && articles[0] && articles[0].title">{{ articles[0].title }}</h3>
          <p class="text--black text-center" v-if="articles && articles[0] && articles[0].description">{{ articles[0].description }}</p>
          <router-link class="btn btn-outline-dark d-flex align-items-center" :to="`/articleDetail/${article1}`">
            <span class="material-icons">feed</span>
            完整文章
          </router-link>
        </div>
      </div>
      <div class="position-relative" v-if="articles">
        <div class="d-flex justify-content-end">
          <div class="w--articlePhoto">
            <img :src="articles[1].image" alt="文章圖片" class="img__article" v-if="articles && articles[0] && articles[0].image" data-aos="fade-left" data-aos-duration="1400">
          </div>
        </div>
        <div class="w--article bg--yellow opacity__article position-absolute top-0 start-0 h-100 d-flex flex-column align-items-center justify-content-center px-3 px-md-5">
          <h3 class="text--black text-center mb-3" v-if="articles && articles[1] && articles[1].title">{{ articles[1].title }}</h3>
          <p class="text--black text-center" v-if="articles && articles[1] && articles[1].description">{{ articles[1].description }}</p>
          <router-link class="btn btn-outline-dark d-flex align-items-center" :to="`/articleDetail/${article2}`">
            <span class="material-icons">feed</span>
            完整文章
          </router-link>
        </div>
      </div>
    </div>
    <!-- 名人的挺同語錄 -->
    <div class="bg--black pt-3 py-4">
      <div class="container-lg">
        <h2 class="h4 text-white text-center py-2">名人的挺同語錄</h2>
        <div class="row">
          <Swiper
            :slides-per-view="slideNum"
            :space-between="50"
            :autoplay='
            {
              "delay": 3000,
              "disableOnInteraction": false
            }'
          >
            <Swiper-slide class="position-relative" v-for="item of famousQuotes" :key="item.id">
              <img src="@/assets/images/rainbow__bg.jpg" alt="名人圖片背景" class="img__quote rounded">
              <div class="position-absolute text-white middle--50">
                <img :src="item.imgUrl" alt="名人圖片" class="d-flex mb-2 img__famous rounded box--shadow">
                <h3 class="h5 text-center">{{ item.people }}</h3>
                <p class="text-center font--xs">“ {{ item.quote }} ”</p>
              </div>
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import { famousQuotes } from '@/fakeData'
import Loading from '@/components/Front/Loading'

SwiperCore.use([Autoplay])
const storageMethods = {
  save (favorite) {
    const favoriteString = JSON.stringify(favorite)
    localStorage.setItem('favorite', favoriteString)
  },
  get () {
    return JSON.parse(localStorage.getItem('favorite'))
  }
}
export default {
  emits: ['add-cart'],
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
      articles: [],
      article1: '',
      article2: '',
      isLoading: false,
      fullPage: true,
      myFavorite: storageMethods.get() || []
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Loading
  },
  methods: {
    addFavoriteHandler (item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1)
      } else {
        this.myFavorite.push(item.id)
      }
      storageMethods.save(this.myFavorite)
    },
    adjustWindowSize () {
      this.fullWidth = window.innerWidth
      if (this.fullWidth > 1200) {
        this.randomHandler(3)
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
      // switch (window.innerWidth) {
      //   case (window.innerWidth > 1200):
      //     this.randomHandler(3)
      //     this.slideNum = 4
      //     break
      //   case (window.innerWidth > 768):
      //     this.randomHandler(3)
      //     this.slideNum = 3
      //     break
      //   case (window.innerWidth > 576):
      //     this.randomHandler(2)
      //     this.slideNum = 2
      //     break
      //   case (window.innerWidth <= 576):
      //     this.randomHandler(1)
      //     this.slideNum = 1
      //     break
      // }
    },
    async getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
      try {
        this.isLoading = false
        const res = await this.axios.get(url)
        this.products = res.data.products
      } catch (err) {
        this.$swal({ title: err, icon: 'error' })
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
          this.articles = res.data.articles
          this.article1 = res.data.articles[0].id
          this.article2 = res.data.articles[1].id
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    }
  },
  async mounted () {
    await this.getProducts()
    this.adjustWindowSize()
    window.onresize = () => {
      this.adjustWindowSize()
    }
    this.getArticles()
  }
}
</script>
