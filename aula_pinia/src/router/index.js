import { createRouter, createWebHistory } from 'vue-router'
import NoticiasView from 'src/view/NoticiasView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    }, 
    {
        path: '/noticias',
        name: 'Noticias',
        component: NoticiasView
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router