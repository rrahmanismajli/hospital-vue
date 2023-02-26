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
              <form @submit.prevent="handleLoginUser">
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
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';

    export default{
        data(){
            return{
                email:"",
                password:""
            }
        },
        methods:{
          async handleLoginUser(){
                const auth = getAuth();
               const response = await signInWithEmailAndPassword(auth,this.email,this.password);
               const user = response.user;
              this.user  = user;
              console.log("user= "+ user);
            }
        }
    }
</script>
<style></style>