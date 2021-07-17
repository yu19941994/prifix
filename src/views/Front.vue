<template>
  <div class="position-relative">
    <Navbar></Navbar>
  </div>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Front/Navbar'
import Footer from '@/components/Front/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
