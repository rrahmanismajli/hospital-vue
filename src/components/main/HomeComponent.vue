<template><section>
<section class="home" id="home">

    <div class="image">
    <!---- <img src="../../assets/home-img.svg" alt="">--->
    </div>

    <div class="content">
        <h3>stay safe, stay healthy</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
        <a  class="btn"><router-link :to="{name:'contactus'}" class="text-dark" id="alinklogin">Contact</router-link> <span class="fas fa-chevron-right"></span> </a>
    </div>

</section>
<section class="icons-container">

    <div class="icons">
        <i class="fas fa-user-md"></i>
        <h3>140+</h3>
        <p>doctors at work</p>
    </div>

    <div class="icons">
        <i class="fas fa-users"></i>
        <h3>1040+</h3>
        <p>satisfied patients</p>
    </div>

    <div class="icons">
        <i class="fas fa-procedures"></i>
        <h3>500+</h3>
        <p>bed facility</p>
    </div>


</section>
<section class="services" id="services">

    <h1 class="heading"> our <span>services</span> </h1>

    <div class="box-container">
        <b-col v-for="services  in servicesfields" v-bind:key="services._id">
        <div class="box">
            <i class="fas fa-notes-medical"></i>
            <h3>{{ services.name }}</h3>
            <p>{{ services.description}}</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>
    </b-col>
      <!-- <div class="box">
            <i class="fas fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>

        <div class="box">
            <i class="fas fa-user-md"></i>
            <h3>expert doctors</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>

        <div class="box">
            <i class="fas fa-pills"></i>
            <h3>medicines</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>

        <div class="box">
            <i class="fas fa-procedures"></i>
            <h3>bed facility</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>

        <div class="box">
            <i class="fas fa-heartbeat"></i>
            <h3>total care</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>
-----> 
    </div>

</section>
</section></template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Services',
  data () {
    return {
        servicesfields:{},
      services: {}
    }
  },created () {
    axios.get(`http://localhost:3001/services`)
    .then(response => {
      this.servicesfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3001/services`, this.services)
      .then(function (response) {
        console.log(response);
        })
      
    }
  }
}
</script>
<style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

    :root{
        --green:#16a085;
        --black:#444;
        --light-color:#777;
        --box-shadow:.5rem .5rem 0 rgba(22, 160, 133, .2);
        --text-shadow:.4rem .4rem 0 rgba(0, 0, 0, .2);
        --border:.2rem solid var(--green);
    }
    
    *{
        font-family: 'Poppins', sans-serif;
        margin:0; padding: 0;
        box-sizing: border-box;
        outline: none; border: none;
        text-transform: capitalize;
        transition: all .2s ease-out;
        text-decoration: none;
    }
    
    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-padding-top: 7rem;
        scroll-behavior: smooth;
    }
    
    section{
        padding:2rem 9%;
    }
    
    section:nth-child(even){
        background: #f5f5f5;
    }
    
    .heading{
        text-align: center;
        padding-bottom: 2rem;
        text-shadow: var(--text-shadow);
        text-transform: uppercase;
        color:var(--black);
        font-size: 5rem;
        letter-spacing: .4rem;
    }
    
    .heading span{
        text-transform: uppercase;
        color:var(--green);
    }
    
    .btn{
        display: inline-block;
        margin-top: 1rem;
        padding: .5rem;
        padding-left: 1rem;
        border:var(--border);
        border-radius: .5rem;
        box-shadow: var(--box-shadow);
        color:var(--green);
        cursor: pointer;
        font-size: 1.7rem;
        background: #fff;
    }
    
    .btn span{
        padding:.7rem 1rem;
        border-radius: .5rem;
        background: var(--green);
        color:#fff;
        margin-left: .5rem;
    }
    
    .btn:hover{
        background: var(--green);
        color:#fff;
    }
    
    .btn:hover span{
        color: var(--green);
        background:#fff;
        margin-left: 1rem;
    }
    
    .header{
        padding:2rem 9%;
        position: fixed;
        top:0; left: 0; right: 0;
        z-index: 1000;
        box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
    }
    
    .header .logo{
        font-size: 2.5rem;
        color: var(--black);
    }
    
    .header .logo i{
        color: var(--green);
    }
    
    .header .navbar a{
        font-size: 1.7rem;
        color: var(--light-color);
        margin-left: 2rem;
    }
    
    .header .navbar a:hover{
        color: var(--green);
    }
    
    #menu-btn{
        font-size: 2.5rem;
        border-radius: .5rem;
        background: #eee;
        color:var(--green);
        padding: 1rem 1.5rem;
        cursor: pointer;
        display: none;
    }
    
    .home{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap:1.5rem;
        padding-top: 10rem;
    }
    
    .home .image{
        flex:1 1 45rem;
    }
    
    .home .image img{
        width: 100%;
    }
    
    .home .content{
        flex:1 1 45rem;
    }
    
    .home .content h3{
        font-size: 4.5rem;
        color:var(--black);
        line-height: 1.8;
        text-shadow: var(--text-shadow);
    }
    
    .home .content p{
        font-size: 1.7rem;
        color:var(--light-color);
        line-height: 1.8;
        padding: 1rem 0;
    }
    
    .icons-container{
        display: grid;
        gap:2rem;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
    
    .icons-container .icons{
        border:var(--border);
        box-shadow: var(--box-shadow);
        border-radius: .5rem;
        text-align: center;
        padding: 2.5rem;
    }
    
    .icons-container .icons i{
        font-size: 4.5rem;
        color:var(--green);
        padding-bottom: .7rem;
    }
    
    .icons-container .icons h3{
        font-size: 4.5rem;
        color:var(--black);
        padding: .5rem 0;
        text-shadow: var(--text-shadow);
    }
    
    .icons-container .icons p{
        font-size: 1.7rem;
        color:var(--light-color);
    }
    
    .services .box-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
        gap:2rem;
    }
    
    .services .box-container .box{
        background:#fff;
        border-radius: .5rem;
        box-shadow: var(--box-shadow);
        border:var(--border);
        padding: 2.5rem;
    }
    
    .services .box-container .box i{
        color: var(--green);
        font-size: 5rem;
        padding-bottom: .5rem;
    }
    
    .services .box-container .box h3{
        color: var(--black);
        font-size: 2.5rem;
        padding:1rem 0;
    }
    
    .services .box-container .box p{
        color: var(--light-color);
        font-size: 1.4rem;
        line-height: 2;
    }</style>