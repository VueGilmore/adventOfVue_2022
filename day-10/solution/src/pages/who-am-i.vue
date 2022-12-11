<script setup>
import { ref, computed } from 'vue'

const iAmGuess = ref('')
const iAmCorrect = computed(() => {
  const guess = iAmGuess.value.trim().toLowerCase()
  return guess === 'daniel' || guess === 'daniel kelly'
})
</script>
<template>
  <AppHeader>Clue #3</AppHeader>
  <div>
    <div class="p-10 flex justify-center">
      <img class="w-48 mb-[-20px] mt-[-40px]" src="/vueschool-logo.png" alt="Vue School Logo" />
    </div>

    <p class="text-center">I'm the lead instructor at Vue School.</p>
    <input
      v-model="iAmGuess"
      type="text"
      class="input input-bordered w-full mt-3"
      placeholder="Who am I? (Hint: Daniel)"
    />
    <transition>
      <div v-if="iAmCorrect" class="text-center w-96">
        <p class="text-primary mt-5">You got it! It's nice to meet you! 👋</p>
        <p>
          Go checkout some awesome Vue.js Courses on <a href="https://vueschool.io/">vueschool.io</a> and
          <a href="https://twitter.com/danielkelly_io">give me a follow on Twitter</a> !
        </p>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
