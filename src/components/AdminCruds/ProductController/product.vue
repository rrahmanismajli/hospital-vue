<template>
    <div>
      <h1>Products</h1>
  
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
          <button class="btn btn-primary" @click="editProducts(product)">Edit</button>
          <button class="btn btn-danger" @click="confirmDelete(product._id)">Delete</button>
        </td>
      </tr>
    </tbody>
      </table>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  
  import axios from 'axios'
  import swal from 'sweetalert'
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
        this.$router.push({ name: 'edit-product', params: { id: product._id } });
      },
        getProducts() {
        axios.get('http://localhost:3001/products/')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },confirmDelete(id) {
      swal({
        title: 'Are you sure you want to delete this file?',
        text: "You won't be able to revert this!",
        icon: 'warning',
      buttons:{
        cancel: "Cancel",
        delete:{
          text:"Yes,Delete it",
          value:true,
        }
      }
      }).then((value) => {
        if (value) {
          // User clicked the "Yes, delete it!" button
          // Call your delete file function here
          this.deleteProduct(id);
        }
      });
    },/*eslint-disable*/
      deleteProduct(id) {
         
          axios.delete(`http://localhost:3001/products/${id}`)
            .then(response => {
              this.getProducts();
              swal({
          title: 'Deleted!',
          text: 'The Product has been deleted.',
          icon: 'success'
        });
            })
            .catch(error => {
              swal({
          title: 'Error!',
          text: `${error.message}`,
          icon: 'warning'
        });
              console.log(error);
            });
        
      }
    }
  }
  </script>
  