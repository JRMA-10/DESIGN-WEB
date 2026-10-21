<template>
  <cabecalho />
  <router-view />
  <rodape />
</template>

<script>
import cabecalho from './components/Header.vue'
import rodape from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    cabecalho, rodape
  }
}
</script>

<style>

</style>
