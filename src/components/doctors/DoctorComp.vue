<template>
  <div>
    <h1>Create New Doctor</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="specialization">Specialization:</label>
        <input type="text" id="specialization" v-model="specialization" required>
      </div>
      <div>
        <label for="specialization">Created by:</label>
        <input disabled v-bind:value="user.data.displayName" type="text" id="Author"  required>
      </div>
      <div>
        <label for="experience">Experience:</label>
        <input type="number" id="experience" v-model="experience" required>
      </div>
      <div>
        <label for="photo">Photo:</label>
        <input type="file" id="photo" @change="onFileChange" required>
      </div>
      <div>
        <label for="social-media">Social Media:</label>
        <input type="text" id="social-media" v-model="socialMedia" @keyup.enter="addSocialMedia">
        <button type="button" @click="addSocialMedia">Add</button>
      </div>
      <ul>
        <li style="list-style: none;" v-for="(socialMedia, index) in socialMedias" :key="index"><button><i class="fas fa-minus-circle"></i></button>{{ socialMedia }}</li>
      </ul>
      <button type="submit">Create Doctor</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import swal from 'sweetalert';
/*eslint-disable*/
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      name: '',
      specialization: '',
      experience: '',
      photo: null,
      socialMedias: [],
      socialMedia:''
    };
  },
  methods: {
    addSocialMedia() {
      if (this.socialMedia) {
        this.socialMedias.push(this.socialMedia)
        this.socialMedia = ''
      }
    },
    removeSocialMedia(){
      
    },
    submitForm() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('specialization', this.specialization);
      formData.append('experience', this.experience);
      formData.append('photo', this.photo);
      formData.append('author', this.user.data.displayName);
      formData.append('socialMedias',this.socialMedias);


      axios.post('http://localhost:3001/doctors', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        swal("Good job!", "Doctor Created!", "success");

        console.log(response.data);
        this.$router.push({name: 'all-doctors',})
      })
      .catch(error => {
        swal("Error!", error.message, "error");
        console.log(error.response.data);
      });
    },
    onFileChange(event) {
      this.photo = event.target.files[0];
    }
  }
};
</script>
