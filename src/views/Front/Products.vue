<template>
 <div>
   <!-- banner -->
   <div class="bg__product__banner mb-5">
     <div class="row d-flex justify-content-center align-items-center h-100">
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
          <li class="list-group-item border border-dark" v-for="(item, key, index) of category" :key="index"
          :class="{ 'active': choose === key }" @click="chooseHandler(key)">
            <p class="text-center mb-0">{{ key }}（{{ item }}）</p>
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
                <span class="badge bg-warning text-white position-absolute top--10 start--10 zindex--cat d-flex">{{ item.category }}</span>
                <div class="p-3">
                  <router-link class="img__card__products overflow-hidden position-relative d-block" :to="`/productDetail/${item.id}`">
                    <img :src="item.imageUrl" class="card-img-top img__card__products__inside" alt="...">
                  </router-link>
                </div>
                <div class="card-body pt-1">
                  <h3 class="card-title text-center h5">{{ item.title }}</h3>
                  <p class="card-text text-center h5 fw-bolder">${{ item.price }}</p>
                  <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-primary d-flex align-items-center" @click.prevent="addCart(item)">
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
export default {
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      category: {},
      choose: '全部商品',
      productWithPagination: [],
      pagination: {},
      search: '',
      buyNum: 1
    }
  },
  methods: {
    getAllProducts () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(url)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.products = res.data.products
            this.calculateCategories()
          }
        })
        .catch(err => console.log(err))
    },
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.axios.get(url)
        .then(res => {
          if (res.data.success) {
            this.productWithPagination = res.data.products
            this.pagination = res.data.pagination
          }
        })
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
      console.log(this.category)
    },
    chooseHandler (key) {
      this.choose = key
      console.log(this.filterProducts)
    },
    selectHandler (e) {
      this.choose = e.target.value
      console.log(e.target.value)
    },
    addCart (item) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
      this.axios.post(url, { data: { product_id: item.id, qty: this.buyNum } })
        .then(res => {
          console.log(res)
          this.$swal({ title: '成功加入購物車', icon: 'success' })
          // this.buyNum = 1
        })
        .catch(err => console.log(err))
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
