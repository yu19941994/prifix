<template>
  <div class="front">
    <Navbar></Navbar>
     <div class="content">
      <router-view @goto-top="goToTop"/>
      <Footer @goto-top="goToTop"></Footer>
     </div>
  </div>
  <!-- <div class="contain">
    <router-view/>
  </div>
  <Footer></Footer> -->
</template>

<script>
import Navbar from '@/components/Front/Navbar'
import Footer from '@/components/Front/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    goToTop (smooth) {
      window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
    }
  },
  mounted () {
    this.goToTop(false)
  }
}
</script>
