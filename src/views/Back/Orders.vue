<template>
  <div class="container-fluid">
    <Loading v-model:active="isLoading"
      :is-full-page="fullPage"/>
    <h2 class="h5 text-white mt-5">
      # 訂單列表
    </h2>
    <div class="rounded bg-dark p-3 mb-5 box--shadow">
      <div class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn--purple text-white" data-bs-toggle="modal" data-bs-target="#orderModal" @click="adjustStatus(true)">
          <span class="material-icons font--sm">remove</span>
          刪除全部
        </button>
      </div>
      <table class="table table-dark">
        <thead>
          <tr class="table--purple">
            <th scope="col" width="150">訂單編號</th>
            <th scope="col" width="180">客戶姓名</th>
            <th scope="col" width="120">訂單建立日期</th>
            <th scope="col" width="120">總價</th>
            <th scope="col" width="100">付款狀態</th>
            <th scope="col">付款方式</th>
            <th scope="col">付款日期</th>
            <th scope="col" width="180">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of orders" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.user.name }}</td>
            <td>{{ timestampToDate(item.create_at) }}</td>
            <td>{{ item.total }}</td>
            <td>{{ item.is_paid === true ? '是' : '否' }}</td>
            <td>{{ item.payment_method }}</td>
            <td>{{ timestampToDate(item.paid_date) }}</td>
            <td>
              <button type="button" class="btn btn-sm btn-light me-1" data-bs-toggle="modal" data-bs-target="#orderModal" @click="adjustStatus(false, item, 'put')">
                <span class="material-icons font--sm">edit</span>
                編輯
              </button>
              <button type="button" class="btn btn-sm btn-danger text-white"  data-bs-toggle="modal" data-bs-target="#orderModal" @click="adjustStatus(false, item, 'del')">
                <span class="material-icons font--sm">delete</span>
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationCom :page="pagination" @get-page="getOrder"></PaginationCom>
    </div>
    <OrderModalCom ref="modal" @get-order="getOrder" :is-delet-all="isDeleteAll" :status="status" @is-loading="isLoadingHandler"></OrderModalCom>
  </div>
</template>

<script>
import OrderModalCom from '@/components/Back/OrderModal'
import PaginationCom from '@/components/Pagination'
import Loading from 'vue-loading-overlay'

export default {
  components: {
    OrderModalCom,
    PaginationCom,
    Loading
  },
  data () {
    return {
      orderModal: {},
      orders: [],
      pagination: {},
      isDeleteAll: false,
      status: '',
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getOrder (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.orders = res.data.orders
            this.pagination = res.data.pagination
          }
        })
        .catch(err => this.$swal({ title: err, icon: 'error' }))
    },
    adjustStatus (isDeleteAll, item, status) {
      this.isDeleteAll = isDeleteAll
      this.isDeleteAll ? this.status = 'delAll'
        : status === 'put' ? this.status = 'put'
          : this.status = 'delete'
      if (item) {
        const tempItem = JSON.parse(JSON.stringify(item))
        tempItem.paid_date = this.timestampToDate(tempItem.paid_date)
        this.$refs.modal.tempOrder = tempItem
      }
    },
    timestampToDate (timestamp) {
      if (timestamp) {
        const dd = new Date(timestamp * 1000)
        return `${dd.getFullYear()}-${this.adjustZero(dd.getMonth() + 1)}-${this.adjustZero(dd.getDate())}`
      }
    },
    adjustZero (num) {
      return num < 10 ? `0${num}` : `${num}`
    },
    isLoadingHandler (boolean) {
      boolean === true ? this.isLoading = true : this.isLoading = false
    }
  },
  created () {
    this.getOrder()
  }
}
</script>
