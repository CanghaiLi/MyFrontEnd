<script setup>
import { ref } from "vue"
import { ElMessage } from "element-plus"
defineProps({ msg: String })
const count = ref(0)
const toast = () => ElMessage.success("Hello")
</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- example components -->
  <el-button @click="toast">El Message</el-button>
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <el-button type="success" @click="count++">count is: {{ count }}</el-button>
  <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
  <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
  <el-button type="info" @click="count++">count is: {{ count }}</el-button>
</template>

<style lang="scss">
.ep-button {
  margin: 4px;
}
</style>
