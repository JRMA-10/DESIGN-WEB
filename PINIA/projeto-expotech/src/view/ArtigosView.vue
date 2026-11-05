<script setup>
import { ref } from 'vue'
import { useArtigosStore } from '@/stores/useNoticiasStore'
const artigosStore = useArtigosStore()
const titulo = ref('')
const texto = ref('')

function adicionarArtigoView() { 
    artigosStore.adicionarArtigo({
        titulo: titulo.value, 
        texto: texto.value
    })

    texto.value = ''
    titulo.value = ''
}

</script>

<template>
    <article>
        <h2>Artigos</h2>
    </article>

    <form @submit.prevent="adicionarArtigoView">
        <label>Título <input v-model="titulo"> </label> <br>
        <label>Texto <input v-model="texto"> </label> <br>
        <button type="submit">SUBMETER ARTIGO</button>
    </form>

    <div v-for="artigo in artigosStore.artigo" :key="artigo.id">
        <h3>{{ artigo.titulo }}</h3>
        <p>{{ artigo.texto }}</p>
        <button @click="artigosStore.removerArtigo(artigo.id)">Remover</button>
        <button @click="artigosStore.favoritarArtigo(artigo.id)">{{ artigo.favorito ? '❤️' : '🖤' }}</button>
    </div>
</template>