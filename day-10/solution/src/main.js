import { createApp } from 'vue'
import App from './App.vue'
import './base.css'
import { createWebHistory } from 'vue-router'

import { createRouter } from 'vue-router'
import routes from '~pages'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(FloatingVue).use(router).mount('#app')
