<template>
  <loading v-model:active="isLoading"
    :is-full-page="fullPage">
    <div class="loadingio-spinner-ellipsis-m5cks5164gn">
      <div class="ldio-ujuwlnkwpj">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
</template>

<script>
import Loading from 'vue-loading-overlay'
export default {
  components: {
    Loading
  }
}
</script>
