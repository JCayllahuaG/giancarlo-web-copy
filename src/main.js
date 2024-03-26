import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//PrimeVue
import PrimeVue from 'primevue/config'

//Pages
import HomePage from './public/pages/HomePage.vue'

//in main.js
import 'primevue/resources/themes/aura-light-indigo/theme.css'

//Toast Service
import ToastService from 'primevue/toastservice'

//PrimeVue Comps
import Toast from 'primevue/toast'

createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .use(ToastService)
  .component('HomePage', HomePage)
  .component('pv-toast', Toast)
  .mount('#app')
