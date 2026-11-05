import { createRouter, createWebHashHistory } from 'vue-router'; 
import NoticiasView from '@/view/NoticiasView.vue'
import ArtigosView from '@/view/ArtigosView.vue'

const routes = [
    {
        path: '/',
        name: 'Noticias',
        component: NoticiasView
    }, 
    {
        path: '/artigos',
        name: 'Artigos',
        component: ArtigosView
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(), routes
    }
)
export default router