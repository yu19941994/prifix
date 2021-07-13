import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import bus from './bus'
import VCalendar from 'v-calendar'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

AOS.init({
  once: true
})

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
  icon: 'success'
}

const app = createApp(App)
app.config.globalProperties.$bus = bus
app.use(router)
app.use(VueAxios, axios)
app.use(VCalendar, {})
app.use(VueLoading)
app.use(VueSweetalert2, options)

app.mount('#app')
