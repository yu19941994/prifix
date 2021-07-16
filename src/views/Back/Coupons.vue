<template>
  <div class="container-fluid">
    <loading v-model:active="isLoading"
                :is-full-page="fullPage"/>
    <h2 class="h5 text-white mt-5">
      # 優惠券列表
    </h2>
    <div class="rounded bg-dark p-3 mb-5 box--shadow">
      <div class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-warning text-white"  data-bs-toggle="modal" data-bs-target="#couponModal" @click="adjustStatus(true)">
          <span class="material-icons font--sm">add</span>
          新增優惠券
        </button>
      </div>
      <table class="table table-dark">
        <thead>
          <tr class="table-warning">
            <th scope="col">優惠券名稱</th>
            <th scope="col">優惠碼</th>
            <th scope="col" width="120">折價比率</th>
            <th scope="col" width="120">是否啟用</th>
            <th scope="col" width="180">有效期限</th>
            <th scope="col" width="180">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of coupons" :key="item.id">
            <th scope="row">{{ item.title }}</th>
            <td>{{ item.code }}</td>
            <td>{{ item.percent }}</td>
            <td>{{ item.is_enabled === 1 ? '是' : '否' }}</td>
            <td>{{ timestampToDate(item.due_date) }}</td>
            <td>
              <button type="button" class="btn btn-sm btn-light me-1" data-bs-toggle="modal" data-bs-target="#couponModal" @click="adjustStatus(false, item, 'put')">
                <span class="material-icons font--sm">edit</span>
                編輯
              </button>
              <button type="button" class="btn btn-sm btn-danger text-white"  data-bs-toggle="modal" data-bs-target="#couponModal" @click="adjustStatus(false, item, 'del')">
                <span class="material-icons font--sm">delete</span>
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationCom :page="pagination" @get-page="getCoupon"></PaginationCom>
    </div>
    <CouponModalCom ref="modal" @get-coupon="getCoupon" :is-new="isNew" :status="status" @is-loading="isLoadingHandler"></CouponModalCom>
  </div>
</template>

<script>
import CouponModalCom from '@/components/Back/CouponModal'
import PaginationCom from '@/components/Pagination'
import Loading from 'vue-loading-overlay'
export default {
  components: {
    CouponModalCom,
    PaginationCom,
    Loading
  },
  data () {
    return {
      productModal: {},
      coupons: [],
      pagination: {},
      isNew: false,
      status: '',
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getCoupon (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          console.log(res.data)
          if (res.data.success) {
            this.coupons = res.data.coupons
            this.pagination = res.data.pagination
          }
        })
        .catch(err => console.log(err))
    },
    adjustStatus (isNew, item, status) {
      this.isNew = isNew
      this.isNew ? this.status = 'post'
        : status === 'put' ? this.status = 'put'
          : this.status = 'delete'
      if (item) {
        const tempItem = JSON.parse(JSON.stringify(item))
        tempItem.due_date = this.timestampToDate(tempItem.due_date)
        this.$refs.modal.tempCoupon = this.isNew ? { is_enabled: 0 } : tempItem
        this.$bus.emit('tempCoupon', this.$refs.modal.tempCoupon)
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
    this.getCoupon()
  }
}
</script>
