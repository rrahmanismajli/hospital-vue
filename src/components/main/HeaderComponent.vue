<template> 
 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img width="50px" height="50px" alt="Vue logo" src="@/assets/logo.png">
  <a class="navbar-brand" href="">Hospital
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li
      v-for="route in navs"
      v-bind:key="route.name"
      class="nav-item active">
       <router-link  v-bind:to="route.path" class="nav-link">
        <a>{{route.name}}</a>
       </router-link>
      </li>
     
    </ul>
    
  </div>
</nav>
</template>

<script>
export default{
  data(){
    return{
      navs:[
        {path:"/",name:"Home"},
        {path :"/about",name:"About Us"},
        {path:"/contactus",name:"Contact Us"},
        {path:"/newappointment",name:"Make a Appointment"},
        {path:"/login",name:"Log in"}
      ],
    }
  }
}

</script>

<style scoped>

h1{
    color: yellow;
}
</style>