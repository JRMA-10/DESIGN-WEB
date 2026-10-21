import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import ProjetosView from '@/views/Projetos.vue'
import CompeticoesView from '@/views/Competicoes.vue'
import ConquistasView from '@/views/Conquistas.vue'
import ContatoView from '@/views/Contato.vue'
import QuemSomosView from '@/views/QuemSomos.vue'
import VaquinhaView from '@/views/Vaquinha.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    }, 
    {
        path: '/projetos',
        name: 'projetos',
        component: ProjetosView
    },
    {
        path: '/competicoes',
        name: 'competicoes',
        component: CompeticoesView
    },
    {
        path: '/conquistas',
        name: 'conquistas',
        component: ConquistasView
    },
    {
        path: '/contato',
        name: 'contato',
        component: ContatoView
    },
    {
        path: '/quemsomos',
        name: 'quemsomos',
        component: QuemSomosView
    },
    {
        path: '/vaquinha',
        name: 'vaquinha',
        component: VaquinhaView
    },
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router