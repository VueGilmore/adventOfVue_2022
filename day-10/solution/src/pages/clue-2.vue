<script setup>
import { ref } from 'vue'
const loadMessages = [
  'Elves making toys',
  'Buddy finding his Dad',
  'Rudolph shaking off jitters',
  'Santa delivering gifts',
  'Clue coming up!',
]

const progress = ref(0)
const loaded = ref(false)
const loadMessage = ref(0)
const interval = setInterval(() => {
  progress.value++
  if (progress.value % 20 === 0) {
    loadMessage.value++
  }
  if (progress.value === 100) {
    loaded.value = true
    clearInterval(interval)
  }
}, 60)
</script>
<template>
  <AppHeader>Clue #2</AppHeader>
  <div class="text-center" v-if="!loaded">
    <progress class="progress w-full progress-primary" :value="progress" max="100"></progress>
    <p>{{ loadMessages[loadMessage] }}</p>

    <i class="mt-5 text-xs">(Native Progress Element styled with DaisyUI)</i>
  </div>

  <div v-else class="text-center">
    <div class="flex justify-center">
      <UsaMap class="w-72"></UsaMap>
    </div>

    <i class="mt-5 text-xs">(Map is a simple SVG)</i>
    <p>I've lived in 5 US states in my lifetime</p>
    <p>
      <RouterLink to="/clue-3" v-tooltip="'Go on click the link... you know you want to! (Floating Vue)'"
        >Reveal LAST Clue</RouterLink
      >
    </p>
  </div>
</template>
