<script setup>
import FormField from '@shared/components/FormField.component.vue'
import { useRouter } from 'vue-router'
import { User } from '../model/user.entity'
import { iamService } from '@iam/services/iam-api.service.js'
const router = useRouter()
const registerService = new iamService()
async function SignUp() {
  const email = document.getElementById('email').value
  if (await userWithEmailExists(email)) {
    alert('User with this email already exists')
    return
  }
  // await registerService.registerUser(n
  const password = document.getElementById('password').value
  const password_confirm = document.getElementById('password_confirm').value
  if (!validateEmail(email)) return
  if (!validatePassword(password)) return
  if (!validatePasswordMatch(password, password_confirm)) return

  const newUser = new User(email, password)
  await registerService.registerUser(newUser).then((response) => {
    if (response.status === 201) {
      alert('User registered successfully')
      console.log(response.data)
    } else {
      alert('User registration failed')
    }
  })
}

const goToLogin = () => {
  router.push('/login')
}
const validatePassword = (password) => {
  if (password.length < 8) {
    alert('Password must be at least 8 characters long')
    return false
  }
  return true
}
const userWithEmailExists = (email) => {
  return registerService.getUserByEmail(email).then((response) => {
    console.log(response)
    if (response.status === 200 && response.data.length > 0) {
      return true
    } else {
      return false
    }
  })
}
const validatePasswordMatch = (password, password_confirm) => {
  if (password !== password_confirm) {
    alert('Passwords do not match')
    return false
  }
  return true
}
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (!emailRegex.test(email)) {
    alert('Invalid email address')
    return false
  }
  return true
}
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
    <div class="submit-section text-white text-lg gap-2">
      <button
        class="flex w-full h-14 items-center justify-center bg-[#0DB387] rounded-xl px-4 py-2"
        @click="SignUp"
      >
        Sign Up
      </button>
      <a href="" @click="goToLogin"><span>Already have an account?</span></a>
    </div>
  </form>
</template>
<style scoped>
.submit-section {
  @apply flex flex-col items-center w-full gap-2 px-8 py-3;
}
</style>
