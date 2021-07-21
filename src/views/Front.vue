<template>
  <div class="front">
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
    <Navbar :carts="carts"></Navbar>
     <div class="content">
      <router-view @goto-top="goToTop" @add-cart="addCart" @get-cart="getCarts" :carts="carts" :final-total="finalTotal" :total="total"/>
      <Footer @goto-top="goToTop"></Footer>
     </div>
  </div>
</template>

<script>
import Navbar from '@/components/Front/Navbar'
import Footer from '@/components/Front/Footer'
import Loading from 'vue-loading-overlay'
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
          console.log(res)
          if (res.data.success) {
            this.$swal({ title: '成功加入購物車', icon: 'success' })
            this.getCarts()
          }
          // this.buyNum = 1
        })
        .catch(err => console.log(err))
    },
    getCarts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          console.log(res)
          if (res.data.success) {
            this.carts = res.data.data.carts
          }
        })
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
