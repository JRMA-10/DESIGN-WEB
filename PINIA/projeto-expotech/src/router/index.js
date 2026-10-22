import { createRouter, createWebHashHistory } from 'vue-router'; 
import NoticiasView from '@/view/NoticiasView.vue' 

const routes = [
    {
        path: '/',
        name: 'Noticias',
        component: NoticiasView
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(), routes
    }
)
export default router