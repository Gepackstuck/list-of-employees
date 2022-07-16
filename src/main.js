import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
import MainTable from './components/MainTable.vue'
import PersonalInfoPage from './components/PersonalInfoPage.vue'

const routes = [
    { path: '/MainTable', component: MainTable },
    { path: '/PersonalInfoPage/:id', component: PersonalInfoPage }
  ]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')