<template>
  <div>
    <Loading v-model:active="isLoading"
      :is-full-page="fullPage">
    </Loading>
    <!-- banner -->
    <div class="bg__cart__banner mb-2">
     <div class="row d-flex justify-content-center align-items-center h-100 gx-0">
       <div class="col-6 col-lg-4">
         <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
           <h2 class="text-center font--banner mb-0">填寫資料</h2>
         </div>
       </div>
     </div>
    </div>
    <div class="container py-5">
      <nav aria-label="breadcrumb mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-secondary text-decoration-none">首頁</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">購物車列表</li>
        </ol>
      </nav>
      <!-- step -->
      <div class="position-relative mb-5">
        <ul class="list-unstyled d-flex w-100 justify-content-evenly step">
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">1</span>
            <span class="p mb-0">確認商品</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-dark text-white">2</span>
            <span class="p mb-0">填寫資料</span>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">3</span>
            <span class="p mb-0">付款結帳</span>
          </li>
        </ul>
      </div>
      <!-- shoppinglist -->
      <div class="container-lg">
        <div class="d-flex justify-content-center">
          <div class="w--form">
            <Form ref="form" v-slot="{ errors }" @submit="$emit('on-submit', form)">
              <div class="py-5">
                <div class="bg--light box--shadow rounded p-4 mb-5">
                    <div class="mb-3">
                      <label for="name">姓名</label>
                      <Field id="name" name="姓名" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        placeholder="請輸入姓名" rules="required" v-model="form.user.name"></Field>
                      <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-3">
                      <label for="phone">電話</label>
                      <Field id="phone" name="電話" type="tel" class="form-control"
                        :class="{ 'is-invalid': errors['電話'] }"
                        placeholder="請輸入電話" :rules="isPhone" v-model="form.user.tel"></Field>
                      <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-3">
                      <label for="address">地址</label>
                      <Field id="address" name="地址" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['地址'] }"
                        placeholder="請輸入地址" rules="required" v-model="form.user.address"></Field>
                      <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-3">
                      <label for="emailUser">電子信箱</label>
                      <Field id="emailUser" name="電子信箱" type="email" class="form-control"
                        :class="{ 'is-invalid': errors['電子信箱'] }"
                        placeholder="請輸入電子信箱" rules="email|required" v-model="form.user.email"></Field>
                      <ErrorMessage name="電子信箱" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-3">
                      <label for="payment_method">付款方式</label>
                      <Field name="付款方式" id="payment_method" as="select" class="form-control"
                        :class="{ 'is-invalid': errors['付款方式'] }" rules="required" v-model="form.payment_method">
                        <option value="credit_card">信用卡</option>
                        <option value="atm">ATM匯款</option>
                        <option value="cash">貨到付款</option>
                      </Field>
                      <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-5">
                      <label for="message" class="form-label">留言</label>
                      <textarea id="message" class="form-control" cols="30" rows="10"></textarea>
                    </div>
                    <div class="d-flex justify-content-between">
                      <router-link to="/cart" class="btn btn-outline-secondary d-flex align-items-center">
                        <span class="material-icons">chevron_left</span>
                        回上一步
                      </router-link>
                      <button class="btn btn-secondary d-flex align-items-center" type="submit">
                        送出訂單
                        <span class="material-icons">navigate_next</span>
                      </button>
                    </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Front/Loading'
export default {
  emits: ['on-submit'],
  components: {
    Loading
  },
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: '',
        payment_method: ''
      },
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需為09開頭且為10碼數字'
    },
    onSubmit (form) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, { data: form })
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.$refs.form.resetForm()
            this.$swal({ title: '已成功建立訂單', icon: 'success' })
            this.$router.push({ name: 'paid', query: { order_id: res.data.orderId } })
          }
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    }
  }
}
</script>
