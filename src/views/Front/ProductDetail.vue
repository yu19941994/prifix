<template>
  <div>
    <!-- banner -->
    <div class="bg__productDetail__banner mb-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-6 col-lg-4">
          <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
            <h2 class="text-center font--banner mb-0">商品介紹</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- product -->
    <div class="container-lg pt-3 pb-5">
        <nav aria-label="breadcrumb" class="mb-3 px-5 px-md-0 px-lg-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/" class="text-secondary text-decoration-none">首頁</router-link></li>
            <li class="breadcrumb-item"><router-link to="/products" class="text-secondary text-decoration-none">影音商品</router-link></li>
            <li class="breadcrumb-item">{{ product.category }}</li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-12 col-md-4 col-lg-5">
            <div class="mb-5 mb-md-0">
              <div class="px-5 px-md-0 px-lg-3">
                <img :src="product.imageUrl" alt="產品圖片" class="w-100 img__productDetail">
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-7">
            <div class="px-5 px-md-0 px-lg-3">
              <div class="bg-dark text-white p-3 position-relative h--productDetail">
                <h2 class="h4">{{ product.title }}</h2>
                <div class="d-flex align-items-center mb-3">
                  <span class="font--lg text-secondary mb-0 me-1">{{ product.year }}</span>
                  <span class="badge bg-success" v-show="product.range === 'g'">普</span>
                  <span class="badge bg-primary" v-show="product.range === 'pg'">保</span>
                  <span class="badge bg--orange" v-show="product.range === 'pg-13'">輔</span>
                  <span class="badge bg-danger" v-show="product.range === 'r'">限</span>
                </div>
                <div class="d-flex align-items-center">
                  <p class="h5 me-3">NT${{ product.price }}</p>
                  <p class="h5 text--purple text-decoration-line-through" v-if="product.price !== product.origin_price">NT${{ product.origin_price }}</p>
                </div>
                <hr>
                <p class="h6">劇情簡介：</p>
                <p class="font--sm lh-lg">
                  {{ product.description }}
                </p>
                <div class="d-none d-md-flex justify-content-end align-items-center position-absolute bottom--num right--num">
                  <div class="d-flex me-0 me-md-3 mb-2 mb-md-0">
                    <a href="#" class="btn btn-outline-light d-flex align-items-center rounded-0 rounded-start" @click.prevent="buyNumHandler('minus')">
                      -
                    </a>
                    <input type="number" min="1" class="bg-dark border-1 border-light text-white text-center input--num" v-model="buyNum">
                    <a href="#" class="btn btn-outline-light d-flex align-items-center rounded-0 rounded-end" @click.prevent="buyNumHandler('plus')">
                      +

                    </a>
                  </div>
                  <a href="#" class="btn btn-primary d-flex align-items-center w--num justify-content-center" @click.prevent="$emit('add-cart', product, buyNum)">
                    <span class="material-icons font--sm">
                      shopping_basket
                    </span>
                    放購物車
                  </a>
                </div>
                 <div class="d-md-none position-absolute middle__product--50">
                  <div class="d-flex me-0 me-md-3 mb-3">
                      <a href="#" class="btn btn-outline-light d-flex align-items-center rounded-0 rounded-start" @click.prevent="buyNumHandler('minus')">
                        -
                      </a>
                      <input type="number" min="1" class="bg-dark border-1 border-light text-white text-center input--num" v-model="buyNum">
                      <a href="#" class="btn btn-outline-light d-flex align-items-center rounded-0 rounded-end" @click.prevent="buyNumHandler('plus')">
                        +

                      </a>
                    </div>
                    <a href="#" class="btn btn-primary d-flex align-items-center w--num justify-content-center" @click.prevent="$emit('add-cart', product, buyNum)">
                      <span class="material-icons font--sm">
                        shopping_basket
                      </span>
                      放購物車
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- suggest -->
    <div class="container-lg border-5 border--top--purple pt-3 pb-5">
      <h3 class="h2 text-center mb-3">同類影音</h3>
      <div class="row">
        <Swiper
          :slides-per-view="slideNum"
          :space-between="30"
          :autoplay='
          {
            "delay": 4000,
            "disableOnInteraction": false
          }'
        >
          <Swiper-slide class="col-3 mb-5 position-relative" v-for="item of filterCat" :key="item.id">
            <div class="card position-relative box--shadow">
              <button class="btn bg-transparent text-white top-0 end-0 zindex--cat position-absolute border-0" @click="addFavoriteHandler(item)" type="button">
                <span class="material-icons text-danger" v-if="myFavorite.includes(item.id)">bookmark</span>
                <span class="material-icons text-white" v-else>bookmark</span>
              </button>
              <span class="badge bg-secondary text-white position-absolute top-0 start-0 zindex--cat d-flex p-2">{{ item.category }}</span>
              <div class="mb-2">
                <router-link class="img__card__suggest overflow-hidden position-relative d-block" :to="`/productDetail/${item.id}`">
                  <img :src="item.imageUrl" class="card-img-top img__card__suggest__inside" alt="產品圖片">
                </router-link>
              </div>
              <div class="card-body pt-1">
                <h3 class="card-title text-center h5">{{ item.title }}</h3>
                <p class="card-text text-center h5 fw-bolder">${{ item.price }}</p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary d-flex align-items-center" @click.prevent="$emit('add-cart', item, 1)">
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
          </Swiper-slide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

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
  components: {
    Swiper,
    SwiperSlide
  },
  watch: {
    '$route' (to) {
      if (to.params.id) {
        this.getProduct()
      }
    }
  },
  data () {
    return {
      product: {},
      fullWidth: 0,
      slideNum: 0,
      products: [],
      buyNum: 1,
      myFavorite: storageMethods.get() || []
    }
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
        this.slideNum = 4
      } else if (this.fullWidth > 768) {
        this.slideNum = 3
      } else if (this.fullWidth > 576) {
        this.slideNum = 2
      } else {
        this.slideNum = 1
      }
    },
    getProduct () {
      const pdId = this.$route.params.id
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${pdId}`
      this.axios.get(url)
        .then(res => {
          this.product = res.data.product
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    getProducts () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          this.products = res.data.products
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    buyNumHandler (action) {
      if (this.buyNum > 1) {
        action === 'plus' ? (this.buyNum += 1) : (this.buyNum -= 1)
      } else {
        action === 'plus' ? (this.buyNum += 1) : (this.buyNum = 1)
      }
    }
  },
  computed: {
    filterCat () {
      return this.products.filter(item => item.category === this.product.category && (item.id !== this.product.id))
    }
  },
  created () {
    this.getProduct()
  },
  mounted () {
    this.getProducts()
    const vm = this
    vm.fullWidth = window.innerWidth
    this.adjustWindowSize()
    window.onresize = () => {
      this.adjustWindowSize()
    }
  }
}
</script>
