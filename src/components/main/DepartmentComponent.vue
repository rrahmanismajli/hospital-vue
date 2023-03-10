<template >
    <section class="doctors" id="doctors">
        <div>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <h1 class="heading"> <span>departments</span> </h1>
        </div>
   <div class="box-container">
    <b-col v-for="departments in departmentsfields" v-bind:key="departments._id">
        <div class="box">
            <!---<img :src="`http://localhost:5000/images/${product.image}`" class="imagediv">-->
            <h3>{{ departments.name }}</h3>
            <span>{{ departments.description}}</span>
            <p>{{ departments. phoneNumber }}</p>
            <p>{{ departments.email }}</p>
            <div class="share">
                <a v-bind:href="departments.socialMedias[0]" class="fab fa-facebook-f"></a>
                <a v-bind:href="departments.socialMedias[1]" class="fab fa-instagram"></a>
                <a v-bind:href="departments.socialMedias[2]"  class="fab fa-twitter"></a>
                <a v-bind:href="departments.socialMedias[3]" class="fab fa-linkedin"></a>
            </div>
        </div>
    </b-col>
    </div>
</section>
</template>
<script></script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

:root {
    --green: #16a085;
    --black: #444;
    --light-color: #777;
    --box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
    --text-shadow: .4rem .4rem 0 rgba(0, 0, 0, .2);
    --border: .2rem solid var(--green);
}

* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-transform: capitalize;
    transition: all .2s ease-out;
    text-decoration: none;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 7rem;
    scroll-behavior: smooth;
}

section {
    padding: 2rem 9%;
}

section:nth-child(even) {
    background: #f5f5f5;
}

.heading {
    text-align: center;
    padding-bottom: 2rem;
    text-shadow: var(--text-shadow);
    text-transform: uppercase;
    color: var(--black);
    font-size: 5rem;
    letter-spacing: .4rem;
}

.heading span {
    text-transform: uppercase;
    color: var(--green);
}

.doctors .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
}

.doctors .box-container .box {
    text-align: center;
    background: #fff;
    border-radius: .5rem;
    border: var(--border);
    box-shadow: var(--box-shadow);
    padding: 2rem;
}

.doctors .box-container .box img {
    height: 20rem;
    border: var(--border);
    border-radius: .5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.doctors .box-container .box h3 {
    color: var(--black);
    font-size: 2.5rem;
}

.doctors .box-container .box span {
    color: var(--green);
    font-size: 1.5rem;
}

.doctors .box-container .box .share {
    padding-top: 2rem;
}

.doctors .box-container .box .share a {
    height: 5rem;
    width: 5rem;
    line-height: 4.5rem;
    font-size: 2rem;
    color: var(--green);
    border-radius: .5rem;
    border: var(--border);
    margin: .3rem;
}

.doctors .box-container .box .share a:hover {
    background: var(--green);
    color: #fff;
    box-shadow: var(--box-shadow);
}




/* media queries  */
@media (max-width:991px) {

    html {
        font-size: 55%;
    }

    .header {
        padding: 2rem;
    }

    section {
        padding: 2rem;
    }

}

@media (max-width:768px) {

    #menu-btn {
        display: initial;
    }

    .header .navbar {
        position: absolute;
        top: 115%;
        right: 2rem;
        border-radius: .5rem;
        box-shadow: var(--box-shadow);
        width: 30rem;
        border: var(--border);
        background: #fff;
        transform: scale(0);
        opacity: 0;
        transform-origin: top right;
        transition: none;
    }

    .header .navbar.active {
        transform: scale(1);
        opacity: 1;
        transition: .2s ease-out;
    }

    .header .navbar a {
        font-size: 2rem;
        display: block;
        margin: 2.5rem;
    }

}

@media (max-width:450px) {

    html {
        font-size: 50%;
    }

}
</style>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Departments',
  data () {
    return {
        departmentsfields:{},
      epartments: {}
    }
  },created () {
    axios.get(`http://localhost:3001/departments`)
    .then(response => {
      this.departmentsfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3001/departments`, this.departments)
      .then(function (response) {
        console.log(response);
        })
      
    }
  }
}
</script>