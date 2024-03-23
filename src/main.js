import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HomePage from './public/pages/HomePage.vue'


const app = createApp(App)
app.component(
    'HomePage', HomePage

);
app.use(router)


app.mount('#app')
