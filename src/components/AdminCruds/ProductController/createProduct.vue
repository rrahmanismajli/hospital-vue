<template>
  <div>
    <h1>Create New Product</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="Price">Price:</label>
        <input type="currency" id="price" v-model="price" required>
      </div>
      <div>
        <label for="specialization">Created by:</label>
        <input disabled v-bind:value="user.data.displayName" type="text" id="Author"  required>
      </div>
      <div>
        <label for="experience">Stock:</label>
        <input type="number" id="stock" v-model="stock" required>
      </div>
      <div>
        <label for="image">Photo:</label>
        <input type="file" id="image" @change="onFileChange" required>
      </div>
      <button type="submit">Create Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import swal from 'sweetalert';
/*eslint-disable*/
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      name: '',
      price: '',
      stock: '',
      image: null,
      
    };
  },
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('price', this.price);
      formData.append('stock', this.stock);
      formData.append('image', this.image);
      formData.append('author', this.user.data.displayName);


      axios.post('http://localhost:3001/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        swal("Success!", "Product Created!", "success");

        console.log(response.data);
        this.$router.push({name: 'all-products',})
      })
      .catch(error => {
        swal("Error!", error.message, "error");
        console.log(error.response.data);
      });
    },
    onFileChange(event) {
      this.image = event.target.files[0];
    }
  }
};
</script>
