<script setup lang="ts">
import ChristmasPresent from './components/ChristmasPresent.vue'
import ChristmasTree from './components/ChristmasTree.vue'
import { ref } from 'vue'

const presents = ref(['small-red-gift', 'blue-gift', 'tall-red-gift'])
const underTheTree = ref([])

const startDrag = (evt, index) => {
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllow = 'move'
  evt.dataTransfer.setData('itemId', index)
  
}

const onDrop = evt => {
  const itemId = evt.dataTransfer.getData('itemId')

  const presentIndex = presents.value.findIndex((gift) => gift === itemId)
  presents.value.splice(presentIndex, 1)

  underTheTree.value.push(itemId)

  
}
</script>

<template>
  <div class="flex flex-col items-center mt-24 min-h-screen w-full">
    <h1 class="mt-8 text-xl font-bold">Drag the presents under the tree!</h1>
    <!-- TODO: make ChristmasTree our drop zone! -->
	<div
		class="drop-zone"
		@drop="onDrop($event)"
		@dragenter.prevent
		@dragover.prevent
	>
		<ChristmasTree :presents="underTheTree" class="mt-16" />
	</div>
    <div class="pt-32 mt-32 bg-gray-100 w-full justify-center flex-1">
      <div class="flex items-end justify-center" v-auto-animate>
        <!-- TODO: make each present draggable -->
        <ChristmasPresent
			v-for="(p, index) in presents" :key="p" :name="p"
			draggable="true"
			@dragstart="startDrag($event, p)"
		/>
      </div>
    </div>
  </div>
</template>
