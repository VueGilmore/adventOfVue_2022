<script setup>
import { ref, onMounted } from 'vue'

const data     = ref(null)
const error    = ref(null)
const delivery = ref('')

function getJoke(){
	data.value     = null
	delivery.value = ''

	fetch('https://v2.jokeapi.dev/joke/christmas')
		.then((res) => res.json())
		.then((json) => {
			data.value = json
		})
		.catch((err) => {
			error.value = err
		})
}

function getDelivery(){
	delivery.value = data.value.delivery
}

onMounted(() => {
	getJoke()
})
</script>

<template>
	<div class="w-full h-full flex flex-col justify-center items-center">
		<div v-if="error">Oops! Something went wrong, try later.</div>
		<div v-else-if="data">
			<p data-qa="setup" class="text-xl">🎅 {{data.setup}}</p>

			<p v-if="delivery" data-qa="delivery" class="text-lg">🤶 {{ delivery }}</p>
		</div>
		<div v-else>Loading...</div>

		<div class="my-8">
			<button v-if="(data && ! delivery)" @click="getDelivery" class="bg-green rounded-lg text-white px-3 py-1 hover:bg-green-darker transition-all duration-300">Tell Me!</button>
			<button v-if="delivery" @click="getJoke" class="bg-green rounded-lg text-white px-3 py-1 hover:bg-green-darker transition-all duration-300">Another</button>
		</div>
	</div>
</template>
