<template>
<div>
    <h1>Add Product to Stock</h1>
    <form @submit.prevent="addProduct">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="productName" required>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="productPrice" required>
      </div>
      <div>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" v-model.number="productQuantity" required>
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productName: '',
      productPrice: 0,
      productQuantity: 0,
    };
  },
  methods: {
    addProduct() {
      const product = {
        name: this.productName,
        price: this.productPrice,
        quantity: this.productQuantity,
      };
      // TODO: add product to stock
      console.log(product);
      this.productName = '';
      this.productPrice = 0;
      this.productQuantity = 0;
    },
  },
};
</script>
<style>
</style>