<template>
  <div>
    <Loading v-model:active="isLoading"
      :is-full-page="fullPage">
    </Loading>
    <!-- banner -->
    <div class="bg__cart__banner mb-2">
     <div class="row d-flex justify-content-center align-items-center h-100">
       <div class="col-6 col-lg-4">
         <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
           <h2 class="text-center font--banner mb-0">結帳付款</h2>
         </div>
       </div>
     </div>
    </div>
     <div class="container py-5">
      <!-- step -->
      <div class="position-relative mb-5">
        <ul class="list-unstyled d-flex w-100 justify-content-evenly step">
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">1</span>
            <span class="p mb-0">確認商品</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">2</span>
            <span class="p mb-0">填寫資料</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-primary">3</span>
            <span class="p mb-0">付款結帳</span>
          </li>
        </ul>
      </div>
      <!-- paid info -->
      <div class="d-flex justify-content-center">
        <div class="w-50">
          <div class="py-5">
            <div class="bg--light box--shadow rounded p-4 mb-5">
              <div class="row">
                <div class="col-12 mb-4 mb-md-0">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" width="120" class="text-center"><h3 class="h4 text-center">購物清單</h3></th>
                        <th scope="col"></th>
                        <th scope="col" width="150"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item of products" :key="item.id">
                        <th scope="row" class="text-center">
                          <img :src="item[1].product.imageUrl" alt="產品圖片" class="img__cart">
                        </th>
                        <td class="text-center">{{ item[1].product.title }}</td>
                        <td class="text-center">{{ item[1].qty }}</td>
                        <td class="text-center">NT${{ addComma(Math.round(item[1].final_total)) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-12">
                  <table class="table" v-if="order.user">
                    <thead>
                      <tr>
                        <th scope="col" width="120" class="text-center"><h3 class="h4 text-center">訂購資訊</h3></th>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="col" width="120" class="text-center">收件人姓名</th>
                        <td>{{ order.user.name }}</td>
                      </tr>
                      <tr>
                        <th scope="col" width="120" class="text-center">收件人電話</th>
                        <td>{{ order.user.tel }}</td>
                      </tr>
                      <tr>
                        <th scope="col" width="120" class="text-center">收件人地址</th>
                        <td>{{ order.user.address }}</td>
                      </tr>
                      <tr>
                        <th scope="col" width="120" class="text-center">電子郵件</th>
                        <td>{{ order.user.email }}</td>
                      </tr>
                      <tr>
                        <th scope="col" width="120" class="text-center">訂購日期</th>
                        <td>{{ timestampToDate(order.create_at) }}</td>
                      </tr>
                      <tr>
                        <th scope="col" width="120" class="text-center">付款狀態</th>
                        <td>
                          <span class="text-danger" v-if="order.is_paid === false">未付款</span>
                          <span class="text-success" v-else>已付款</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between" v-if="order.is_paid === false">
              <router-link to="/form" class="btn btn-outline-dark d-flex align-items-center">
                <span class="material-icons">chevron_left</span>
                回上一步
              </router-link>
              <button class="btn btn--warning d-flex align-items-center" @click="pay" type="button">
                付款結帳
                <span class="material-icons">paid</span>
              </button>
            </div>
            <div class="d-flex justify-content-end" v-if="order.is_paid === true">
              <router-link to="/products" class="btn btn-primary d-flex align-items-center">
                <span class="material-icons">shopping_bag</span>
                繼續購物
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Front/Loading'
export default {
  components: {
    Loading
  },
  data () {
    return {
      order: {},
      order_id: '',
      product_id: [],
      products: [],
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order/${this.$route.query.order_id}`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          this.product_id = []
          this.products = []
          this.order = res.data.order
          this.order_id = this.$route.query.order_id
          Object.entries(this.order.products).forEach(item => {
            this.products.push(item)
          })
          this.product_id.forEach(item => {
            this.products.push(this.order.products[item])
          })
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    pay () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/pay/${this.$route.query.order_id}`
      this.axios.post(url)
        .then(() => {
          this.$swal({ title: '已成功付款', icon: 'success' })
          this.getOrder()
        })
        .catch(err => {
          this.$swal({ title: err, icon: 'error' })
        })
    },
    timestampToDate (timestamp) {
      if (timestamp) {
        const dd = new Date(timestamp * 1000)
        return `${dd.getFullYear()}-${this.adjustZero(dd.getMonth() + 1)}-${this.adjustZero(dd.getDate())}`
      }
    },
    adjustZero (num) {
      return num < 10 ? `0${num}` : `${num}`
    },
    addComma (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  created () {
    this.getOrder()
  }
}
</script>
