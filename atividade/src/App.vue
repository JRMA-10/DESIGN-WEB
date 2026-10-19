<template>
  <header><Header /></header>
  <main></main>
  <footer><Footer /></footer>
    
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, 
    Footer
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
main {
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
  background-color: blue;
}
</style>
