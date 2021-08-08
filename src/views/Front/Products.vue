<template>
  <div>
    <loading v-model:active="isLoading"
      :is-full-page="fullPage">
    </loading>
   <!-- banner -->
    <div class="bg__product__banner mb-5">
      <div class="row d-flex justify-content-center align-items-center h-100 mx-0">
        <div class="col-6 col-lg-4">
          <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
            <h2 class="text-center font--banner mb-0">影音商品</h2>
          </div>
        </div>
      </div>
    </div>
   <!-- breadcrumb -->
    <div class="container-lg">
      <nav aria-label="breadcrumb mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-secondary text-decoration-none">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/products" class="text-secondary text-decoration-none">影音商品</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">全部商品</li>
        </ol>
      </nav>
    </div>
   <!-- product -->
    <div class="container-lg">
      <div class="row">
        <div class="col-12 col-md-3 mb-4 mb-md-0">
          <ul class="list-unstyled list-group position-sticky top--list d-none d-md-block">
            <li class="list-group-item border border-dark hover--cat" v-for="(item, key, index) of category" :key="index"
            :class="{ 'active': choose === key }">
              <a class="text-decoration-none text-dark text-center mb-0 d-block" href="#" @click.prevent="chooseHandler(key)">{{ key }}（{{ item }}）</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-9">
          <div class="d-flex justify-content-end">
            <div class="input-group mb-3 w--search">
              <label for="videoName"></label>
              <input type="text" class="form-control rounded" placeholder="&#128269;  請輸入片名" aria-label="videoName"
              aria-describedby="button" id="videoName" v-model="search">
            </div>
          </div>
          <select name="list" id="list" @change="selectHandler($event)" class="form-select d-md-none border-1 border-dark mb-5" aria-label="list select">
            <option :value="key" v-for="(item, key, index) of category" :key="index">{{ key }}</option>
          </select>
          <ul class="row list-unstyled">
            <li class="col-12 col-sm-6 col-xl-4 mb-3" v-for="item of searchProducts" :key="item.id">
              <div class="card position-relative box--shadow">
                <button class="btn bg-transparent text-white top-0 end-0 zindex--cat position-absolute border-0" @click="addFavoriteHandler(item)" type="button">
                  <span class="material-icons text-danger" v-if="myFavorite.includes(item.id)">bookmark</span>
                  <span class="material-icons text-white" v-else>bookmark</span>
                </button>
                <span class="badge bg-secondary text-white position-absolute top-0 start-0 zindex--cat d-flex p-2">{{ item.category }}</span>
                <div class="mb-2">
                  <router-link class="img__card__products overflow-hidden position-relative d-block" :to="`/productDetail/${item.id}`">
                    <img :src="item.imageUrl" class="card-img-top img__card__products__inside" alt="...">
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
          <div class="d-flex justify-content-end">
            <Pagination :page="pagination" @get-page="getProducts" v-if="search === '' && choose === '全部商品'"></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
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
  components: {
    Pagination,
    Loading
  },
  data () {
    return {
      products: [],
      category: {},
      choose: '全部商品',
      productWithPagination: [],
      pagination: {},
      search: '',
      buyNum: 1,
      isLoading: false,
      fullPage: true,
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
    getAllProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.products = res.data.products
            this.calculateCategories()
          }
        })
        // .catch(err => console.log(err))
    },
    getProducts (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.$emit('goto-top', false)
            this.productWithPagination = res.data.products
            this.pagination = res.data.pagination
          }
        })
        // .catch(err => console.log(err))
    },
    calculateCategories () {
      this.category['全部商品'] = this.products.length
      this.products.forEach(item => {
        const cat = item.category
        if (!(cat in this.category)) {
          this.category[cat] = 1
        } else {
          this.category[cat]++
        }
      })
    },
    chooseHandler (key) {
      this.choose = key
    },
    selectHandler (e) {
      this.choose = e.target.value
    }
  },
  computed: {
    filterProducts () {
      return this.choose === '全部商品' ? this.productWithPagination : this.products.filter(item => item.category === this.choose)
    },
    searchProducts () {
      if (this.search !== '') {
        if (this.filterProducts === this.productWithPagination) {
          return this.products.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
        } else {
          return this.filterProducts.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
        }
      } else {
        return this.filterProducts
      }
    }
  },
  created () {
    this.getAllProducts()
    this.getProducts()
  }
}
</script>
