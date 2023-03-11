<template>
    <div>
      <label for="name">Product Name:</label>
      <input type="text" id="name" v-model="product.name">
  
      <label for="price">Product Price:</label>
      <input type="text" id="price" v-model="product.price">
  
      <label for="image">Product Image URL:</label>
      <input type="text" id="image" v-model="product.image">
  
      <label for="description">Product Description:</label>
      <textarea id="description" v-model="product.description"></textarea>
  
      <button @click="updateProduct">Update Product</button>
      <button @click="deleteProduct">Delete Product</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        product: {},
        required: true
      }
    },
   
        async created() {
      try {
        const productId = this.$route.params.id
        const response = await axios.get(`http://localhost:3001/products/${productId}`)
        this.product = response.data
      } catch (error) {
        console.error(error)
      }
    },
    methods: {
   
      async updateProduct() {
        try {
          const response = await axios.patch(`http://localhost:3001/products/${this.product._id}`, this.product)
          console.log(response.data)
          this.$router.push('/product')
        } catch (error) {
          console.error(error)
        }
      },
      async deleteProduct() {
        try {
          const response = await axios.delete(`http://localhost:3001/products/${this.product._id}`)
          console.log(response.data)
          this.$router.push('/product')
        } catch (error) {
          console.error(error)
        }
      }
    }
    }
  
  </script>
  