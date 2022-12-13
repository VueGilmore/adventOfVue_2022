<template>
  <div class="w-full h-full flex justify-center items-center">
    <ChristmasTree :size="7">
      <template #lights>
        <!-- Put two lights on each section of the tree -->
        <ChristmasLights v-for="i in 2" />
      </template>

      <!-- 👇 Part 1: Add ornaments to the tree -->
      <template #ornaments>
        <!-- Put a single ornament on each section -->
        <ChristmasOrnament />
      </template>

      <!-- 👇 Part 2: Add alternating types of ornaments.

           We can also alternate the types of ornaments that we put on the tree.
           Putting content in these slots will override the #ornaments slot.
           
           Comment/uncomment this section to see the difference. -->
      <template #even>
        <ChristmasOrnament color="green" />
      </template>
      <template #odd>
        <ChristmasOrnament color="red" />
      </template>
    </ChristmasTree>
  </div>
</template>

<script setup>
import ChristmasTree from './ChristmasTree.vue'
import ChristmasLights from './ChristmasLights.vue'
import ChristmasOrnament from './ChristmasOrnament.vue'
</script>
