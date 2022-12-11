<script setup>
defineProps({
  open: { type: Boolean, default: false },
})
</script>
<template>
  <transition>
    <div v-if="open" class="modal modal-open">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
          <slot name="title"></slot>
        </h3>
        <p class="py-4"><slot></slot></p>
        <div class="modal-action mt-0">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}
.v-enter-active .modal-box,
.v-leave-active .modal-box {
  transition: transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-from .modal-box,
.v-leave-to .modal-box {
  transform: scale(0.8);
}
</style>
