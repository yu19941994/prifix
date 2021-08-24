<template>
<div>
  <Loading v-model:active="isLoading"
    :is-full-page="fullPage">
  </Loading>
  <!-- banner -->
  <div class="bg__save__banner mb-2">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-6 col-lg-4">
        <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
          <h2 class="text-center font--banner mb-0">我的珍藏</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-5">
    <nav aria-label="breadcrumb mb-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/" class="text-secondary text-decoration-none">首頁</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">我的珍藏</li>
      </ol>
    </nav>
    <div class="py-5">
      <div class="bg--light box--shadow rounded p-4 mb-5">
        <!-- 無商品的話 -->
        <div class="d-flex flex-column align-items-center" v-if="filterProducts.length === 0">
          <h3 class="h2 text-center mb-4">我的珍藏清單中無商品</h3>
          <router-link class="btn btn-dark d-flex align-items-center w--noneProduct justify-content-center" to="/products">
            <span class="material-icons">shopping_bag</span>
            查看商品去
          </router-link>
        </div>
        <ul class="row d-flex list-unstyled">
          <li class="col-12 col-md-6 col-lg-4 mb-3" v-for="item of filterProducts" :key="item.id">
            <div class="card position-relative box--shadow">
              <button class="btn btn-dark top-0 end-0 zindex--cat position-absolute border-0" @click="addFavoriteHandler(item)" type="button">
                <span class="material-icons text-danger" v-if="myFavorite.includes(item.id)">bookmark</span>
                <span class="material-icons text-white" v-else>bookmark</span>
              </button>
              <span class="badge bg-warning text-white position-absolute top--10 start--10 zindex--cat d-flex">{{ item.category }}</span>
              <div class="p-3">
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Loading from '@/components/Front/Loading'
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
    Loading
  },
  data () {
    return {
      isLoading: false,
      fullPage: true,
      myFavorite: storageMethods.get() || [],
      products: []
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
    getAllProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.products = res.data.products
          }
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    }
  },
  computed: {
    filterProducts () {
      const arr = []
      this.products.forEach(item => {
        if (this.myFavorite.includes(item.id)) {
          arr.push(item)
        }
      })
      return arr
    }
  },
  created () {
    this.getAllProducts()
  }
}
</script>
