import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/style/style.sass'

import '@fortawesome/fontawesome-free/js/all'
createApp(App).use(store).mount('#app')
