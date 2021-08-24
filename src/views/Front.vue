<template>
  <div class="front">
    <Loading v-model:active="isLoading"
      :is-full-page="fullPage">
    </Loading>
    <Navbar :carts="carts"></Navbar>
     <div class="content">
      <router-view
      @goto-top="goToTop"
      @add-cart="addCart"
      @get-cart="getCarts"
      :carts="carts"
      :final-total="finalTotal"
      :total="total"
      @on-submit="onSubmit"/>
      <Footer @goto-top="goToTop"></Footer>
     </div>
  </div>
</template>

<script>
import Navbar from '@/components/Front/Navbar'
import Footer from '@/components/Front/Footer'
import Loading from '@/components/Front/Loading'
export default {
  components: {
    Navbar,
    Footer,
    Loading
  },
  data () {
    return {
      isLoading: false,
      fullPage: true,
      carts: [],
      finalTotal: 0,
      total: 0
    }
  },
  methods: {
    goToTop (smooth) {
      window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
    },
    addCart (item, num) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
      this.axios.post(url, { data: { product_id: item.id, qty: num } })
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.$swal({ title: '成功加入購物車', icon: 'success' })
            this.getCarts()
          }
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    getCarts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.carts = res.data.data.carts
            this.finalTotal = res.data.data.final_total
            this.total = res.data.data.total
          }
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    onSubmit (form) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, { data: form })
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.$swal({ title: '已成功建立訂單', icon: 'success' })
            this.$router.push({ name: 'paid', query: { order_id: res.data.orderId } })
            this.getCarts()
          }
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    }
  },
  mounted () {
    this.goToTop(false)
  },
  created () {
    this.getCarts()
  }
}
</script>
