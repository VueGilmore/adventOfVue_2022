<script setup>
import { ref, computed } from 'vue'
import presents from './presents.json'

let sortInOrder        = ref(false)
const presentsToShow   = ref( presents.slice() )
const presentsUnSorted = ref( presents.slice() )
const presentsSorted   = computed(() => {
	return presents.slice().sort(function(a, b){
		return (a.dimensions.width * a.dimensions.height) - (b.dimensions.width * b.dimensions.height)
	})
})

function toggleSort (){
	sortInOrder.value = ! sortInOrder.value

	if ( sortInOrder.value ){
		presentsToShow.value = presentsSorted.value
	} else {
		presentsToShow.value = presentsUnSorted.value
	}
}
</script>

<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in presentsToShow"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
        />
      </div>

	  <div class="text-center my-6">
		<button @click="toggleSort" class="bg-violet-700 text-white py-2 px-4 rounded-lg hover:bg-violet-900 transition-all">
			Toggle sort
		</button>
	  </div>
    </div>
  </div>
</template>
