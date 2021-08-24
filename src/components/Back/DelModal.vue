<template>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 id="delProductModalLabel" class="modal-title">
          <span v-show="action === 'product'">刪除產品</span>
          <span v-show="action === 'order' && status === 'delAll'">刪除全部訂單</span>
          <span v-show="action === 'order' && status === 'delete'">刪除訂單</span>
          <span v-show="action === 'coupon'">刪除優惠券</span>
          <span v-show="action === 'article'">刪除文章</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        是否刪除
        <strong class="text-danger" v-show="action === 'product'">{{ temp.title }}</strong>
        <strong class="text-danger" v-show="action === 'order' && status === 'delete'">訂單編號：{{ temp.num }}</strong>
        <strong class="text-danger" v-show="action === 'order' && status === 'delAll'">全部產品</strong>
        <strong class="text-danger" v-show="action === 'coupon'">優惠券：{{ temp.title }}</strong>
        <strong class="text-danger" v-show="action === 'article'">文章：{{ temp.title }}</strong>
        (刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-danger" @click="$emit('del-item')">
          確認刪除
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['temp', 'action', 'status'],
  emits: ['del-item']
}
</script>
