<template>
  <div id="couponModal" ref="modal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" v-if="status !== 'delete'">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="status === 'post'">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="title">標題</label>
              <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="tempCoupon.title">
          </div>
            <div class="form-group col-md-6">
              <label for="percent">折價比率</label>
              <input id="percent" type="number" class="form-control" placeholder="請輸入折價比率" v-model="tempCoupon.percent">
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-6">
              <label for="due_date">有效日期</label>
              <input id="due_date" type="date" min="0" class="form-control" placeholder="請輸入有效日期" v-model="tempCoupon.due_date">
            </div>
            <div class="form-group col-md-6">
              <label for="code">優惠碼</label>
              <input id="code" type="text" min="0" class="form-control" placeholder="請輸入優惠碼" v-model="tempCoupon.code">
            </div>
          </div>
          <hr>
          <div class="form-group">
            <div class="form-check">
              <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="tempCoupon.is_enabled">
              <label class="form-check-label" for="is_enabled">是否啟用</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-warning" @click="updateCoupon(tempCoupon)">
            確認
          </button>
        </div>
      </div>
    </div>
    <div class="modal-dialog modal-dialog-centered" v-else>
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delCouponModalLabel" class="modal-title">
            <span>刪除優惠券</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 優惠券(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delCoupon">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
  props: ['isNew', 'status'],
  data () {
    return {
      tempCoupon: {
      },
      image: ''
    }
  },
  methods: {
    updateCoupon (tempCoupon) {
      let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let method = 'post'
      if (!this.isNew) {
        console.log(tempCoupon)
        method = 'put'
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`
      }
      this.tempCoupon.percent = parseInt(this.tempCoupon.percent)
      this.tempCoupon.due_date = Date.parse(this.tempCoupon.due_date) / 1000
      this.$http[method](url, { headers: { 'Access-Control-Allow-Origin': '*' }, data: this.tempCoupon })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.$emit('get-coupon')
            this.modal.hide()
          }
        })
        .catch(err => console.log(err.message))
    },
    delCoupon () {
      this.axios.delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.$emit('get-coupon')
            this.modal.hide()
            this.$swal('Success')
          }
        })
        .catch(err => console.log(err))
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
