
<template>
    <div>
      <h1>Create a new service</h1>
      <form @submit.prevent="createServices">
       
        <label>
          Name:
          <input type="text" v-model="name" required>
          <div v-if="$v.name.$error">Name is required.</div>
        </label>
        
        <label>
          Description:
          <input type="text" v-model="description" required>
          <div v-if="$v.description.$error">Description is required.</div>
        </label>

        <button type="submit">Create Service</button>
      </form>
    </div>
  </template>

<script>
import axios from 'axios';
import { required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
  mixins: [validationMixin],
name: 'createServices',
data () {
return {
    name: '',
  description: '',
}
},  
validations: {
    name: {
      required
    },
    description:{
        required
    },
  },
methods: {
async createServices() {
    try {
    const response = await axios.post(`http://localhost:3001/services`, {
   
      name: this.name,
      description: this.description
    });
    console.log(response.data);
    this.$router.push({name: 'all-services',})
    // reset form
 
    this.name = '';
    this.description = '';
  } catch (err) {
    console.error(err);
  }

  
}
}
}
</script>
<style></style>