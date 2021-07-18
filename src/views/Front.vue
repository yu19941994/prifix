<template>
  <div>
    <Navbar></Navbar>
     <div class="contain">
      <router-view/>
      <Footer></Footer>
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
  }
}
</script>
