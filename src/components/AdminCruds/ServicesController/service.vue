<template>
    <div>
      <h1>Services</h1>
  
      <router-link to="/adminDash/services/create" class="btn btn-primary">New Service</router-link>
  
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
              <button @click="confirmDelete(services._id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import swal from 'sweetalert';
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
      },confirmDelete(id) {
      swal({
        title: 'Are you sure you want to delete this file?',
        text: "You won't be able to revert this!",
        icon: 'warning',
      buttons:{
        cancel:"Cancel",
        delete:{
          text:"Yes,Delete it",
          value:true,
        }
      }
      }).then((value) => {
        if (value) {
          // User clicked the "Yes, delete it!" button
          // Call your delete file function here
          this.deleteServices(id);
        }
      });
    },
      
      /*eslint-disable*/
      deleteServices(id) {
        
          axios.delete(`http://localhost:3001/services/${id}`)
            .then(response => {
              this.getServices();
              swal({
          title: 'Deleted!',
          text: 'The Department has been deleted.',
          icon: 'success'
        });
            })
            .catch(error => {
              console.log(error);
            });
        
      }
    }
  }
  </script>
  