<template>
  <div class="position-relative">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
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
              <router-link to="/" aria-current="page" class="text-decoration-none"><span class="nav__home nav-link active font__menu">首頁</span></router-link>
            </li>
            <!-- <li class="nav-item px-2">
              <router-link to="/blog" class="text-decoration-none"><span class="nav__home nav-link font__menu">部落格</span></router-link>
            </li> -->
            <li class="nav-item px-2">
              <router-link to="/products" class="text-decoration-none"><span class="nav__home nav-link font__menu">商品</span></router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/coupon" class="text-decoration-none"><span class="nav__home nav-link font__menu">優惠活動</span></router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/cart" class="nav-link text-decoration-none">
                <span class="material-icons nav__home">shopping_cart</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>

<script>
export default {
}
</script>
