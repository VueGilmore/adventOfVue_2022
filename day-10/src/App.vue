<script setup>
import AppHeader from './components/AppHeader.vue'
</script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
      <AppHeader />
      <p class="text-center">Good luck!</p>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>
