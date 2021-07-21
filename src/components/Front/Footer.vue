<template>
  <!-- 訂閱 -->
  <div class="bg--light py-5">
    <h2 class="h4 text-center py-2 px-3">訂閱 PRIFIX ，接收最新影音及平權訊息！</h2>
    <div class="row d-flex justify-content-center">
      <div class="col-8 col-md-6">
        <Form ref="form" v-slot="{ errors }" @submit="onSubmit">
          <div class="input-group mb-3">
            <label for="email"></label>
            <Field class="form-control rounded"
                placeholder="請輸入電子信箱" id="email"
                name="email"
                :class="{ 'is-invalid': errors['email'] }" rules="email|required"></Field>
            <!-- <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage> -->
            <button class="btn btn-primary" type="button" id="subscribeEmail">訂閱</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer>
    <div class="bg--dark__100 py-3 position-relative">
      <button class="btn btn--warning position-absolute bottom--10 end--10 py-1 px-2" @click="$emit('goto-top', true)">
        <span class="material-icons text--brown">navigation</span>
      </button>
      <div class="container-lg">
        <ul class="list-unstyled d-flex justify-content-evenly">
          <li>
            <router-link to="/" aria-current="page" class="text-decoration-none"><span class="nav__home nav-link active font__menu text-white">首頁</span></router-link>
          </li>
          <li>
            <router-link to="/products" class="text-decoration-none"><span class="nav__home nav-link font__menu text-white">影音商品</span></router-link>
          </li>
          <li>
            <router-link to="/coupon" class="text-decoration-none"><span class="nav__home nav-link font__menu text-white">優惠活動</span></router-link>
          </li>
          <li>
            <router-link to="/cart" class="text-decoration-none"><span class="nav__home nav-link font__menu text-white">購物車</span></router-link>
          </li>
        </ul>
        <ul class="list-unstyled d-flex flex-column align-items-center mb-3">
          <li>
            <a href="#" class="text-decoration-none text-white font--sm">住址：台北市松山區民生東路五段184號</a>
          </li>
          <li>
            <a href="tel:+026666123" class="text-decoration-none text-white font--sm">電話：02-666-6123</a>
          </li>
          <li>
            <a href="mailto:prifix@gmail.com" class="text-decoration-none text-white font--sm">電子信箱：prifix@gmail.com</a>
          </li>
        </ul>
        <div class="row d-flex justify-content-center">
          <div class="col-4">
            <ul class="list-unstyled d-flex justify-content-evenly">
              <li>
                <a href="https://www.facebook.com/yu19941994" class="text-decoraion-none text-white font--sm btn">
                  <span class="material-icons">facebook</span>
                </a>
              </li>
              <li>
                <a href="#" class="text-decoraion-none text-white font--sm btn">
                  <span class="material-icons">smart_display</span>
                </a>
              </li>
              <li>
                <a href="#" class="text-decoraion-none text-white font--sm btn">
                  <span class="material-icons">near_me</span>
                </a>
              </li>
              <li>
                <a href="#" class="text-decoraion-none text-white font--sm btn">
                  <span class="material-icons">chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg--black py-3">
      <div class="text-center text-white font--sm d-flex justify-content-center align-items-center flex-column flex-sm-row">
        <span class="me-2 mb-2 mb-sm-0">Copyright  ©  2021  HsienYu  個人作業使用，無商業行為</span>
        <router-link to="/admin" class="btn btn-outline-light btn-sm d-flex align-items-center">
          <span class="material-icons me-1">face</span>
          <span>進入後台</span>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  emits: ['goto-top'],
  methods: {
    onSubmit () {
      console.log('ya')
    }
  }
}
</script>
