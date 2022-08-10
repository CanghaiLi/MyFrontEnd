<template>
  <Card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="OrderID" />
      <el-table-column prop="address" label="name" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="date" label="Price" width="180" />
    </el-table>
  </Card>
</template>

<script setup>
import Card from "@/components/Card"
</script>
