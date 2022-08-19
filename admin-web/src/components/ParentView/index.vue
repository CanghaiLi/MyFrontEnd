<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <!-- <keep-alive> -->
      <component :is="Component" />
      <!-- </keep-alive> -->
    </transition>
  </router-view>
</template>

<style>
/* 渐变设置 */
.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.6, 0.6, 1);
}
</style>
