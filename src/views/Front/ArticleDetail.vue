<template>
  <div>
    <loading v-model:active="isLoading"
      :is-full-page="fullPage">
    </loading>
    <!-- banner -->
    <div class="bg__article__banner mb-5">
     <div class="row d-flex justify-content-center align-items-center h-100">
       <div class="col-6 col-lg-4">
         <div class="bg-light py-2 py-sm-4 rounded opacity__banner">
           <h2 class="text-center font--banner mb-0">部落格文章</h2>
         </div>
       </div>
     </div>
    </div>
    <!-- article -->
    <div class="container-lg">
      <!-- breadcrumb -->
      <nav aria-label="breadcrumb mb-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-secondary text-decoration-none">首頁</router-link></li>
          <li class="breadcrumb-item">文章</li>
          <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
        </ol>
      </nav>
      <div class="mb-5">
        <div class="row">
          <div class="col-12 col-md-9">
            <h3 class="mb-0 h2 mb-2">{{ article.title }}</h3>
            <div class="d-flex justify-content-between align-items-end mb-2">
              <p class="text-warning mb-0">作者：{{ article.author }}</p>
              <p class="text-secondary mb-0">{{ timestampToDate(article.create_at) }}</p>
            </div>
            <img :src="article.image" alt="" class="img__article__page mb-4">
            <p>{{ article.content }}</p>
          </div>
          <div class="col-12 col-md-3">
            <div class="d-flex mb-md-2">
              <span class="material-icons me-2 text--purple">label</span>
              <h4 class="mb-0 text--purple">Tags</h4>
            </div>
            <div class="d-flex flex-md-column flex-row">
              <p class="text--purple mb-0 me-2 me-md-0" v-for="item of tags" :key="item">#{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Front/Loading'
export default {
  components: {
    Loading
  },
  data () {
    return {
      article: {},
      tags: [],
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getArticle () {
      this.isLoading = true
      const pdId = this.$route.params.id
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/article/${pdId}`
      this.axios.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.article = res.data.article
            this.adjustTag()
          }
        })
        // .catch(err => console.log(err))
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
    adjustTag () {
      this.tags = this.article.tag.split('、')
    }
  },
  created () {
    this.getArticle()
  }
}
</script>
