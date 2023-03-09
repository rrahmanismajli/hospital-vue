<template>
    <div>
      <h1>Departments</h1>
  
      <router-link to="/department/create" class="btn btn-primary">New Department</router-link>
  
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Phone Number</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="department in departments" :key="department._id">
            <td>{{ department.name }}</td>
            <td>{{ department.description }}</td>
            <td>{{ department.phoneNumber }}</td>
            <td>{{ department.email }}</td>
            <td>
              <router-link :to="{ name: 'edit-department', params: { id: department._id } }" class="btn btn-primary">Edit</router-link>
              <button @click="deleteDepartment(department._id)" class="btn btn-danger">Delete</button>
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
    name: 'DepartmentsComp',
    data() {
      return {
        departments: []
      }
    },
    created() {
      this.getDepartments();
    },
    methods: {
      getDepartments() {
        axios.get('http://localhost:3001/departments/')
          .then(response => {
            this.departments = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },/*eslint-disable*/
      deleteDepartment(id) {
        if (confirm('Are you sure you want to delete this department?')) {
          axios.delete(`/departments/${id}`)
            .then(response => {
              this.getDepartments();
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }
  </script>
  