<!-- You shouldn't need to update this file -->
<script setup lang="ts">
import TallRedGift from '@/assets/tall-red-gift.svg?component'
import BlueGift from '@/assets/blue-gift.svg?component'
import SmallRedGift from '@/assets/small-red-gift.svg?component'

defineProps<{
  name: string
}>()
</script>

<template>
  <div>
    <TallRedGift class="w-32" v-if="name === 'tall-red-gift'" />
    <SmallRedGift class="w-32" v-else-if="name === 'small-red-gift'" />
    <BlueGift class="w-32" v-else-if="name === 'blue-gift'" />
  </div>
</template>
