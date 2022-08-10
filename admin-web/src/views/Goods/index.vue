<template>
  <Card>
    <div class="header">
      <el-button type="primary">新增游船</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Price" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column label="operation" width="180" />
    </el-table>
  </Card>
</template>

<script setup>
import Card from "@/components/Card"
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 8px;
  text-align: right;
}
</style>
