<script setup>
import { useRouter } from 'vue-router'
import FormField from '@shared/components/FormField.component.vue'
import { useToast } from 'primevue/usetoast'

const router = useRouter()
const toast = useToast()
async function Login() {
  // Perform login logic here
  // Redirect to another route after successful login
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Login Successful',
    life: 3000
  })
  await Sleep(3500)
  router.push('/dashboard')
}
function Register() {
  router.push('/signup')
}

function Sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
</script>

<template>
  <pv-toast />
  <form
    class="flex flex-col py-4 bg-primary/60 rounded-2xl items-center w-[30%] h-fit text-white gap-5 border border-[#8c8c8c]/20 drop-shadow-2xl"
    @submit.prevent
  >
    <h1 class="text-2xl font-normal">Welcome Back</h1>

    <FormField id="email" label="Username" type="email" placeholder="example@mail.com" />
    <FormField id="password" label="Password" type="password" placeholder="************" />

    <div class="submit-section text-white text-lg">
      <button
        class="flex w-full h-14 items-center justify-center bg-[#0DB387] rounded-xl px-4 py-2"
        @click="Login"
      >
        Log In
      </button>
      <span>or</span>
      <button class="google-button" type="button" @click="Register">
        <img src="@assets/images/google-icon.webp" width="30px" alt="Google Logo" />
        <span class="ml-2 text-[#818181] font-normal">Continue with </span>Google
      </button>
    </div>
  </form>
</template>
<style scoped>
.form-field {
  @apply flex flex-col w-full px-8 space-y-1;
}
.form-field label {
  @apply font-normal;
}
.form-field input {
  @apply min-h-12 rounded-xl bg-primary/70 px-2 placeholder:text-[#afafaf] border border-[#8c8c8c] outline-none;
}
.submit-section {
  @apply flex flex-col items-center w-full gap-2 px-8 py-3;
}
.google-button {
  @apply flex w-full h-14 justify-center items-center gap-2 bg-white rounded-xl px-4 py-2 text-black font-semibold;
}
</style>
