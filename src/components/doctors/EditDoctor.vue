<template>
    <div>
      <h2>Update Doctor</h2>
      <form @submit.prevent="updateDoctor">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="doctor.name" />
        </div>
        <div>
          <label for="specialization">Specialization:</label>
          <input type="text" id="specialization" v-model="doctor.specialization" />
        </div>
        <div>
          <label for="experience">Experience:</label>
          <input type="text" id="experience" v-model="doctor.experience" />
        </div>
        <div>
          <label for="photo">Photo:</label>
          <input type="file" id="photo" @change="onFileChange" />
        </div>
        <button type="submit">Update Doctor</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
   /* eslint-disable */ 
  export default {
    data() {
      return {
        doctor: {},
        photo: null,
       
      };
    },
    created() {
      // Fetch the doctor data by ID from the backend
      axios.get(`http://localhost:3001/doctors/${this.$route.params.id}`).then((response) => {
        this.doctor = response.data;
      });
    },
    methods: {
      onFileChange(event) {
        this.photo = event.target.files[0];
      },
      updateDoctor() {
        const formData = new FormData();
        formData.append("name", this.doctor.name);
        formData.append("specialization", this.doctor.specialization);
        formData.append("experience", this.doctor.experience);
        if (this.photo) {
          formData.append("photo", this.photo, this.photo.name);
        }
  
        axios.put(`http://localhost:3001/doctors/${this.$route.params.id}`, formData)
          .then((response) => {
            swal("Good job!", "Doctor Edited!", "success");
            // Redirect to the admin page after updating the doctor
            this.$router.push({name: 'all-doctors',});
          })
          .catch((error) => {
            swal("Error!",`${error.message}`, "warning");
            console.error(error);
          });
      },
    },
  };
  </script>
  