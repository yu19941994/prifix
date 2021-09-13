<template>
  <div>
    <Loading v-model:active="isLoading"
      :is-full-page="fullPage">
    </Loading>
    <!-- banner -->
    <div class="bg__cart__banner mb-2">
     <div class="row d-flex justify-content-center align-items-center h-100 gx-0">
       <div class="col-6 col-lg-4">
         <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
           <h2 class="text-center font--banner mb-0">購物車列表</h2>
         </div>
       </div>
     </div>
    </div>
    <div class="container-lg py-5">
      <nav aria-label="breadcrumb mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-secondary text-decoration-none">首頁</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">購物車列表</li>
        </ol>
      </nav>
      <!-- step -->
      <div class="position-relative mb-5" v-if="carts.length !== 0">
        <ul class="list-unstyled d-flex w-100 justify-content-evenly step">
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-dark text-white">1</span>
            <span class="p mb-0">確認商品</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">2</span>
            <span class="p mb-0">填寫資料</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">3</span>
            <span class="p mb-0">付款結帳</span>
          </li>
        </ul>
      </div>
      <!-- shoppinglist -->
      <div class="py-5 d-flex justify-content-center">
        <!-- 無商品的話 -->
        <div class="bg--light box--shadow rounded p-4 mb-5 w-100" v-if="carts.length === 0">
          <div class="d-flex flex-column align-items-center">
            <h3 class="h2 text-center mb-4">此購物車內無商品</h3>
            <router-link class="btn btn-dark d-flex align-items-center w--noneProduct justify-content-center" to="/products">
              <span class="material-icons">shopping_bag</span>
              購物去
            </router-link>
          </div>
        </div>
        <div class="bg--light box--shadow rounded p-4 mb-5" v-if="carts.length !== 0">
          <div class="d-flex justify-content-end mb-3">
            <button class="btn btn-dark" @click="deleteAllCarts" type="button">
              <span class="material-icons font--sm">delete</span>
              刪除全部
            </button>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" width="120" class="text-center d-none d-md-table-cell">縮圖</th>
                  <th scope="col" class="text-center">商品名稱</th>
                  <th scope="col" width="150" class="text-center">數量</th>
                  <th scope="col" width="100" class="text-center">單價</th>
                  <th scope="col" class="text-center">金額</th>
                  <th scope="col" class="text-center">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item of carts" :key="item.id">
                  <th scope="row gx-0" class="text-center d-none d-md-table-cell">
                    <img :src="item.product.imageUrl" alt="產品圖片" class="img__cart">
                  </th>
                  <td class="text-center">{{ item.product.title }}</td>
                  <td class="text-center">
                    <span class="d-md-none">{{ item.qty }}</span>
                    <div class="d-none d-md-flex justify-content-center">
                      <a href="#" class="btn btn-outline-light d-flex align-items-center text-dark border-1 border-secondary rounded-0 rounded-start" @click.prevent="updateCart('minus', item)">
                        -
                      </a>
                      <p class="border border-1 border-dark text-dark text-center input--num__cart mb-0 d-flex justify-content-center align-items-center">{{ item.qty }}</p>
                      <a href="#" class="btn btn-outline-light d-flex align-items-center text-dark border-1 border-secondary rounded-0 rounded-end" @click.prevent="updateCart('plus', item)">
                        +
                      </a>
                    </div>
                  </td>
                  <td class="text-center">NT${{ addComma(item.product.price) }}</td>
                  <td class="text-center">NT${{ addComma(item.total) }}</td>
                  <td class="text-center">
                    <button type="button" class="btn btn-sm btn-danger text-white" @click="deleteCart(item)">
                        <span class="material-icons font--sm">delete</span>
                        <span class="d-none d-md-inline-block">刪除</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex flex-column align-items-end pe-4 mb-5">
            <p class="h6">商品金額：NT${{ addComma(total) }}</p>
            <p class="h5 text-primary mb-3">最終金額：NT${{ addComma(Math.round(finalTotal)) }}</p>
            <div class="input-group mb-3 w--search">
              <input type="text" class="form-control" placeholder="coupon" aria-label="coupon" aria-describedby="coupon-btn" v-model="couponValue">
              <button class="btn btn-outline-secondary" type="button" id="coupon-btn" @click="useCoupon">套用優惠券</button>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <router-link to="/products" class="btn btn-outline-secondary d-flex align-items-center">
              <span class="material-icons">chevron_left</span>
              返回購物
            </router-link>
            <router-link to="/form" class="btn btn-secondary d-flex align-items-center">
              填寫資料
              <span class="material-icons">navigate_next</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- suggest -->
    <div class="container-lg border-5 border--top--purple pt-3 pb-5">
      <h3 class="h2 text-center mb-5">你可能也會想購買</h3>
      <div class="row gx-0">
        <Swiper
          :slides-per-view="slideNum"
          :space-between="30"
          :autoplay='
          {
            "delay": 4000,
            "disableOnInteraction": false
          }'
        >
          <Swiper-slide class="col-3 mb-5 position-relative" v-for="item of products" :key="item.id">
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
import Loading from '@/components/Front/Loading'
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
  props: ['carts', 'final-total', 'total'],
  emits: ['get-cart'],
  components: {
    Loading,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      isLoading: false,
      fullPage: true,
      couponValue: '',
      qty: 0,
      products: [],
      fullWidth: 0,
      slideNum: 0,
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
      switch (true) {
        case (window.innerWidth > 1200):
          this.slideNum = 4
          break
        case (window.innerWidth > 768):
          this.slideNum = 3
          break
        case (window.innerWidth > 576):
          this.slideNum = 2
          break
        case (window.innerWidth <= 576):
          this.slideNum = 1
          break
      }
    },
    updateCart (action, item) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      if (this.buyNum > 1) {
        action === 'plus' ? (item.qty += 1) : (item.qty -= 1)
      } else {
        action === 'plus' ? (item.qty += 1) : (item.qty -= 0)
      }
      this.axios.put(url, { data: { product_id: item.id, qty: item.qty } })
        .then(() => {
          this.isLoading = false
          this.$emit('get-cart')
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    deleteCart (item) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.axios.delete(url)
        .then(() => {
          this.isLoading = false
          this.$swal({ title: '已成功刪除該商品', icon: 'success' })
          this.$emit('get-cart')
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    deleteAllCarts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`
      this.axios.delete(url)
        .then(() => {
          this.isLoading = false
          this.$swal({ title: '已成功刪除全部商品', icon: 'success' })
          this.$emit('get-cart')
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    useCoupon () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/coupon`
      this.axios.post(url, { data: { code: this.couponValue } })
        .then(res => {
          if (res.data.success) {
            this.$swal({ title: '已套用優惠券', icon: 'success' })
            this.$emit('get-cart')
          } else {
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    addComma (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    getProducts () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          this.products = res.data.products
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    }
  },
  computed: {
    buyNum () {
      return this.qty
    }
  },
  created () {
    this.$emit('get-cart')
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
