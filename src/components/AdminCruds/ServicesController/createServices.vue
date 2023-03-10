
<template>
    <div>
      <h1>Create a new service</h1>
      <form @submit.prevent="createServices">
       
        <label>
          Name:
          <input type="text" v-model="name" required>
        </label>
        <label>
          Description:
          <input type="text" v-model="description" required>
        </label>

        <button type="submit">Create Service</button>
      </form>
    </div>
  </template>

<script>
import axios from 'axios';
export default {
name: 'createServices',
data () {
return {
    name: '',
  description: '',
}
},
methods: {
async createServices() {
    try {
    const response = await axios.post(`http://localhost:3001/services`, {
   
      name: this.name,
      description: this.description
    });
    console.log(response.data);
    // reset form
 
    this.name = '';
    this.specialization = '';
    this.experience = 0;
  } catch (err) {
    console.error(err);
  }

  
}
}
}
</script>
<style></style>