<template>
    <div>
      <h1>Services</h1>
  
      <router-link to="/adminDash/products/create" class="btn btn-primary">New Product</router-link>
  
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>Description</th>
        <th>Actions</th>

          </tr>
        </thead>
        <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td><img :src="product.image" alt="Product Image" width="50"></td>
        <td>{{ product.description }}</td>
        <td>
          <router-link :to="'/edit-product/' + product.id">Edit</router-link>
          <button @click="deleteProduct(product.id)">Delete</button>
        </td>
      </tr>
    </tbody>
      </table>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'ProductsComp',
    data() {
      return {
        products: []
      }
    },
    created() {
      this.getProducts();
    },
    methods: {
        getProducts() {
        axios.get('http://localhost:3001/products/')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },/*eslint-disable*/
      deleteProduct(id) {
        if (confirm('Are you sure you want to delete this product?')) {
          axios.delete(`/products/${id}`)
            .then(response => {
              this.getProducts();
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }
  </script>
  