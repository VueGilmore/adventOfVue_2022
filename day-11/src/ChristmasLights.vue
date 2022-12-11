<!-- You don't need to do anything in here as part of the challenge -->
<!-- But feel free to poke around! -->
<template>
  <div
    class="rounded-full bg-yellow-100 w-2 h-2 m-2 relative z-20 shadow-md twinkle"
    :style="{
      top: `${offsetY}px`,
      left: `${offsetX}px`,
      'animation-delay': `${twinkleDelay}s`,
    }"
  ></div>
</template>

<script setup>
// Not important for the challenge, but some math fun:
// Math.random() gives us in the range [0...1] so we multiply
// so we can get a range [0...AMPLIFY].
// BUT! We want our lights centered in the tree still, so we
// subtract (AMPLIFY / 2) so that we're centered over 0
// and our range is now [(-AMPLIFY / 2)...(AMPLIFY / 2)]
const AMPLIFY = 15
const offsetY = Math.random() * AMPLIFY - AMPLIFY / 2
const offsetX = Math.random() * AMPLIFY - AMPLIFY / 2

// Should be the same as the length of the animation so that
// it's evenly distributed
const MAX_DELAY = 2
const twinkleDelay = Math.random() * MAX_DELAY
</script>

<style scoped>
.twinkle {
  animation: twinkle 2s ease-in-out infinite;
}
@keyframes twinkle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
