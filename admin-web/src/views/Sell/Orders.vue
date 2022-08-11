<template>
  <Card class="order">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="订单ID：">
        <el-input v-model="formInline.id" placeholder="请输入订单ID" />
      </el-form-item>
      <el-form-item label="下单日期：">
        <el-date-picker
          v-model="formInline.time"
          type="daterange"
          unlink-panels
          range-separator="-"
          start-placeholder="Start date"
          end-placeholder="End date"
          :shortcuts="shortcuts"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="[]" style="width: 100%">
      <el-table-column prop="id" label="订单ID" width="220" />
      <el-table-column prop="address" label="商品信息" />
      <el-table-column prop="date" label="订单时间" width="200" />
      <el-table-column prop="date" label="订单状态" width="160" />
      <el-table-column prop="date" label="订单金额" width="120" />
    </el-table>
    <div class="page">
      <el-pagination
        v-model:currentPage="params.page"
        v-model:page-size="params.size"
        :page-sizes="[10, 20, 30, 50]"
        layout="sizes, prev, pager, next"
        :total="81"
      />
    </div>
  </Card>
</template>

<script setup>
import { reactive } from "vue"
import Card from "@/components/Card"
const params = reactive({})
const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
const formInline = reactive({})
</script>

<style lang="scss" scoped>
.order {
  .page {
    text-align: right;
    margin-top: 10px;
    :deep(.el-pagination) {
      display: inline-flex;
    }
  }
}
</style>
