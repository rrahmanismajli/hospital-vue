<template>
    <section class="book" id="book">

        <h1 class="heading"> <span>book</span> now </h1>

        <div class="row">

            <div class="image">
                <img src="../../assets/book-img.svg" alt="">
            </div>

            <form v-on:submit.prevent="handleSubmitAppointment">
                <h3>book appointment</h3>
                <input v-if="user.loggedIn" type="text" placeholder="Full Name..." class="box" v-bind:value="user.data.displayName"
                v-on:input="newAppointment.name = $event.target.value">
                    <input v-else type="text" placeholder="Full Name..." class="box" v-bind:value="newAppointment.name"
                        v-on:input="newAppointment.name = $event.target.value">
                    <input type="number" placeholder="Phone Number..." class="box" v-bind:value="newAppointment.number"
                        v-on:input="newAppointment.number = $event.target.value">
                        <input v-if="user.loggedIn" ype="email" placeholder="Email..." class="box"  v-bind:value="user.data.email"
                        v-on:input="newAppointment.email = $event.target.value">
                    <input v-else type="email" placeholder="Email..." class="box"  v-bind:value="newAppointment.email"
                        v-on:input="newAppointment.email = $event.target.value">
                        
                    <input type="date" placeholder="Date..." class="box" v-bind:value="newAppointment.date"
                        v-on:input="newAppointment.date = $event.target.value">
                    <input type="submit" value="book now" class="btn">
                </form>

        </div>

    </section>
</template>
<script>

import db from '../../firebase/db'
import { mapGetters } from "vuex";

export default {
    computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
    data() {
        return {
            newAppointment: {
                name: '',
                number: '',
                email: '',
                date: ''
            }
        }
    },
    methods: {
        async handleSubmitAppointment() {
            console.log('Attempting to create new Appointment')
            //validation
            if (
                !this.newAppointment.name.trim() ||
                !this.newAppointment.number.trim()
            ) return;
            // create a new appointment
            console.log('make request to create new appointment -> ', this.newAppointment);
            try {
                const result = await db.collection('appointments').add({ ...this.newAppointment })
                console.log(result);
            } catch (err) {
                console.error(err);
            }
            this.newAppointment.name = '';
            this.newAppointment.number = '';
            this.newAppointment.email = '';
            this.newAppointment.date = '';
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

:root {
    --green: #16a085;
    --black: #444;
    --light-color: #777;
    --box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
    --text-shadow: .4rem .4rem 0 rgba(0, 0, 0, .2);
    --border: .2rem solid var(--green);
}

* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-transform: capitalize;
    transition: all .2s ease-out;
    text-decoration: none;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 7rem;
    scroll-behavior: smooth;
}

section {
    padding: 2rem 9%;
}

section:nth-child(even) {
    background: #f5f5f5;
}

.heading {
    text-align: center;
    padding-bottom: 2rem;
    text-shadow: var(--text-shadow);
    text-transform: uppercase;
    color: var(--black);
    font-size: 5rem;
    letter-spacing: .4rem;
}

.heading span {
    text-transform: uppercase;
    color: var(--green);
}



.book .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.book .row .image {
    flex: 1 1 45rem;
}

.book .row .image img {
    width: 100%;
}

.book .row form {
    flex: 1 1 45rem;
    background: #fff;
    border: var(--border);
    box-shadow: var(--box-shadow);
    text-align: center;
    padding: 2rem;
    border-radius: .5rem;
}

.book .row form h3 {
    color: var(--black);
    padding-bottom: 1rem;
    font-size: 3rem;
}

.book .row form .box {
    width: 100%;
    margin: .7rem 0;
    border-radius: .5rem;
    border: var(--border);
    font-size: 1.6rem;
    color: var(--black);
    text-transform: none;
    padding: 1rem;
}

.book .row form .btn {
    padding: 1rem 4rem;
}

/* media queries  */
@media (max-width:991px) {

    html {
        font-size: 55%;
    }

    .header {
        padding: 2rem;
    }

    section {
        padding: 2rem;
    }

}

@media (max-width:768px) {

    #menu-btn {
        display: initial;
    }

    .header .navbar {
        position: absolute;
        top: 115%;
        right: 2rem;
        border-radius: .5rem;
        box-shadow: var(--box-shadow);
        width: 30rem;
        border: var(--border);
        background: #fff;
        transform: scale(0);
        opacity: 0;
        transform-origin: top right;
        transition: none;
    }

    .header .navbar.active {
        transform: scale(1);
        opacity: 1;
        transition: .2s ease-out;
    }

    .header .navbar a {
        font-size: 2rem;
        display: block;
        margin: 2.5rem;
    }

}

@media (max-width:450px) {

    html {
        font-size: 50%;
    }

}
</style>