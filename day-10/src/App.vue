<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import FirstClue from './components/FirstClue.vue'
import SecondClue from './components/SecondClue.vue'
import ThirdClue from './components/ThirdClue.vue'

let clueNumber = ref(1)

function clueNumberChanged(newValue){
	clueNumber.value = newValue
}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
      <AppHeader />

	  <template v-if="clueNumber === 1">
		<FirstClue @emitShowMeAnotherClue="clueNumberChanged" />
	  </template>

	  <template v-else-if="clueNumber === 2">
		<SecondClue @emitShowMeAnotherClue="clueNumberChanged" />
	  </template>

	  <template v-else-if="clueNumber === 3">
		<ThirdClue @emitShowMeAnotherClue="clueNumberChanged" />
	  </template>

	  <template v-else>
		<img src="https://pbs.twimg.com/profile_images/1594712700143140864/5fY209mD_400x400.jpg" />
		<p class="text-2xl text-center mt-4 mb-2">Hi, I'm VueGilmore, nice to meet you!</p>
		<p class="text-sm text-center mb-2">(I'll be waiting for my present)</p>
	  </template>

      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-100;
}
</style>
