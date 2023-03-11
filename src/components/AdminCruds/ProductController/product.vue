<template>
    <div>
      <h1>Services</h1>
  
      <router-link :to="{name:'create-product'}" class="btn btn-primary">New Product</router-link>
  
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>Stock</th>
        <th>Actions</th>

          </tr>
        </thead>
        <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td><img :src="`http://localhost:8080/static/pharmacyImages/${product.image}`" alt="Product Image" width="50"></td>
        <td>{{ product.stock }}</td>
        <td>
          <button class="btn btn-primary" @click="editDoctor(product)">Edit</button>
          <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
        </td>
      </tr>
    </tbody>
      </table>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  
  import axios from 'axios'
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
      editProducts(product) {
        this.$router.push({ name: 'edit-doctor', params: { id: product._id } });
      },
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
  