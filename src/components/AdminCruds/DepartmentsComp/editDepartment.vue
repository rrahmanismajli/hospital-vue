<template>
    <div>
      <h1>Edit Department</h1>
      <form @submit.prevent="updateDepartment">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="department.name" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="department.description"></textarea>
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="department.address">
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input type="tel" id="phoneNumber" v-model="department.phoneNumber" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="department.email" required>
        </div>
        <div>
          <label for="social-media">Social Media:</label>
          <input type="text" id="social-media" v-model="socialMedia" @keyup.enter="addSocialMedia">
          <button type="button" @click="addSocialMedia">Add</button>
        </div>
        <ul>
          <li v-for="(socialMedia, index) in department.socialMedias" :key="index">{{ socialMedia }}</li>
        </ul>
        <button type="submit">Update Department</button>
      </form>
      <button @click="deleteDepartment">Delete Department</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    
    data() {
      return {
        department: {},
        socialMedia: ''
      }
    },
    async created() {
      try {
        const departmentId = this.$route.params.id
        const response = await axios.get(`http://localhost:3001/departments/${departmentId}`)
        this.department = response.data
      } catch (error) {
        console.error(error)
      }
    },
    methods: {
      addSocialMedia() {
        if (this.socialMedia) {
          this.department.socialMedias.push(this.socialMedia)
          this.socialMedia = ''
        }
      },
      async updateDepartment() {
        try {
          const response = await axios.patch(`http://localhost:3001/departments/${this.department._id}`, this.department)
          console.log(response.data)
          this.$router.push('/department')
        } catch (error) {
          console.error(error)
        }
      },
      async deleteDepartment() {
        try {
          const response = await axios.delete(`http://localhost:3001/departments/${this.department._id}`)
          console.log(response.data)
          this.$router.push('/department')
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  