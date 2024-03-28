<script setup>
import { useRoute } from 'vue-router'
import HomePage from './public/pages/HomePage.vue'

const getCurrentRoute = () => {
  const route = useRoute()
  return route.fullPath
}

getCurrentRoute()
</script>
<template>
  <div id="app">
    <RouterView v-if="getCurrentRoute ?? ('/' || '/login' || '/signup')" />
    <HomePage v-else />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  /* Additional styles */
}
</style>
