<script setup>
import LoginForm from '../components/LoginForm.component.vue'
import RegisterForm from '../components/RegisterForm.component.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const currentRoute = () => {
  console.log(route.fullPath)
  return route.fullPath
}
</script>

<template>
  <section class="w-full h-full bg-iam-background bg-cover">
    <div class="flex w-full h-full backdrop-blur-[3px] bg-[#EFEFEF]/5 justify-center items-center">
      <LoginForm v-if="currentRoute() === '/login'" />
      <RegisterForm v-else />
    </div>
  </section>
</template>

<style lang="css"></style>
