<script setup>
import FormField from '@shared/components/FormField.component.vue'
</script>
<template>
  <form
    class="flex flex-col py-4 bg-primary/60 rounded-2xl items-center w-[30%] h-fit text-white gap-5 border border-[#8c8c8c]/20 drop-shadow-2xl"
    @submit.prevent
  >
    <h1 class="text-2xl font-normal">Let's Get Started!</h1>
    <FormField id="email" label="Email" type="email" placeholder="example@mail.com" />
    <FormField id="password" label="Password" type="password" placeholder="************" />
    <FormField
      id="password_confirm"
      label="Confirm Password"
      type="password"
      placeholder="************"
    />
    <div class="submit-section text-white text-lg">
      <button
        class="flex w-full h-14 items-center justify-center bg-[#0DB387] rounded-xl px-4 py-2"
        @click="Login"
      >
        Sign Up
      </button>
    </div>
  </form>
</template>
<style scoped>
.submit-section {
  @apply flex flex-col items-center w-full gap-2 px-8 py-3;
}
</style>
