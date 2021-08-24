<template>
  <nav class="navbar navbar-dark sticky-top bg--dark__100 flex-md-nowrap px-3 shadow">
    <div class="d-flex w-25 justify-content-between">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/images/white_logo.png" alt="dashboard_logo" width="80" class="d-block">
      </router-link>
      <button type="button" class="btn btn-secondary pt-1 pb-0 px-2" @click="rotateBtn" :style="{ transform:  rotate90 }" tyle="transition-duration: 2s">
        <span class="material-icons font--md">tune</span>
      </button>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <button type="button" class="btn btn--warning d-flex align-items-center" @click="logOut">
          <span class="material-icons font--md">logout</span>
          登出
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      rotate90: 'rotate(0deg)'
    }
  },
  methods: {
    rotateBtn () {
      this.rotate90 === 'rotate(0deg)' ? (this.rotate90 = 'rotate(90deg)') : (this.rotate90 = 'rotate(0deg)')
      this.$emit('toggle-side')
    },
    logOut () {
      const url = `${process.env.VUE_APP_URL}/logout`
      this.axios.post(url)
        .then(res => {
          document.cookie = 'myToken=;expires=;'
          this.$swal({ title: '已登出', icon: 'success' })
          this.$router.push('/login')
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    }
  }
}
</script>
