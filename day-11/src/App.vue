<template>
  <div class="w-full h-full flex justify-center items-center">
    <ChristmasTree :size="7">
      <template #lights>
        <!-- Put two lights on each section of the tree -->
        <ChristmasLights v-for="i in 2" />
      </template>
    </ChristmasTree>
  </div>
</template>

<script setup>
import ChristmasTree from './ChristmasTree.vue'
import ChristmasLights from './ChristmasLights.vue'
</script>
