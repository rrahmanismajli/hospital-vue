<template>
    <div>
      <h1>Services</h1>
  
      <router-link to="/department/create" class="btn btn-primary">New Service</router-link>
  
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="services in services" :key="services._id">
            <td>{{ services.name }}</td>
            <td>{{ services.description }}</td>
            <td>
              <router-link :to="{ name: 'edit-services', params: { id: services._id } }" class="btn btn-primary">Edit</router-link>
              <button @click="deleteServices(services._id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ServicesComp',
    data() {
      return {
        services: []
      }
    },
    created() {
      this.getServices();
    },
    methods: {
        getServices() {
        axios.get('http://localhost:3001/services/')
          .then(response => {
            this.services = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },/*eslint-disable*/
      deleteServices(id) {
        if (confirm('Are you sure you want to delete this department?')) {
          axios.delete(`/services/${id}`)
            .then(response => {
              this.getServices();
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }
  </script>
  