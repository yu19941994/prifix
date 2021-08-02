<template>
  <div class="bg--dark__300">
    <Navbar @toggle-side="toggleSidebar"></Navbar>
    <div class="position-relative">
      <Sidebar :style="{ transform:  transX}" style="transition-duration: 0.8s"></Sidebar>
      <main role="main" class="position-absolute main h-100 w-100">
        <router-view></router-view>
      </main>
    </div>
   </div>
</template>

<script>
import Sidebar from '@/components/Back/Sidebar'
import Navbar from '@/components/Back/Navbar'
export default {
  components: {
    Sidebar,
    Navbar
  },
  data () {
    return {
      transX: 'translateX(-100%)'
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const api = `${process.env.VUE_APP_URL}/api/user/check`
        this.axios.post(api)
          .then(res => {
            if (res.data.success) {
              this.checkSuccess = true
            } else {
              this.$swal({ title: res.data.message, icon: 'error' })
              this.$router.push('/login')
            }
          })
          .catch(err => console.log(err))
      } else {
        this.$router.push('/login')
      }
    },
    toggleSidebar () {
      this.transX === 'translateX(-100%)' ? (this.transX = 'translateX(0%)') : (this.transX = 'translateX(-100%)')
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
