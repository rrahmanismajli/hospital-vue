<template>
    <div>
      <h1>All Doctors</h1>
      
      <router-link :to="{name:'doctorCrud'}" class="btn btn-primary">New doctor</router-link>
      <table  class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doctor in doctors" :key="doctor._id">
            <td>{{ doctor.name }}</td>
            <td>{{ doctor.specialization }}</td>
            <td>{{ doctor.experience }}</td>
            <td>
              <img width="75px" height="75px" :src="'http://localhost:8080/doctorimages/' + doctor.photo" alt="Doctor Photo">
            </td>
            <td>
              <button class="btn btn-primary" @click="editDoctor(doctor)">Edit</button>
              <button class="btn btn-danger" @click="deleteDoctor(doctor)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
import swal from 'sweetalert';
 /* eslint-disable */ 
  export default {
    data() {
      return {
        doctors: [],
      };
    },
    mounted() {
      this.fetchDoctors();
    },
    methods: {
      async fetchDoctors() {
        try {
          const response = await axios.get('http://localhost:3001/doctors');
          this.doctors = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      editDoctor(doctor) {
        this.$router.push({ name: 'edit-doctor', params: { id: doctor._id } });
      },
      async deleteDoctor(doctor) {
        if (swal("Good job!", `Are you sure you want to delete ${doctor.name}?`, "success")) {
          try {
            await axios.delete(`http://localhost:3001/doctors/${doctor._id}`);
            this.doctors = this.doctors.filter((d) => d._id !== doctor._id);
          } catch (error) {
            console.error(error);
          }
        }
      },
    },
  };
  </script>
  