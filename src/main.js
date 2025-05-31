import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { VueFire } from 'vuefire'
import moment from 'moment'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueFire)

app.config.globalProperties.$filters = {
  formatDate(value) {
    return moment(String(value)).format('MMM DD YYYY')
  }
}

app.mount('#app')