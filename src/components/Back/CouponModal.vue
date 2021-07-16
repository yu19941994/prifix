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
              <label for="title">標題<span class="text-danger font--xs">(*必填)</span></label>
              <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="tempCoupon.title">
          </div>
            <div class="form-group col-md-6">
              <label for="percent">折價比率<span class="text-danger font--xs">(*必填)</span></label>
              <input id="percent" type="number" min="0" class="form-control" placeholder="請輸入折價比率" v-model="tempCoupon.percent">
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-6">
              <label for="due_date">有效日期<span class="text-danger font--xs">(*必填)</span></label>
              <input id="due_date" type="date" min="0" class="form-control" placeholder="請輸入有效日期" v-model="tempCoupon.due_date">
            </div>
            <div class="form-group col-md-6">
              <label for="code">優惠碼<span class="text-danger font--xs">(*必填)</span></label>
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
    <!-- <div class="modal-dialog modal-dialog-centered" v-else>
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
    </div> -->
    <DelModal @del-item="delCoupon" :temp="tempCoupon" :action="action" :status="status" v-else></DelModal>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import DelModal from './DelModal.vue'
export default {
  props: ['isNew', 'status'],
  components: {
    DelModal
  },
  data () {
    return {
      tempCoupon: {
      },
      image: '',
      action: 'coupon'
    }
  },
  methods: {
    updateCoupon (tempCoupon) {
      this.$emit('is-loading', true)
      let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let method = 'post'
      if (!this.isNew) {
        console.log(tempCoupon)
        method = 'put'
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`
      }
      this.tempCoupon.percent = parseInt(this.tempCoupon.percent)
      this.tempCoupon.due_date = this.DateToTimestamp(tempCoupon.due_date)
      this.$http[method](url, { headers: { 'Access-Control-Allow-Origin': '*' }, data: this.tempCoupon })
        .then(res => {
          this.$emit('is-loading', false)
          console.log(res)
          if (res.data.success) {
            this.$emit('get-coupon')
            this.modal.hide()
            this.$swal({ title: '成功', icon: 'success' })
            this.tempCoupon = {}
          } else {
            let alertStr = ''
            if (res.data.message.includes(' title 欄位為必填')) {
              alertStr += '標題欄位為必填,'
            }
            if (res.data.message.includes(' is_enabled 欄位為必填')) {
              alertStr += '是否啟用欄位為必填,'
            }
            if (res.data.message.includes(' code 欄位為必填')) {
              alertStr += '優惠碼欄位為必填,'
            }
            if (res.data.message.includes('percent 型別錯誤')) {
              alertStr += '折價比率欄位為必填,'
            }
            if (res.data.message.includes('due_date 型別錯誤')) {
              alertStr += '有效日期欄位為必填,'
            }
            this.$swal({ title: alertStr, icon: 'error' })
          }
        })
        .catch(err => console.log(err.message))
    },
    delCoupon () {
      this.$emit('is-loading', true)
      this.axios.delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then(res => {
          this.$emit('is-loading', false)
          console.log(res)
          if (res.data.success) {
            this.$emit('get-coupon')
            this.modal.hide()
            this.$swal({ title: '刪除成功', icon: 'success' })
          }
        })
        .catch(err => console.log(err))
    },
    DateToTimestamp (date) {
      return (Date.parse(date) / 1000)
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
