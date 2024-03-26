<script setup></script>
<template>
  <nav>
    <span>
      <button class="w-10" @click="$emit('sendSideBarStatus')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <img class="h-8" src="@assets/images/logo-global-hits-dark.webp" alt="Logo" />
    </span>

    <ul>
      <li>Home</li>
      <li>Dashboard</li>
      <li>Settings</li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  @apply flex text-white h-14 w-full bg-primary justify-between px-3 items-center;
}
h1 {
  @apply flex text-xl font-semibold w-fit items-center;
}
ul {
  @apply flex w-fit h-auto flex-row space-x-4;
}
ul > li {
  @apply flex w-fit items-center;
}
span {
  @apply flex w-fit h-16 items-center  space-x-2;
}
button {
  @apply flex w-10 h-10 rounded-full items-center justify-center transition duration-100 ease-linear;
}
button:hover {
  @apply bg-secondary;
}
li:hover {
  @apply bg-secondary;
}
</style>
