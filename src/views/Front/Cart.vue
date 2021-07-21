<template>
  <div>
    <loading v-model:active="isLoading"
      :is-full-page="fullPage">
      <div class="loadingio-spinner-ellipsis-m5cks5164gn">
        <div class="ldio-ujuwlnkwpj">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
    <!-- banner -->
    <div class="bg__cart__banner mb-2">
     <div class="row d-flex justify-content-center align-items-center h-100">
       <div class="col-6 col-lg-4">
         <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
           <h2 class="text-center font--banner mb-0">購物車列表</h2>
         </div>
       </div>
     </div>
    </div>
    <div class="container py-5">
      <!-- step -->
      <div class="position-relative mb-5" v-if="carts.length !== 0">
        <ul class="list-unstyled d-flex w-100 justify-content-evenly step">
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-warning">1</span>
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
      <div class="py-5">
        <div class="bg--light box--shadow rounded p-4 mb-5">
          <!-- 無商品的話 -->
          <div class="d-flex flex-column align-items-center" v-if="carts.length === 0">
            <h3 class="h2 text-center mb-4">此購物車內無商品</h3>
            <router-link class="btn btn--warning d-flex align-items-center w-25 justify-content-center" to="/products">
              <span class="material-icons">shopping_bag</span>
              購物去
            </router-link>
          </div>
          <div class="d-flex justify-content-end mb-3" v-if="carts.length !== 0">
            <button class="btn btn--purple" @click="deleteAllCarts">
              <span class="material-icons font--sm">delete</span>
              刪除全部
            </button>
          </div>
          <div class="table-responsive" v-if="carts.length !== 0">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" width="120" class="text-center">縮圖</th>
                  <th scope="col" class="text-center">商品名稱</th>
                  <th scope="col" width="150" class="text-center">數量</th>
                  <th scope="col" width="100" class="text-center">單價</th>
                  <th scope="col" class="text-center">金額</th>
                  <th scope="col" class="text-center">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item of carts" :key="item.id">
                  <th scope="row" class="text-center">
                    <img :src="item.product.imageUrl" alt="" class="img__cart">
                  </th>
                  <td class="text-center">{{ item.product.title }}</td>
                  <td class="text-center">
                    <span class="d-md-none">{{ item.qty }}</span>
                    <div class="d-none d-md-flex justify-content-center">
                      <a href="#" class="btn btn-outline-light d-flex align-items-center text-dark border-1 border-secondary " @click.prevent="updateCart('minus', item)">
                        -
                      </a>
                      <p class="border border-1 border-dark text-dark text-center input--num__cart mb-0 d-flex justify-content-center align-items-center">{{ item.qty }}</p>
                      <a href="#" class="btn btn-outline-light d-flex align-items-center text-dark border-1 border-secondary " @click.prevent="updateCart('plus', item)">
                        +
                      </a>
                    </div>
                  </td>
                  <td class="text-center">NT${{ item.product.price }}</td>
                  <td class="text-center">NT${{ item.total }}</td>
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
          <div class="d-flex flex-column align-items-end pe-4 mb-5" v-if="carts.length !== 0">
            <p class="h6">商品金額：NT${{ total }}</p>
            <p class="h5 text--purple mb-3">最終金額：NT${{ Math.round(finalTotal) }}</p>
            <div class="input-group mb-3 w--search">
              <input type="text" class="form-control" placeholder="coupon" aria-label="coupon" aria-describedby="coupon-btn" v-model="couponValue">
              <button class="btn btn-outline-secondary" type="button" id="coupon-btn" @click="useCoupon">套用優惠券</button>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between" v-if="carts.length !== 0">
          <router-link to="/products" class="btn btn-outline-dark d-flex align-items-center">
            <span class="material-icons">chevron_left</span>
            返回購物
          </router-link>
          <router-link to="/form" class="btn btn-outline-dark d-flex align-items-center">
            填寫資料
            <span class="material-icons">navigate_next</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
export default {
  props: ['carts', 'final-total', 'total'],
  components: {
    Loading
  },
  data () {
    return {
      isLoading: false,
      fullPage: true,
      couponValue: ''
    }
  },
  methods: {
    updateCart (action, item) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      if (this.buyNum > 1) {
        action === 'plus' ? (item.qty += 1) : (item.qty -= 1)
      } else {
        action === 'plus' ? (item.qty += 1) : (item.qty -= 1)
      }
      this.axios.put(url, { data: { product_id: item.id, qty: item.qty } })
        .then(res => {
          this.isLoading = false
          console.log(res)
          this.$emit('get-cart')
        })
        .catch(err => console.log(err))
    },
    deleteCart (item) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.axios.delete(url)
        .then(res => {
          this.isLoading = false
          console.log(res)
          this.$swal({ title: '已成功刪除該商品', icon: 'success' })
          this.$emit('get-cart')
        })
        .catch(err => console.log(err))
    },
    deleteAllCarts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`
      this.axios.delete(url)
        .then(res => {
          this.isLoading = false
          console.log(res)
          this.$swal({ title: '已成功刪除全部商品', icon: 'success' })
          this.$emit('get-cart')
        })
        .catch(err => console.log(err))
    },
    useCoupon () {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/coupon`
      this.axios.post(url, { data: { code: this.couponValue } })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.$swal({ title: '已套用優惠券', icon: 'success' })
            this.$emit('get-cart')
          } else {
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    buyNum () {
      return this.qty
    }
  },
  created () {
    this.$emit('get-cart')
  }
}
</script>
