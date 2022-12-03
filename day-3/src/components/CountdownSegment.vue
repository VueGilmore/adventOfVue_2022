<script setup>
defineProps({
  label: String,
  number: Number,
})
</script>
<template>
  <div class="segment text-center">
    <div class="pt-10 overflow-hidden relative">
		<transition name="move">
			<span :key="number" class="numbers text-green absolute top-0 left-[50%]">{{ number }}</span>
		</transition>
    </div>

    <span class="label block pt-2">{{ label }}</span>
  </div>
</template>
<style>
.segment {
  width: 80px;
}
.numbers {
  transform: translateX(-50%);
  font-size: 32px;
}
.label {
  font-size: 16px;
}

.move-enter-active,
.move-leave-active {
  transition: all .5s ease-in
}
.move-enter-from {
  transform: translateY(-100%) translateX(-50%);
}
.move-leave-to {
  transform: translateY(100%) translateX(-50%);
}
.move-enter-to,
.move-leave-from {
  transform: translateY(0px) translateX(-50%);
}
</style>
