<script setup>
import { useNoticiasStore } from '@/stores/useNoticiasStore';
const noticiasStore = useNoticiasStore()

</script>

<template>
    <h2>Notícias</h2>
    <div v-for="noticia in noticiasStore" :key="noticia.id">
        <h3>{{ noticia.titulo }}</h3>
    </div>
</template>