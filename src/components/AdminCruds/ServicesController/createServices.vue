<template>
  <div>
    <h1>Create New Service Card</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <input type="text" id="description" v-model="description" required>
      </div>
      <div>
        <label for="backgroundImage">Background Image:</label>
        <input type="file" id="backgroundImage" @change="onFileChange" required>
      </div>

      <button type="submit">Create Service Card</button>
    </form><br><br>
    <h1>This is a preview how your Service Card would look like</h1>
    <hr>
    <div style="justify-content:center" class="row row-cols-1 row-cols-md-3 g-4">
          <div  class="col">
      <div class="card">
        <img v-if="photo" :src="photo" alt="Service Photo">
        <img v-else width="100px" height="100px" class="card-img-top" src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80">
     
        <div class="card-body">
          <h5 class="card-title">{{ name || 'Enter a service name' }}</h5>
          <p class="card-text">
            {{ description || 'Enter a service description' }}
          </p>
        </div>
      </div>
    </div>
  </div>

  
  </div>
</template>

<script>
/*import previewCard from './previewService.vue';*/
import axios from 'axios';
import swal from 'sweetalert';
/*eslint-disable*/
export default {
  /*components: {
    previewCard
  },*/
  data() {
    return {
      name: '',
      description: '',
      backgroundImage: null,
      previewMode:false,
   
    };
  },
  computed: {
    previewName() {
      return this.name || 'Enter a service name'
    },
    previewDescription() {
      return this.description || 'Enter a service description'
    }
  },
  /*created(){
    this.previewMode = true;
  },*/
  methods: {

    submitForm() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('backgroundImage', this.backgroundImage);


      axios.post('http://localhost:3001/services', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        swal("Good job!", "Service Card Created!", "success");

        console.log(response.data);
        this.$router.push({name: 'all-services',})
      })
      .catch(error => {
        swal("Error!", error.message, "error");
        console.log(error.response.data);
      });
    },
    onFileChange(event) {
      this.backgroundImage = event.target.files[0];
    }
  }
};
</script>