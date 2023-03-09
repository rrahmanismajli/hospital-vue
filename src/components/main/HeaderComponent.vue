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
                                
        <div>
          <b-dropdown id="dropdown-1" v-bind:text="user.data.displayName" class="m-md-2">
            <b-dropdown-item>   
              <template v-if="user.role=='admin'">
                <li class="nav-item">
                <router-link to="adminDash" class="nav-link" id="alinklogin">Admin Dashboard</router-link>
                </li> 
                <li class="nav-item">
                <router-link to="createDepartment" class="nav-link" id="alinklogin">Create Dep</router-link>
                </li>     
            </template>
            <template v-else>
              <li class="nav-item">
              <router-link to="userDash" class="nav-link" id="alinklogin">User Dashboard</router-link>
              </li>     
          </template> </b-dropdown-item>
            <b-dropdown-item><template v-if="user.role=='user'">
              <li class="nav-item">
              <router-link to="adminDash" class="nav-link" id="alinklogin">My Appointments</router-link>
              </li>     
          </template></b-dropdown-item>
          
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active><li class="nav-item" style="cursor:pointer">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
          </li></b-dropdown-item>
         
          </b-dropdown>
        </div>
    
        

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
      const:{
        welcome:"Welcome"
      },
      navs:[
        {path:"/",name:"Home"},
        {path:"/doctor",name:"Doctor"},
        {path :"/about",name:"About Us"},
        {path:"/contactus",name:"Contact Us"},
        {path:"/newappointment",name:"Make a Appointment"},
        {path:"/pharmacy",name:"Pharmacy"},
        {path:"/department",name:"Departments"},
   
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
