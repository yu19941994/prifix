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
              <label for="author">作者<span class="text-danger font--xs">(*必填)</span></label>
              <input id="author" type="text" class="form-control" placeholder="請輸入作者" v-model="tempArticle.author">
            </div>
            <div class="form-group col-md-6">
              <label for="create_at">創建日期<span class="text-danger font--xs">(*必填)</span></label>
              <input id="create_at" type="date" class="form-control" placeholder="請輸入創建日期" v-model="tempArticle.create_at">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="title">標題<span class="text-danger font--xs">(*必填)</span></label>
              <input id="title" type="text" min="0" class="form-control" placeholder="請輸入標題" v-model="tempArticle.title">
            </div>
            <div class="col-md-6">
              <label for="isPublic">是否公開<span class="text-danger font--xs">(*必填)</span></label>
              <div class="input-group mb-0">
                <select class="form-select" id="isPublic" v-model="tempArticle.isPublic">
                  <option :value="true">是</option>
                  <option :value="false">否</option>
                </select>
              </div>
            </div>
          </div>
          <hr>
          <div class="form-group">
            <label for="image">圖片</label>
            <input v-model="tempArticle.image" type="text" class="form-control" placeholder="請輸入圖片連結" id="image">
            <img class="img-fluid" :src="tempArticle.image">
          </div>
          <div class="form-group">
              <label for="description">描述</label>
              <input id="description" type="text" min="0" class="form-control" placeholder="請輸入文章描述" v-model="tempArticle.description">
            </div>
          <div class="form-group">
            <label for="content">文章內容<span class="text-danger font--xs">(*必填)</span></label>
            <textarea id="content" type="text" class="form-control" placeholder="請輸入文章內容" v-model="tempArticle.content">
            </textarea>
          </div>
          <div class="form-group">
            <label for="tag">標籤<span class="text-danger font--xs">(*請以頓號做分隔)</span></label>
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
    <DelModal @del-item="delArticle" :temp="tempArticle" :action="action" :status="status" v-else></DelModal>
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
      tempArticle: {
        imageUrl: '',
        tags: []
      },
      image: '',
      action: 'article'
    }
  },
  methods: {
    updateArticle (tempArticle) {
      this.$emit('is-loading', true)
      let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article`
      let method = 'post'
      if (!this.isNew) {
        console.log(tempArticle)
        method = 'put'
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${tempArticle.id}`
      }
      this.tempArticle.create_at = this.DateToTimestamp(this.tempArticle.create_at)
      this.$http[method](url, { headers: { 'Access-Control-Allow-Origin': '*' }, data: this.tempArticle })
        .then(res => {
          this.$emit('is-loading', false)
          console.log(res)
          if (res.data.success) {
            this.$emit('get-article')
            this.modal.hide()
            this.$swal({ title: '成功', icon: 'success' })
            this.tempArticle = {}
          } else {
            let alertStr = ''
            if (res.data.message.includes(' title 欄位為必填')) {
              alertStr += '標題欄位為必填,'
            }
            if (res.data.message.includes(' author 欄位為必填')) {
              alertStr += '作者欄位為必填,'
            }
            if (res.data.message.includes(' isPublic 欄位為必填')) {
              alertStr += '是否公開欄位為必填,'
            }
            if (res.data.message.includes(' content 欄位為必填')) {
              alertStr += '文章內容欄位為必填,'
            }
            if (res.data.message.includes('create_at 型別錯誤')) {
              alertStr += '創建日期欄位為必填,'
            }
            this.$swal({ title: alertStr, icon: 'error' })
          }
        })
        .catch(err => console.log(err.message))
    },
    delArticle () {
      this.$emit('is-loading', true)
      console.log(this.tempArticle)
      this.axios.delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`)
        .then(res => {
          this.$emit('is-loading', false)
          console.log(res)
          if (res.data.success) {
            this.$emit('get-article')
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
