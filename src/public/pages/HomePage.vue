<script setup>
//imports
  import SideBar from '@public/components/SideBar.component.vue'
  import NavBar from '@public/components/NavBar.component.vue'
  import { ref } from 'vue';

  const sideBarStatus = ref(false);
 
  const setSideBarStatus = () => {
    sideBarStatus.value = !sideBarStatus.value;
}

</script>

<template>
  <main>
    <NavBar @send-side-bar-status="setSideBarStatus()"/>
    <div class="flex flex-row h-[calc(100vh-3.5rem)]">
      <SideBar :is-expanded="sideBarStatus"/>
    </div>
  </main>
</template>

<style scoped>
  main{
    @apply font-sans;
  }
</style>
