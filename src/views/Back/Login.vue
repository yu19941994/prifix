<template>
  <div class="poistion-relative">
    <div class="login__bg">
    </div>
    <div class="admin__logo position-absolute">
      <img src="@/assets/images/white_logo.png" alt="admin_logo" width="130">
    </div>
    <div class="bg--dark w--login position-absolute form__login rounded box--shadow__form">
      <h1 class="text--warning text-center h4 py-2 mb-0">會員登入</h1>
      <div class="mb-3 text-white border--top px-4 py-1">
        <label for="profile" class="form-label font--sm">帳號</label>
        <input type="email" class="form-control" id="profile" placeholder="請輸入帳號" v-model="userprofile.username">
      </div>
      <div class="mb-3 text-white px-4 pb-3">
        <label for="password" class="form-label font--sm">密碼</label>
        <input type="password" class="form-control" id="password" placeholder="請輸入密碼" v-model="userprofile.password">
      </div>
      <p class="mb-0 text-danger font--sm text-center" v-if="errorAlert">帳號或密碼輸入有誤唷！</p>
      <div class="d-flex justify-content-between px-4 py-3">
        <button type="button" class="btn btn-secondary w-47" @click="goToFront">返回前台</button>
        <button type="button" class="btn btn--warning w-47" @click="login">登入後台</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userprofile: {
        username: '',
        password: ''
      },
      errorAlert: false
    }
  },
  methods: {
    login () {
      const url = `${process.env.VUE_APP_URL}/admin/signin`
      this.axios.post(url, this.userprofile)
        .then(res => {
          if (res.data.success) {
            // this.errorAlert = false
            const { token, expired } = res.data
            document.cookie = `myToken = ${token}; expires = ${new Date(expired)}`
            this.$router.push('/admin')
          } else {
            this.errorAlert = true
          }
        })
        .catch(err => console.log(err))
    },
    goToFront () {
      this.$router.push('/')
    }
  }
}
</script>
