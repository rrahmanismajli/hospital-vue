<template>
    <div>
      <h1>Edit Service</h1>
      <form @submit.prevent="updateService">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="services.name" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="services.description"></textarea>
        </div>

        <button type="submit">Update Service</button>
      </form>
      <button @click="deleteService">Delete Service</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    
    data() {
      return {
        services: {},
      }
    },
    async created() {
      try {
        const servicesId = this.$route.params.id
        const response = await axios.get(`http://localhost:3001/services/${servicesId}`)
        this.services = response.data
      } catch (error) {
        console.error(error)
      }
    },
    methods: {
      async updateService() {
        try {
          const response = await axios.patch(`http://localhost:3001/${this.services._id}`, this.services)
          console.log(response.data)
          this.$router.push('/services')
        } catch (error) {
          console.error(error)
        }
      },
      async deleteService() {
        try {
          const response = await axios.delete(`http://localhost:3001/services/${this.services._id}`)
          console.log(response.data)
          this.$router.push('/services')
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  