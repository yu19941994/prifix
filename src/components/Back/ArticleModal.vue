<template>
  <div id="articleModal" ref="modal" class="modal fade" tabindex="-1" aria-labelledby="articleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" v-if="status !== 'delete'">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="status === 'post'">新增文章</span>
            <span v-else>編輯文章</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="author">作者</label>
              <input id="author" type="text" class="form-control" placeholder="請輸入作者" v-model="tempArticle.author">
            </div>
            <div class="form-group col-md-6">
              <label for="create_at">創建日期</label>
              <input id="create_at" type="date" class="form-control" placeholder="請輸入創建日期" v-model="tempArticle.create_at">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="title">標題</label>
              <input id="title" type="text" min="0" class="form-control" placeholder="請輸入標題" v-model="tempArticle.title">
            </div>
            <div class="col-md-6">
              <label for="isPublic">是否公開</label>
              <div class="input-group mb-0">
                <select class="form-select" id="isPublic" v-model="tempArticle.isPublic">
                  <option value="ture">是</option>
                  <option value="false">否</option>
                </select>
              </div>
            </div>
          </div>
          <hr>
          <div class="form-group">
            <label for="image">圖片</label>
            <input v-model="tempArticle.image" type="text" class="form-control" placeholder="請輸入圖片連結">
            <img class="img-fluid" :src="tempArticle.image">
          </div>
          <div class="form-group">
              <label for="description">描述</label>
              <input id="description" type="text" min="0" class="form-control" placeholder="請輸入文章描述" v-model="tempArticle.description">
            </div>
          <div class="form-group">
            <label for="content">文章內容</label>
            <textarea id="content" type="text" class="form-control" placeholder="請輸入文章內容" v-model="tempArticle.content">
            </textarea>
          </div>
          <!-- <div v-if="tempArticle.tags">
            <div class="form-group mb-2" v-for="(item,key) in tempArticle.tags" :key="item">
              <label for="tag">標籤</label>
              <input id="tag" type="text" class="form-control" placeholder="請輸入文章標籤" v-model="tempArticle.tags[key]">
            </div>
            <div v-if="!tempArticle.tags.length || tempArticle.tags[tempArticle.tags.length-1]">
              <button class="btn btn-outline-primary btn-sm d-block w-100" @click="tempArticle.tags.push('')">
                新增標籤
              </button>
            </div>
            <div v-else>
              <button class="btn btn-outline-danger btn-sm d-block w-100" @click="tempArticle.tags.pop()">
                刪除標籤
              </button>
            </div>
          </div> -->
          <div class="form-group">
            <label for="tag">標籤</label>
            <input id="tag" type="text" class="form-control" placeholder="請輸入文章標籤" v-model="tempArticle.tag">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-success" @click="updateArticle(tempArticle)">
            確認
          </button>
        </div>
      </div>
    </div>
    <div class="modal-dialog modal-dialog-centered" v-else>
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delArticleModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 文章(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delArticle">
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
      tempArticle: {
        imageUrl: '',
        tags: []
      },
      image: ''
    }
  },
  methods: {
    updateArticle (tempArticle) {
      let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article`
      let method = 'post'
      if (!this.isNew) {
        console.log(tempArticle)
        method = 'put'
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${tempArticle.id}`
      }
      if (this.tempArticle.isPublic === 'true') {
        this.tempArticle.isPublic = true
      } else {
        this.tempArticle.isPublic = false
      }
      this.tempArticle.create_at = Date.parse(this.tempArticle.create_at) / 1000
      this.$http[method](url, { headers: { 'Access-Control-Allow-Origin': '*' }, data: this.tempArticle })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.$emit('get-article')
            this.modal.hide()
          }
        })
        .catch(err => console.log(err.message))
    },
    delArticle () {
      this.axios.delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.$emit('get-article')
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
