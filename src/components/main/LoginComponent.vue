<template>
    <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image">
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-primary-50 mb-5">Please enter your login and password!</p>
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <form @submit.prevent="submit">
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" id="email" v-model="email" class="form-control form-control-lg" />
                  <label class="form-label" for="email">Email address</label>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="password" v-model="password" class="form-control form-control-lg" />
                  <label class="form-label" for="password">Password</label>
                </div>
      
                <div class="d-flex justify-content-around align-items-center mb-4">
                  <!-- Checkbox -->
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
      
                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

      
              </form>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
/* eslint-disable*/
import firebase from "firebase";

import { mapGetters } from "vuex";
    export default{
      computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },data(){
            return{
                email:"",
                password:"",
                error:null
            }
        },
        methods:{
          submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.$router.push({name: 'home',})
          window.localStorage.setItem('email', this.form.email);
        })
        .catch(err => {
          this.error = err.message;
        });
        const userId = firebase.auth().currentUser.uid;
        console.log(userId);
    }

        }
    }
</script>
<style></style>