<template>
    <div class="container features">
        <br>
        <div class="row" id="home">
          <b-container class="bv-example-row">
                <table class="table" id="myTable">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Tel Number</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="reservation in activeUsers" v-bind:key="reservation._id">
                        <!-- <img src="../assets/mercedes2.jpg" class="imagediv"/> -->
                        <!-- <div v-if="emailsession == reservation.name"> -->
                                    <td>{{reservation.product}}</td>
                                    <td>{{reservation.tel}}</td>
                                    <td>
                                      <button class="" id="buttonres" @click.prevent="deleteStudent(reservation._id)" href="#/home">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg> 
                                      </button>
                                    </td>
                        <!-- </div> -->
                    </tr>
                  </tbody>
                </table>
          </b-container>
        </div>
        <br>
    </div>
</template>


<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'CreateProducts',
  data () {
    return {
      reservationsfields:{},
      reservations: {},
      emailsession: window.localStorage.getItem('email')
    }
  },created () {
    axios.get(`http://localhost:4000/reservations`)
    .then(response => {
      this.reservationsfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
     deleteStudent(id){
                let apiURL = `http://localhost:4000/reservations/${id}`;
                let indexOfArrayItem = this.activeUsers.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                      this.$router.push({
                        name: 'home',
                        //params: { id: response.data._id }
                      })
                        //this.reservations.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }

  },
    computed: {
    activeUsers: function() {
        let reservation2 = [];
        let test = Object.values(this.reservationsfields);
        for (let variable of test){
            if(variable.name == window.localStorage.getItem('email'))
                reservation2.push(variable);
        }
        return reservation2;
      }
    }
  
}
</script>

<style scoped>
  #buttonres{
    color:red;
    background-color:white;
    border: none;
    border-radius: 4px;
  }

  #buttonres:hover{
    color:white;
    background-color:red;
  }
</style>


