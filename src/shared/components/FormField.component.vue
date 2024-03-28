<script setup>
const input = defineProps({
  label: String,
  type: String,
  placeholder: String,
  id: String
})
</script>

<template>
  <div class="form-field">
    <label :for="input.id">{{ input.label }}</label>
    <input autocomplete="off" :id="input.id" :type="input.type" :placeholder="input.placeholder" />
  </div>
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
</style>
