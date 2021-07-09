<template>
  <div class="container-fluid">
    <h2 class="h5 text-white mt-5">
      # 產品列表
    </h2>
    <div class="rounded bg-dark p-3 mb-5 box--shadow">
      <div class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-primary text-white"  data-bs-toggle="modal" data-bs-target="#productModal" @click="adjustStatus(true)">
          <span class="material-icons font--sm">add</span>
          新增產品
        </button>
      </div>
      <table class="table table-dark">
        <thead>
          <tr class="table-info">
            <th scope="col" width="120">分類</th>
            <th scope="col">產品名稱</th>
            <th scope="col" width="120">原價</th>
            <th scope="col" width="120">售價</th>
            <th scope="col" width="100">是否啟用</th>
            <th scope="col" width="180">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of products" :key="item.id">
            <th scope="row">{{ item.category }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.is_enable }}</td>
            <td>
              <button type="button" class="btn btn-sm btn-light me-1" data-bs-toggle="modal" data-bs-target="#productModal" @click="adjustStatus(false, item, 'put')">
                <span class="material-icons font--sm">edit</span>
                編輯
              </button>
              <button type="button" class="btn btn-sm btn-danger text-white"  data-bs-toggle="modal" data-bs-target="#productModal" @click="adjustStatus(false, item, 'del')">
                <span class="material-icons font--sm">delete</span>
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationCom :page="pagination"></PaginationCom>
    </div>
    <ProductModalCom ref="modal" @get-product="getProduct" :is-new="isNew" :status="status"></ProductModalCom>
  </div>
</template>

<script>
import ProductModalCom from '@/components/Back/ProductModal'
import PaginationCom from '@/components/Pagination'
export default {
  components: {
    ProductModalCom,
    PaginationCom
  },
  data () {
    return {
      productModal: {},
      products: [],
      pagination: {},
      isNew: false,
      status: ''
    }
  },
  methods: {
    getProduct (page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.axios.get(url)
        .then(res => {
          console.log(res.data)
          if (res.data.success) {
            this.products = res.data.products
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
      this.$refs.modal.tempProduct = this.isNew ? { imageUrl: [] } : JSON.parse(JSON.stringify(item))
      this.$bus.emit('tempProduct', this.$refs.modal.tempProduct)
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
