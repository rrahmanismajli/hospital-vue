<template>
  <div id="app">
    <div class="container">
    <Header>
    </Header>
    <router-view></router-view>
    <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/main/HeaderComponent.vue'
import Footer from './components/main/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    Header,Footer
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
