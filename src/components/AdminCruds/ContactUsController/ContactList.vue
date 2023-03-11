<template>
    <div>
      <h1>Contact List</h1>  
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact._id">
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phoneNumber }}</td>
            <td>{{ contact.message }}</td>
            <td>
              <router-link :to="{ name: 'edit-contact', params: { id: contact._id } }" class="btn btn-primary">Edit</router-link>
              <button @click="deleteContact(contact._id)" class="btn btn-danger">Delete</button>
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
    name: 'ContactUsController',
    data() {
      return {
        contacts: []
      }
    },
    created() {
      this.getContacts();
    },
    methods: {
        getContacts() {
        axios.get('http://localhost:3001/contacts/')
          .then(response => {
            this.contacts = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },/*eslint-disable*/
      deleteContact(id) {
        if (confirm('Are you sure you want to delete this contact?')) {
          axios.delete(`/contacts/${id}`)
            .then(response => {
              this.getContacts();
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }
  </script>
  