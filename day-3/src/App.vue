<script setup>
import CountdownHeader from '@/components/CountdownHeader.vue'
import CountdownSegment from './components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'
import { computed } from 'vue'

const now       = useNow()
const christmas = new Date('12/25/2022 00:00:00')

const days = computed(() => {
	const nowMil       = now.value.getTime()
	const christmasMil = christmas.getTime()
	return Math.floor(( christmasMil - nowMil ) / 1000 / 60 / 60 / 24 )
})

const hours = computed(() => {
	const nowMil       = now.value.getTime()
	const christmasMil = christmas.getTime()
	const diffInHours  = Math.floor(( christmasMil - nowMil ) / 1000 / 60 / 60 )

	return diffInHours - ( days.value * 24 )
})

const minutes = computed(() => {
	const nowMil        = now.value.getTime()
	const christmasMil  = christmas.getTime()
	const diffInMinutes = Math.floor(( christmasMil - nowMil ) / 1000 / 60 )

	return diffInMinutes - ( days.value * 24 * 60 ) - ( hours.value * 60 )
})

const seconds = computed(() => {
	const nowMil        = now.value.getTime()
	const christmasMil  = christmas.getTime()
	const diffInSeconds = Math.floor(( christmasMil - nowMil ) / 1000 )

	return diffInSeconds - ( days.value * 24 * 60 * 60 ) - ( hours.value * 60 * 60 ) - ( minutes.value * 60 )
})

</script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="days" />
          <CountdownSegment label="hours" :number="hours" />
          <CountdownSegment label="minutes" :number="minutes" />
		  <CountdownSegment label="seconds" :number="seconds" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>
