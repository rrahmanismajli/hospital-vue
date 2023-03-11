<template>
    <div>
      <h1>Departments</h1>
  
      <router-link to="/adminDash/department/create" class="btn btn-primary">New Department</router-link>
  
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
              <button @click="confirmDelete(department._id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import swal from 'sweetalert'
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
      },confirmDelete(id) {
      swal({
        title: 'Are you sure you want to delete this file?',
        text: "You won't be able to revert this!",
        icon: 'warning',
      buttons:{
        cancel: "Cancel",
        delete:{
          text:"Yes,Delete it",
          value:true,
        }
      }
      }).then((value) => {
        if (value) {
          // User clicked the "Yes, delete it!" button
          // Call your delete file function here
          this.deleteDepartment(id);
        }
      });
    },
      /*eslint-disable*/
      deleteDepartment(id) {
         
          axios.delete(`http://localhost:3001/departments/${id}`)
            .then(response => {
              this.getDepartments();
              swal({
          title: 'Deleted!',
          text: 'The Department has been deleted.',
          icon: 'success'
        });
            })
            .catch(error => {
              swal({
          title: 'Error!',
          text: `${error.message}`,
          icon: 'warning'
        });
              console.log(error);
            });
        }
      
    }
  }
  </script>
  