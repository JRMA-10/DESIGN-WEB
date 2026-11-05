import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { artigosLista } from '@/data/artigosLista'

export const useArtigosStore = defineStore('artigos',() => {
    //Define e exporta a store usando o formato Setup Store
    //'artigos' é o identificador único da store dentro do pinia

    const STORAGE_KEY = 'artigos_expotec'
    //cria a chave no localstorage

    const carregarArtigos = () => {
        const artigosSalvos  = localStorage.getItem(STORAGE_KEY)
        //recupera se tiver algo no storage

        if( artigosSalvos ){ //verifica se tem algum dado no navegador
            try {
                return JSON.parse(artigosSalvos)
            } catch (e){
                console.error("erro ao ler os artigos")
            }
        }
        return artigosLista //caso não tenha nada no localstorage, pega a lista mesmo
    }
    const artigos = ref(carregarArtigos()) //declara a variável de estado como reativa e chama a função carregarNoticias

    function removerArtigo(id) {
        const indice = artigos.value.findIndex(j => j.id === id)
        artigos.value.splice(indice, 1)
    }
    function favoritarArtigo(id) {
        const artigos = artigos.value.find(j => j.id === id)
        artigos.favorito = !artigos.favorito
    }
    function adicionarArtigo(novoArtigo) {
        const id = artigos.value.length > 0 ? Math.max(...artigos.value.map(a => a.id)) + 1 : 1
        artigos.value.push({
            id, 
            titulo: novoArtigo.titulo,
            texto: novoArtigo.texto, 
            favorito: false
        })
    }


    //watch é o observador de mudanças
    watch( 
        //garante a persistência (capacidade de manter as informações salvas) automática dos dados
        () => artigos.value, //referência do valor que será monitorado
        (novasNoticias) => { //essa função será executada sempre que o houver alteração
            localStorage.setItem(STORAGE_KEY, JSON.stringify(novosArtigos)) //grava no localstorage
        },
        {deep: true} //observação profunda, se muda um valor de uma propriedade do objeto, modificará também
    )

    return {
        artigos, //variável que poderá ser acessada por outras páginas, por exemplo NoticiasView
        removerArtigo, 
        favoritarArtigo, 
        adicionarArtigo
    }
})