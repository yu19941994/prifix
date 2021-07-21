<template>
  <!-- Modal -->
  <div class="modal fade" id="quizModal" tabindex="-1" aria-labelledby="quizModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title ms-auto" id="quizModalLabel" v-if="step === 1">第一題</h5>
          <h5 class="modal-title ms-auto" id="quizModalLabel" v-if="step === 2">第二題</h5>
          <h5 class="modal-title ms-auto" id="quizModalLabel" v-if="step === 3">第三題</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="clearHandler"></button>
        </div>
        <div class="modal-body">
          <template v-if="step === 1">
            <p class="text-center mb-1">
              下列哪一個國家是亞洲第一個同婚合法化的國家
            </p>
            <img src="@/assets/images/product_banner1.jpg" alt="" class="w-100 mb-4">
            <ul class="row list-unstyled">
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '1-1', 1)" :class="{'active': choose === '1-1'}" :disabled="disabledStatus1">
                  印尼
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '1-2', 2)" :class="{'active': choose === '1-2'}" :disabled="disabledStatus2">
                  日本
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(true, '1-3', 3)" :class="{'active': choose === '1-3'}" :disabled="disabledStatus3">
                  台灣
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '1-4', 4)" :class="{'active': choose === '1-4'}" :disabled="disabledStatus4">
                  韓國
                </button>
              </li>
            </ul>
            <p class="text-success d-flex align-items-center justify-content-center" v-if="answer === true">
              <span class="material-icons">check_circle_outline</span>
              <span>恭喜答對</span>
            </p>
            <p class="text-danger d-flex align-items-center justify-content-center" v-if="answer === false">
              <span class="material-icons">highlight_off</span>
              <span>糟糕！錯了！</span>
            </p>
          </template>
          <template v-if="step === 2">
            <p class="text-center mb-1">
              下列哪一個非多元成家法案內容
            </p>
            <img src="@/assets/images/product_banner8.jpg" alt="" class="w-100 mb-4">
            <ul class="row list-unstyled">
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '2-1', 1)" :class="{'active': choose === '1-1'}" :disabled="disabledStatus1">
                  婚姻平權
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(true, '2-4', 4)" :class="{'active': choose === '1-4'}" :disabled="disabledStatus4">
                  同儕制度
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '2-3', 3)" :class="{'active': choose === '1-3'}" :disabled="disabledStatus3">
                  家屬制度
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '2-2', 2)" :class="{'active': choose === '1-2'}" :disabled="disabledStatus2">
                  伴侶制度
                </button>
              </li>
            </ul>
            <p class="text-success d-flex align-items-center justify-content-center" v-if="answer === true">
              <span class="material-icons">check_circle_outline</span>
              <span>恭喜答對</span>
            </p>
            <p class="text-danger d-flex align-items-center justify-content-center" v-if="answer === false">
              <span class="material-icons">highlight_off</span>
              <span>糟糕！錯了！</span>
            </p>
          </template>
          <template v-if="step === 3">
            <p class="text-center mb-1">
              同婚法案通過後，下列何者不能結婚
            </p>
            <img src="@/assets/images/product_banner9.jpg" alt="" class="w-100 mb-4">
            <ul class="row list-unstyled">
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '3-1', 1)" :class="{'active': choose === '1-1'}" :disabled="disabledStatus1">
                  男生與男生
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '3-2', 2)" :class="{'active': choose === '1-2'}" :disabled="disabledStatus2">
                  男生與女生
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(false, '3-3', 3)" :class="{'active': choose === '1-3'}" :disabled="disabledStatus3">
                  女生與女生
                </button>
              </li>
              <li class="col-6">
                <button class="btn btn-outline-dark w-100 mb-2" @click="answerHandler(true, '3-4', 4)" :class="{'active': choose === '1-4'}" :disabled="disabledStatus4">
                  未成年的人
                </button>
              </li>
            </ul>
            <p class="text-success d-flex align-items-center justify-content-center" v-if="answer === true">
              <span class="material-icons">check_circle_outline</span>
              <span>恭喜答對</span>
            </p>
            <p class="text-danger d-flex align-items-center justify-content-center" v-if="answer === false">
              <span class="material-icons">highlight_off</span>
              <span>糟糕！錯了！</span>
            </p>
            <div class="d-flex align-items-center justify-content-center" v-if="answer === true && step === 3">
              <div class="text-warning mb-0 me-2 d-flex align-items-center">
                <p class="mb-0">獲得優惠券碼：</p>
                <textarea id="myCoupon" style="height: 30px;">66RainbowPride</textarea>
              </div>
              <button class="btn btn--warning" @click="copyCoupon">
                複製
              </button>
            </div>
          </template>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" v-if="answer === true && step === 1" @click="nextStepHandler(2)">下一題</button>
          <button type="button" class="btn btn-primary" v-if="answer === true && step === 2" @click="nextStepHandler(3)">下一題</button>
          <button type="button" class="btn btn-primary" v-if="answer === false" @click="clearHandler">再玩一次</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      answer: null,
      step: 1,
      choose: '',
      disabledStatus1: false,
      disabledStatus2: false,
      disabledStatus3: false,
      disabledStatus4: false,
      copyText: ''
    }
  },
  methods: {
    clearHandler () {
      this.answer = null
      this.choose = ''
      this.disabledStatus1 = false
      this.disabledStatus2 = false
      this.disabledStatus3 = false
      this.disabledStatus4 = false
      this.step = 1
    },
    nextStepHandler (step) {
      this.answer = null
      this.choose = ''
      this.disabledStatus1 = false
      this.disabledStatus2 = false
      this.disabledStatus3 = false
      this.disabledStatus4 = false
      this.step = step
    },
    answerHandler (boolean, quiz, dStatus) {
      this.answer = boolean
      this.choose = quiz
      if (dStatus === 1) {
        this.disabledStatus2 = true
        this.disabledStatus3 = true
        this.disabledStatus4 = true
      } else if (dStatus === 2) {
        this.disabledStatus1 = true
        this.disabledStatus3 = true
        this.disabledStatus4 = true
      } else if (dStatus === 3) {
        this.disabledStatus1 = true
        this.disabledStatus2 = true
        this.disabledStatus4 = true
      } else if (dStatus === 4) {
        this.disabledStatus1 = true
        this.disabledStatus2 = true
        this.disabledStatus3 = true
      } else {
        return null
      }
    },
    copyCoupon () {
      this.copyText = document.getElementById('myCoupon')
      this.copyText.select()
      this.copyText.setSelectionRange(0, 99999)
      document.execCommand('copy')
    }
  }
}
</script>
