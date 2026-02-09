<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
}
::selection, ::-moz-selection {
  background-color: #f0f;
}
</style>
