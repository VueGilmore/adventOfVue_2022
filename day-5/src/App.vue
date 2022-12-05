<script setup>
import { ref } from 'vue'

const to   = ref('')
const from = ref('')
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div>
		<div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
			<div class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
			<img src="/assets/santa.svg" alt="" class="max-w-[12em]" />
			<div>
				<h1 class="font-serif text-4xl">Happy Holidays!</h1>
				<div class="mt-4 bg-white text-black p-2 rounded">TO: {{ to }}</div>
				<div class="mt-2 bg-white text-black p-2 rounded">FROM: {{ from }}</div>
			</div>
			</div>
		</div>
		<div class="mt-8">
			<fieldset class="mb-4">
				<label for="to" class="block text-md uppercase">To:</label>
				<input type="text" id="to" name="to" v-model="to" class=" w-full bg-rose-100 rounded px-3 py-2">
			</fieldset>
			<fieldset>
				<label for="from" class="block text-md uppercase">From:</label>
				<input type="text" id="from" name="from" v-model="from" class=" w-full bg-rose-100 rounded px-3 py-2">
			</fieldset>
		</div>
    </div>
  </div>
</template>
