<template>
  <div class="card" :style="{ padding: pad_tb + ' ' + pad_lr }">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  pad_lr: {
    type: String,
    default: "16px",
  },
  pad_tb: {
    type: String,
    default: "16px",
  },
})
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
}
</style>
