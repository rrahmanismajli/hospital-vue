<template> 
 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img width="50px" height="50px" alt="Vue logo" src="@/assets/logo.png">
  <a class="navbar-brand" href="">MedCare
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
      <template v-if="user.loggedIn">
                                
        <div class="nav-item">
            <a class="nav-link"> Welcome, {{user.data.displayName}} </a>
        </div>
        <li class="nav-item" style="cursor:pointer">
            <a class="nav-link" @click.prevent="signOut">Sign out</a>
        </li>
        

    </template>
    <template v-else>
        <li class="nav-item">
        <router-link to="login" class="nav-link" id="alinklogin">Login</router-link>
        </li>
        <li class="nav-item">
        <router-link to="register" class="nav-link" id="alinkreg">Register</router-link>
        </li>
        

    </template>
    </ul>
    
  </div>
</nav>
</template>

<script>

import { mapGetters } from "vuex";
import firebase from "firebase";
export default{
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data(){
    return{
      navs:[
        {path:"/",name:"Home"},
        {path :"/about",name:"About Us"},
        {path:"/contactus",name:"Contact Us"},
        {path:"/newappointment",name:"Make a Appointment"},
   
      ],
    }
  },  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    },
  }

}

</script>

<style scoped>

h1{
    color: yellow;
}
</style>
