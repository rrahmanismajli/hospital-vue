<template >
  <section style="background-color: #eee;">
    <div class="container py-5">
      <div class="row justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row" v-for="products in productsfields" v-bind:key="products._id">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img v-bind:src="`http://localhost:8080/static/pharmacyImages/${products.image}`" v-bind:alt="products.name"
                      class="w-100" />
                    <a href="#!">
                      <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>{{ products.name }}</h5>
                  <div class="d-flex flex-row">
                    <div class="text-danger mb-1 me-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <span>Stock:{{products.stock}}</span>
                  </div>
                  <div class="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span class="text-primary"> • </span>
                    <span>Light weight</span>
                    <span class="text-primary"> • </span>
                    <span>Best finish<br /></span>
                  </div>
                  <div class="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span class="text-primary"> • </span>
                    <span>For men</span>
                    <span class="text-primary"> • </span>
                    <span>Casual<br /></span>
                  </div>
                  <p class="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which don't look even slightly believable.
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div class="d-flex flex-row align-items-center mb-1">
                    <h4 class="mb-1 me-1">${{ products.price }}</h4>
                    
                  </div>
                  <h6 class="text-success">Free shipping</h6>
                  <div class="d-flex flex-column mt-4">
                    <button class="btn btn-primary btn-sm" type="button">Details</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
name: 'Products',
data () {
  return {
    productsfields:{},
    products: {}
  }
},created () {
  axios.get(`http://localhost:3001/products`)
  .then(response => {
    this.productsfields = response.data
  })
  .catch(e => {
    this.errors.push(e)
  })
},
methods: {
  onSubmit (evt) {
    evt.preventDefault()
    axios.post(`http://localhost:3001/products`, this.products)
    .then(function (response) {
      console.log(response);
      })
    
  }
}
}
</script>