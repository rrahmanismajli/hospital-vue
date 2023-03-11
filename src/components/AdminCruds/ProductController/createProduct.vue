<template>
    <div>
        <form  @submit.prevent="createServices">
      <label for="name">Product Name:</label>

      <input type="text" id="name" v-model="product.name">
  
      <label for="price">Product Price:</label>
      <input type="text" id="price" v-model="product.price">
  
      <label for="image">Product Image URL:</label>
      <input type="text" id="image" v-model="product.image">
  
      <label for="description">Product Description:</label>
      <textarea id="description" v-model="product.description"></textarea>
  
      <button @click="createProduct">Create Product</button>
    </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: '',
          price: '',
          image: '',
          description: ''
        }
      }
    },
    methods: {
        async createProduct() {

        try {
    const response = await axios.post(`http://localhost:3001/services`, {
   
      name: this.product.name,
      price: this.product.price,
      image:this.product.image,
      description:this.product.description


    });
    console.log(response.data);
       
        this.product.price = '';
        this.product.image = '';
        this.product.description = '';
      }   catch (err) {
    console.error(err);
  }

  
}
}}
  </script>
  