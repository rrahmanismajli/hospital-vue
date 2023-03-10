<template>
  
    <div v-if="isDashboardPage" id="app">
 
    <Dashboard></Dashboard>

    </div>



  <div v-else  id="app">
   
    <Header >
    </Header>
    <router-view></router-view>
    <Footer></Footer>

  </div>

</template>

<script>
import Header from './components/main/HeaderComponent.vue'
import Footer from './components/main/FooterComponent.vue'
import Dashboard from './components/dashboards/adminComp.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Dashboard
}, computed: {
    isDashboardPage () {
      
      // Check if the current route is the dashboard page
      return this.$route.path.includes('admin');
      
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing:inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
