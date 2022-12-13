<!-- This has the same basic approach as the Christmas Lights component -->
<template>
  <div
    class="absolute rounded-full w-6 h-6 z-10"
    :class="bgColor"
    :style="{
      top: `${offsetY}px`,
      left: `${offsetX}px`,
    }"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const AMPLIFY = 20
const offsetY = 16 + (Math.random() * AMPLIFY - AMPLIFY / 2)
const offsetX = 16 + (Math.random() * AMPLIFY - AMPLIFY / 2)

const props = withDefaults(
  defineProps<{
    color: 'green' | 'red'
  }>(),
  {
    color: 'red',
  }
)

const bgColor = computed(() => (props.color === 'green' ? 'bg-emerald-200' : 'bg-red-500'))
</script>
