<script setup>
import { ref, computed } from 'vue'
const answer = ref(null)
const correct = computed(() => {
  return answer.value === 'Frost Bite'
})
</script>
<template>
  <AppHeader>Clue #3</AppHeader>
  <div class="text-center">
    <h2 class="text-lg font-bold">But First You must Answer a Riddle</h2>
    <p>What do you get when you cross a snowman and a Vampire?</p>
    <select class="select select-bordered mt-5" v-model="answer">
      <option value="A Dad Joke">A Dad Joke</option>
      <option value="Frost Bite">Frost Bite</option>
      <option value="I don't know">I don't know</option>
    </select>

    <div class="mt-5">
      <RouterLink v-if="correct" to="/who-am-i" class="btn btn-primary mt-3">Correct! Reveal Clue</RouterLink>

      <p class="text-error" v-if="answer && !correct">Wrong! Try again</p>
    </div>
  </div>
</template>
