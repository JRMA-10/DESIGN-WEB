<script setup>
import { useNoticiasStore } from '@/stores/useNoticiasStore'

const noticiasStore = useNoticiasStore()

</script>

<template>
    <article>
        <h2>Notícias</h2>

        <div v-for="noticia in noticiasStore.noticias" :key="noticia.id">
            <h3>{{ noticia.titulo }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores expedita doloremque et, corrupti odit modi tempora deserunt deleniti praesentium laboriosam debitis eum culpa iste nam provident placeat. Sequi, atque?</p>
        </div>
    </article>
</template>