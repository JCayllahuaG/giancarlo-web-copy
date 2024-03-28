<script setup>
import {
  ArrowRightEndOnRectangleIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  UserIcon,
  UsersIcon
} from '@heroicons/vue/24/solid'

//create a function to use router comp from vue to change path
import { useRouter } from 'vue-router'

const router = useRouter()

function changePath(path) {
  router.push(path)
}

const props = defineProps(['isExpanded'])
</script>

<template>
  <aside :class="`${props.isExpanded ? 'sidebar-is-expanded' : ''}`">
    <div class="header">
      <img src="../../assets/images/avatar.webp" alt="User Profile Photo" />
      <h1>German Campos</h1>
    </div>

    <ul class="menu">
      <li>
        <BuildingOffice2Icon class="icon-style" />
        <span v-if="props.isExpanded">Principal</span>
      </li>
      <li>
        <BriefcaseIcon class="icon-style" />
        <span v-if="props.isExpanded" @click="changePath('dashboard/services')">Services</span>
      </li>
      <li>
        <UserIcon class="icon-style" />
        <span v-if="props.isExpanded">Account</span>
      </li>
      <li>
        <UsersIcon class="icon-style" />
        <span v-if="props.isExpanded">Users</span>
      </li>
    </ul>
    <div class="logout-section">
      <div class="logout-button">
        <ArrowRightEndOnRectangleIcon class="icon-style" />
        <span v-if="props.isExpanded">Users</span>
      </div>
    </div>
  </aside>
  <section class="w-full p-3 h-full flex flex-col justify-center items-center">
    <RouterView></RouterView>
  </section>
</template>
<style scoped>
aside {
  @apply w-20 flex flex-col bg-primary transition-[width] duration-300 ease-out space-y-2 items-center;
}
li {
  @apply flex flex-row w-full h-12 items-center justify-center space-x-5 px-2 py-3 rounded-md
  hover:bg-secondary transition-colors duration-300 ease-out cursor-pointer;
}
.icon-style {
  @apply w-8 h-8 text-white;
}

.header {
  @apply flex flex-col p-3 h-fit text-white text-center items-center;
}
.header img {
  @apply rounded-full h-12 w-auto transition-[width,height] duration-300 ease-out;
}
aside .header h1 {
  visibility: hidden;
  @apply opacity-0 text-xl font-semibold transition-[opacity] duration-200 ease-linear delay-200;
}
.menu {
  @apply w-full flex flex-col items-center h-full p-3 space-y-3;
}
.menu span {
  visibility: hidden;
  @apply flex items-center opacity-0 w-24 text-white text-xl font-semibold transition-opacity duration-200 ease-linear delay-300;
}
.logout-section {
  @apply flex h-20 w-full px-3 items-center justify-center;
}
.logout-button {
  @apply flex flex-row py-2 w-full rounded-md items-center justify-center text-white space-x-5 
  hover:bg-secondary transition-colors duration-300 ease-out cursor-pointer;
}
.logout-section span {
  visibility: hidden;
  @apply flex items-center w-24 text-xl font-semibold;
}

.sidebar-is-expanded {
  @apply w-64;
}
.sidebar-is-expanded .header h1 {
  @apply visible opacity-100;
}
.sidebar-is-expanded .header img {
  @apply h-24 w-auto;
}
.sidebar-is-expanded .menu span {
  @apply visible opacity-100 transition-opacity duration-100 ease-linear;
}
.sidebar-is-expanded .logout-section span {
  @apply visible opacity-100 transition-opacity duration-100 ease-linear;
}
.sidebar-is-expanded .menu {
  @apply flex flex-col items-center h-full p-3;
}
</style>
