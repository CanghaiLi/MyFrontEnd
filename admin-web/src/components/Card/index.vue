<template>
  <div class="card" :style="{ padding: pad_tb + ' ' + pad_lr }">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  pad_lr: {
    type: String,
    default: "18px",
  },
  pad_tb: {
    type: String,
    default: "18px",
  },
})
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  min-width: 800px;
  margin-bottom: 18px;
  border-radius: 6px;
  background: #fff;
}
</style>
