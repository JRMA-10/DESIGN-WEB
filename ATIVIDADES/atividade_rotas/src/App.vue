<template>
  <Header />
  <router-view to="/" />
  <Footer />
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
</style>
