<template>
    <div>
      <h2>Update Product</h2>
      <form @submit.prevent="updateProduct">
      <label for="name">Product Name:</label>
      <input type="text" id="name" v-model="product.name">
  
      <label for="price">Product Price:</label>
      <input type="text" id="price" v-model="product.price">
      <div>
        <label for="photo">Photo:</label>
       <img width="100px" height="100px" :src="`http://localhost:8080/static/pharmacyImages/${product.image}`">
        <input type="file" id="image" @change="onFileChange" />
      </div>
      <label for="name">Stock:</label>
      <input type="text" id="stock" v-model="product.stock">
      <label for="description">Product Description:</label>
      <textarea id="description" v-model="product.description"></textarea>
  
      <button type="submit">Update Product</button>
    </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import swal from 'sweetalert'
  import { mapGetters } from 'vuex';
     /* eslint-disable */
  export default {
    computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
    data() {
      return {
        product: {},
       
      
      }
    },
   
         created() {
      try {
          axios.get(`http://localhost:3001/products/${this.$route.params.id}`).then((response)=>{

        this.product = response.data});
      } catch (error) {
        console.error(error)
      }
    },
    methods: {
      onFileChange(event) {
        this.product.image = event.target.files[0];
      },
      updateProduct() {
        const formData = new FormData();
        formData.append("name", this.product.name);
        formData.append("price", this.product.price);
        formData.append("description", this.product.description);
        formData.append("stock", this.product.stock);
        formData.append("author",this.user.data.displayName);
        if (this.product.image) {
          formData.append("image", this.product.image, this.product.image.name);
        }
  
        axios.put(`http://localhost:3001/products/${this.$route.params.id}`, formData)
          .then((response) => {
            swal("Good job!", "Product Edited!", "success");
            // Redirect to the admin page after updating the doctor
            this.$router.push({name: 'all-products',});
          })
          .catch((error) => {
            swal("Error!",`${error.message}`, "warning");
            console.error(error);
          });
      },
    }
    }
  
  </script>
  