<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import { useRouter } from 'vue-router'
const modalOpen = ref(false)
const router = useRouter()

function nextClue() {
  modalOpen.value = false
  setTimeout(() => {
    router.push('/clue-2')
  }, 300)
}
</script>
<template>
  <AppHeader>Welcome to your Secret Santa Clues!</AppHeader>
  <div class="text-center">
    <button class="btn btn-primary" @click="modalOpen = true">Show Clue #1</button>
    <AppModal :open="modalOpen" action="Next Clue">
      <template #title> Clue # 1 </template>
      <div class="text-left">
        <p>I like teaching and coding with Vue.js! 🎉</p>
        <p>
          I also like to style things with <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and
          <a href="https://daisyui.com/" target="_blank">Daisy UI</a> (used in creating this site)
        </p>
      </div>

      <template #actions>
        <a @click.prevent="nextClue" to="/clue-2" class="btn btn-primary">Next Clue</a>
      </template>
    </AppModal>
  </div>
</template>
