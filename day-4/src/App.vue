<script setup>
import ChristmasTree from './ChristmasTree.vue'

const size = 7
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
	<div>
		<div v-for="index in size">
			<ChristmasTree :size="index" />
		</div>
	</div>
  </div>
</template>

