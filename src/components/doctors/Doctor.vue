
    <template>
        <div>
          <h1>Create a new doctor</h1>
          <form @submit.prevent="createDoctor">
            <label>
              Name:
              <input type="text" v-model="name" required>
            </label>
            <label>
              Specialization:
              <input type="text" v-model="specialization" required>
            </label>
            <label>
              Experience:
              <input type="number" v-model="experience" required>
            </label>
            <button type="submit">Create Doctor</button>
          </form>
        </div>
      </template>

<script>
import axios from 'axios';
export default {
  name: 'CreateDoctors',
  data () {
    return {
        name: '',
      specialization: '',
      experience: 0
    }
  },
  methods: {
    async createDoctor () {
        try {
        const response = await axios.post(`http://localhost:3001/doctors`, {
          name: this.name,
          specialization: this.specialization,
          experience: this.experience
        });
        console.log(response.data);
        // reset form
        this.name = '';
        this.specialization = '';
        this.experience = 0;
      } catch (err) {
        console.error(err);
      }
    
      
    }
  }
}
</script>
<style></style>