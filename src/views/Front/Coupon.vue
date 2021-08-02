<template>
  <div>
    <!-- banner -->
    <div class="bg__coupon__banner mb-5">
     <div class="row d-flex justify-content-center align-items-center h-100">
       <div class="col-6 col-lg-4">
         <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
           <h2 class="text-center font--banner mb-0">優惠活動</h2>
         </div>
       </div>
     </div>
    </div>
    <!-- breadcrumb -->
   <div class="container-lg">
    <nav aria-label="breadcrumb mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/" class="text-secondary text-decoration-none">首頁</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">優惠活動</li>
    </ol>
    </nav>
    <div class="py-5">
      <div class="bg--light box--shadow rounded p-4 mb-5 d-flex flex-column align-items-center">
        <h3 class="text-center">平權小學堂</h3>
        <p class="text-center mb-4">一起來了解平權知識，全對可獲得優惠券唷！</p>
        <img src="@/assets/images/quiz.jpg" alt="" class="img__quiz mb-4">
        <button class="btn btn-dark d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#quizModal" type="button">
          <span class="material-icons">quiz</span>
          開始測驗
        </button>
        <!-- Modal -->
        <CouponModalCom id="quizModal"></CouponModalCom>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import CouponModalCom from '@/components/Front/CouponModal'
export default {
  components: {
    CouponModalCom
  }
}
</script>
