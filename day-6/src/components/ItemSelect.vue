<script setup>
import { ref } from 'vue'
import { useItemComparison } from '../composables/itemComparison'

const selected = ref()
</script>

<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
  </select>
</template>
