<template>
    <button class="mode-toggle" @click="toggleMode">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false
      }
    },
    methods: {
      toggleMode() {
        this.isDarkMode = !this.isDarkMode
        document.documentElement.classList.toggle('dark-mode', this.isDarkMode)
      }
    }
  }
  </script>
  