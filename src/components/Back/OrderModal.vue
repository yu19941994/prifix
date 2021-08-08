<template>
  <div id="orderModal" ref="modal" class="modal fade" tabindex="-1" aria-labelledby="orderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" v-if="status === 'put'">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>編輯訂單</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="username">顧客名稱</label>
              <input id="username" type="text" class="form-control" placeholder="請輸入顧客名稱" v-model="tempOrder.user.name">
            </div>
            <div class="form-group col-md-6">
              <label for="usertel">顧客電話</label>
              <input id="usertel" type="number" class="form-control" placeholder="請輸入顧客電話" v-model="tempOrder.user.tel">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="useremail">顧客信箱</label>
              <input id="useremail" type="text" class="form-control" placeholder="請輸入顧客信箱" v-model="tempOrder.user.email">
            </div>
            <div class="form-group col-md-6">
              <label for="useraddress">顧客地址</label>
              <input id="useraddress" type="text" class="form-control" placeholder="請輸入顧客地址" v-model="tempOrder.user.address">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-4">
              <label for="is_paid">是否付款</label>
              <div class="input-group mb-0">
                <select class="form-select" id="is_paid" v-model="tempOrder.is_paid">
                  <option value="true">是</option>
                  <option value="false">否</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <label for="paid_date">付款日期</label>
              <input id="paid_date" type="date" class="form-control" placeholder="請輸入付款方式" v-model="tempOrder.paid_date">
            </div>
            <div class="col-md-4">
              <label for="payment_method">付款方式</label>
              <input id="payment_method" type="text" class="form-control" placeholder="請輸入付款方式" v-model="tempOrder.payment_method">
            </div>
          </div>
          <div class="form-group">
            <label for="total">訂單總額</label>
            <input id="total" type="number" min="0" class="form-control" placeholder="請輸入訂單總額" v-model="tempOrder.total">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateOrder(tempOrder)">
            確認
          </button>
        </div>
      </div>
    </div>
    <DelModal @del-item="delOrder" :temp="tempOrder" :action="action" :status="status" v-else></DelModal>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import DelModal from './DelModal.vue'
export default {
  props: ['isDeleteAll', 'status'],
  components: {
    DelModal
  },
  data () {
    return {
      tempOrder: {
      },
      date: new Date(),
      action: 'order'
    }
  },
  methods: {
    updateOrder (tempOrder) {
      this.$emit('is-loading', true)
      console.log(tempOrder)
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${tempOrder.id}`
      this.tempOrder.total = parseInt(this.tempOrder.total)
      this.tempOrder.is_paid === 'true' ? this.tempOrder.is_paid = true : this.tempOrder.is_paid = false
      this.tempOrder.paid_date = this.DateToTimestamp(this.tempOrder.paid_date)
      this.axios.put(url, { headers: { 'Access-Control-Allow-Origin': '*' }, data: this.tempOrder })
        .then(res => {
          this.$emit('is-loading', false)
          if (res.data.success) {
            this.$emit('get-order')
            this.modal.hide()
            this.$swal({ title: '成功', icon: 'success' })
          } else {
            alert('編輯有誤')
          }
        })
        // .catch(err => console.log(err.message))
    },
    delOrder () {
      this.$emit('is-loading', true)
      let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      if (this.status === 'delAll') {
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders/all`
      }
      this.axios.delete(url)
        .then(res => {
          this.$emit('is-loading', false)
          if (res.data.success) {
            this.$emit('get-order')
            this.modal.hide()
            this.$swal({ title: '刪除成功', icon: 'success' })
          }
        })
        // .catch(err => console.log(err))
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
