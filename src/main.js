import { createApp } from 'vue'
import App from './App.vue'
import store from '@/vuex/films'
createApp(App).use(store).mount('#app')
