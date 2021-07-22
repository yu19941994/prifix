<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fix-top zindex__banner">
    <div class="container-fluid">
      <h1 class="px-2">
        <a class="navbar-brand textindent__title d-block" href="#"></a>
      </h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav list-unstyled ms-auto d-flex align-items-center">
          <li class="nav-item px-2">
            <router-link to="/products" class="text-decoration-none">
              <span class="nav__home nav-link font__menu"
              :class="{'active': choose === 'p'}"
              @click="choose='p'">影音商品</span>
            </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/coupon" class="text-decoration-none">
              <span class="nav__home nav-link font__menu"
              :class="{'active': choose === 'c'}"
              @click="choose='c'">優惠活動</span>
            </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/save" class="nav-link text-decoration-none">
              <span class="material-icons nav__home"
              :class="{'active': choose === 'save'}"
              @click="choose='save'">bookmark</span>
            </router-link>
          </li>
          <li class="nav-item px-2 position-relative">
            <div class="bg-danger p--circle rounded-circle text-center font--xs position-absolute end--4" v-if="carts.length !== 0">{{ carts.length }}</div>
            <router-link to="/cart" class="nav-link text-decoration-none">
              <span class="material-icons nav__home"
              :class="{'active': choose === 'cart'}"
              @click="choose='cart'">shopping_cart</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['carts'],
  data () {
    return {
      choose: ''
    }
  }
}
</script>
