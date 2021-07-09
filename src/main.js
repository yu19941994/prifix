import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import bus from './bus'

AOS.init({
  once: true
})
const app = createApp(App)
app.config.globalProperties.$bus = bus
app.use(router)
app.use(VueAxios, axios)
// app.use(AOS)
// AOS.init()
app.mount('#app')
