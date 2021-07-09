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
                  <option value="ture">是</option>
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
    <div class="modal-dialog modal-dialog-centered" v-else>
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span v-if="status === 'delAll'">刪除全部</span>
            <span v-else>刪除訂單</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delOrder">
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
  props: ['isDeleteAll', 'status'],
  data () {
    return {
      tempOrder: {
      }
    }
  },
  methods: {
    updateOrder (tempOrder) {
      console.log(tempOrder)
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${tempOrder.id}`
      this.tempOrder.total = parseInt(this.tempOrder.total)
      this.axios.put(url, { headers: { 'Access-Control-Allow-Origin': '*' }, data: this.tempOrder })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.$emit('get-order')
            this.modal.hide()
          } else {
            alert('編輯有誤')
          }
        })
        .catch(err => console.log(err.message))
    },
    delOrder () {
      let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempProduct.id}`
      if (this.status === 'delAll') {
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders/all`
      }
      this.axios.delete(url)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.$emit('get-order')
            this.modal.hide()
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
