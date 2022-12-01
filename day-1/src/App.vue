<script setup>
import { ref, watch } from 'vue'

let searchTerm    = ref('')
let results       = ref([])
let loading       = ref(false)
let debounceTimer = ref(null)

const findProducts = async term => {
	loading.value = true

	clearTimeout( debounceTimer )

  	debounceTimer = setTimeout(() => {
		if ( term !== '' ){
			fetch(`https://dummyjson.com/products/search?q=${term}&limit=10&`)
				.then((res) => res.json())
				.then((res) => (results.value = res, loading.value = false))
				.catch((err) => (alert('Sorry, something went wrong. Try again later!')))
		} else {
			results.value = null
			loading.value = false
		}
	}, 300);
}

watch(searchTerm, newTerm => findProducts(newTerm))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <header class="relative">
		<h1 class="text-4xl font-bold px-10">Gift Search Bar</h1>
		<div class="loading absolute top-0 right-0" v-if="loading"></div>
	</header>
    <input type="text" autofocus class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />

    <ul class="list-none max-w-md" v-if="(searchTerm && results && results.total > 0)">
      	<li v-for="product in results.products" :key="product.id">
			<article class="px-4 py-2 border-b-2 border-b-green">
				<p class="text-sm">{{ product.brand }} - {{ product.category }}</p>
				<p class="text-lg">{{ product.title }} <small>({{ product.price }}€)</small></p>
			</article>
		</li>
    </ul>
	<p v-if="(searchTerm && results && results.total == 0)">Nothing found</p>

  </div>
</template>

<style scoped>
.loading {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(48, 245, 212, 0.3);
  border-radius: 50%;
  border-top-color: rgb(13, 177, 149);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>