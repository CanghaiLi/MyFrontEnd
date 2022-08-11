<template>
  <Card>
    <div class="header">
      <el-button type="primary" @click="isShow = true">新增商品</el-button>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column
        prop="name"
        label="商品名称"
        width="288"
        show-overflow-tooltip
      />
      <el-table-column prop="price" label="商品定价" width="96" />
      <el-table-column prop="date" label="创建时间" width="160" />
      <el-table-column prop="status" label="上架状态" width="96">
        <template #default="{ row }">
          <el-tag type="success" v-if="row.status">上架中</el-tag>
          <el-tag type="info" v-else>已下架</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="desc" label="商品描述" show-overflow-tooltip />
      <el-table-column label="操作" width="120">
        <template #default="{ row }">
          <el-button
            type="text"
            style="padding-left: 0"
            @click="row.status = !row.status"
            >{{ row.status ? "下" : "上" }}架</el-button
          >
          <el-button
            type="text"
            @click="$message('正在修改' + row.name + ' ，功能开发中....')"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="isShow" title="新增商品">
      <el-form :model="form">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="price" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShow = false">Cancel</el-button>
          <el-button type="primary" @click="isShow = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </Card>
</template>

<script setup>
import Card from "@/components/Card"
import { reactive, ref } from "vue"
const tableData = [
  {
    name: "测试商品1",
    price: "￥170.00",
    date: "2022-04-02 13:01:10",
    status: true,
    desc: "这是商品描述示例是商品描述示例是商品描述示例",
  },
  {
    name: "测试商品2",
    price: "￥99.99",
    date: "2022-04-02 10:01:20",
    status: true,
    desc: "略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略",
  },
  {
    name: "测试商品3",
    price: "￥70.00",
    date: "2022-04-02 13:01:10",
    status: true,
    desc: "-",
  },
  {
    name: "测试商品4",
    price: "￥299.00",
    date: "2022-04-02 13:01:10",
    status: true,
    desc: "无描述",
  },
]

const isShow = ref(false)
const formLabelWidth = "140px"
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
})
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 8px;
  text-align: right;
}
</style>
