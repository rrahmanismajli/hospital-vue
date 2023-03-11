<template>
    <div>
      <h1>Appointment List</h1>  
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="appointment in appointments" v-bind:key="appointment.name" class="post">
            <td>{{ appointment.name }}</td>
            <td>{{ appointment.number }}</td>
            <td>{{  appointment.email }}</td>
            <td>{{  appointment.date }}</td>
           
            </tr>
        </tbody>
      </table>

    </div>
  </template>
  
  <script>
  import { getDocs } from '@firebase/firestore';
  import db from '../../../firebase/db';
  import { collection } from 'firebase/firestore'
  
  export default {
    name: 'AppointmentList',
    data() {
      return {
        appointment: [],
      }
    },
    methods: {
      async fetchAppointments() {
        const fetchedAppointments = [];
        const snapshots = await getDocs(collection(db, 'appointments'))
        snapshots.forEach((snapshot) => {
          const appointment = snapshot.data();
          fetchedAppointments.push(appointment);
        })
        this.appointment = fetchedAppointments;
      }
    },
    mounted() {
      this.fetchAppointments();
    }
  }
  </script>
  
