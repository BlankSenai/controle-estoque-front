<script setup>
import { RouterView } from "vue-router"
</script>

<template>
  <Transition name="switch-page" mode="out-in">
    <RouterView/>
  </Transition>
</template>

<style scoped>
.switch-page-enter-active,
.switch-page-leave-active {
  transition: all 0.5s ease;
}

.switch-page-enter-from,
.switch-page-leave-to {
  opacity: 0;
  transform: translateX(50px)
}
</style>
