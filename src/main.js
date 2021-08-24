import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

AOS.init({
  once: true
})

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})

// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
setLocale('zh_TW')

const options = {
  confirmButtonColor: '#5ABFDD',
  cancelButtonColor: '#ff7674'
}

const app = createApp(App)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(router)
app.use(VueAxios, axios)
app.use(VueLoading)
app.use(VueSweetalert2, options)

app.mount('#app')
