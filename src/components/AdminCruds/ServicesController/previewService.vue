<template>
    <div>
      <h2 v-if="!name">Name of Your Service</h2>
      <h2 v-else>{{ name }}</h2>
      <p v-if="!description">Descritprion of your Card</p>
      <p v-else>{{ description }}</p>
      <img v-if="!photo" :src="photo" alt="Service Photo">
      <img v-else :src="photo" alt="Service Photo">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      description: String,
      photo: String
    }
  }
  </script>
  