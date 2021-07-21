<template>
  <div class="container-fluid">
    <loading v-model:active="isLoading"
      :is-full-page="fullPage"/>
    <h2 class="h5 text-white mt-5">
      # 文章列表
    </h2>
    <div class="rounded bg-dark p-3 mb-5 box--shadow">
      <div class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-success text-white"  data-bs-toggle="modal" data-bs-target="#articleModal" @click="adjustStatus(true)">
          <span class="material-icons font--sm">add</span>
          新增文章
        </button>
      </div>
      <table class="table table-dark">
        <thead>
          <tr class="table-success">
            <th scope="col" width="100">作者</th>
            <th scope="col" width="100">撰寫日期</th>
            <th scope="col" width="180">標題</th>
            <th scope="col" width="100">是否公開</th>
            <th scope="col" width="100">標籤</th>
            <th scope="col">文章描述</th>
            <th scope="col" width="180">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of articles" :key="item.id">
            <th scope="row">{{ item.author }}</th>
            <td>{{ timestampToDate(item.create_at) }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.isPublic ? '是' : '否' }}</td>
            <td>{{ item.tag }}</td>
            <td>{{ item.description }}</td>
            <td>
              <button type="button" class="btn btn-sm btn-light me-1" data-bs-toggle="modal" data-bs-target="#articleModal" @click="adjustStatus(false, item, 'put')">
                <span class="material-icons font--sm">edit</span>
                編輯
              </button>
              <button type="button" class="btn btn-sm btn-danger text-white"  data-bs-toggle="modal" data-bs-target="#articleModal" @click="adjustStatus(false, item, 'del')">
                <span class="material-icons font--sm">delete</span>
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationCom :page="pagination" @get-page="getArticle"></PaginationCom>
    </div>
    <ArticleModalCom ref="modal" @get-article="getArticle" :is-new="isNew" :status="status" @is-loading="isLoadingHandler"></ArticleModalCom>
  </div>
</template>

<script>
import ArticleModalCom from '@/components/Back/ArticleModal'
import PaginationCom from '@/components/Pagination'
import Loading from 'vue-loading-overlay'
export default {
  components: {
    ArticleModalCom,
    PaginationCom,
    Loading
  },
  data () {
    return {
      productModal: {},
      articles: [],
      pagination: {},
      isNew: false,
      status: '',
      singleArticle: {},
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getArticle (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          console.log(res.data)
          if (res.data.success) {
            this.articles = res.data.articles
            this.pagination = res.data.pagination
          }
        })
        .catch(err => console.log(err))
    },
    async getSingleArticle (item) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
      const vm = this
      try {
        const res = await vm.axios.get(url)
        this.singleArticle = res.data.article
      } catch (err) {
        console.log(err)
      }
    },
    async adjustStatus (isNew, item, status) {
      this.isNew = isNew
      this.isNew ? this.status = 'post'
        : status === 'put' ? this.status = 'put'
          : this.status = 'delete'
      if (item && this.status === 'put') {
        await this.getSingleArticle(item)
        const tempItem = JSON.parse(JSON.stringify(this.singleArticle))
        tempItem.create_at = this.timestampToDate(tempItem.create_at)
        this.$refs.modal.tempArticle = this.isNew ? { imgUrl: [] } : tempItem
        this.$bus.emit('tempArticle', this.$refs.modal.tempArticle)
      }
      if (item && this.status === 'delete') {
        this.$refs.modal.tempArticle = this.isNew ? { imgUrl: [] } : JSON.parse(JSON.stringify(item))
        this.$bus.emit('tempArticle', this.$refs.modal.tempArticle)
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
    this.getArticle()
  }
}
</script>
