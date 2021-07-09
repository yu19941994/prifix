<template>
  <nav id="sidebarMenu" class="col-12 col-md-3 col-lg-2 bg--dark__100 sidebar w-25">
    <div class="pt-3 px-2">
      <div class="d-flex justify-content-center flex-column align-items-center">
        <img src="@/assets/images/avatar.jpg" alt="avatar" class="avatar d-block mb-2">
        <h1 class="text--gray h6">管理者</h1>
      </div>
      <!--hi-->
      <ul class="nav flex-column mb-2 align-items-center">
        <li class="nav-item">
          <router-link to="/admin/products" class="text-decoration-none">
            <a href="#" class="nav-link text-white font--sm text-decoration-none d-flex align-items-center"
              :class="{'active': choose === 'p'}"
              @click="choose='p'">
              <span class="material-icons text--md">
                movie_filter
              </span>
              <span class="px-2">產品列表</span>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/orders" class="text-decoration-none">
            <a href="#" class="nav-link text-white font--sm text-decoration-none d-flex align-items-center"
              :class="{'active': choose === 'o'}"
              @click="choose='o'">
              <span class="material-icons text--md">
                list_alt
              </span>
              <span class="px-2">訂單列表</span>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/coupons" class="text-decoration-none">
            <a href="#" class="nav-link text-white font--sm text-decoration-none d-flex align-items-center"
              :class="{'active': choose === 'c'}"
              @click="choose='c'">
              <span class="material-icons text--md">
                confirmation_number
              </span>
              <span class="px-2">優惠券列表</span>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      choose: 'p'
    }
  }
}
</script>
