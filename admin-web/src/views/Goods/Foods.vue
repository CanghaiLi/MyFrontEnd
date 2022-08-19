<template>
  <div class="foods">
    <Card> <el-button @click="onQuery">接口测试GET</el-button></Card>
    <Card style="margin-top: 16px">
      <el-form :model="form">
        <el-form-item label="您的名称：">
          <el-input v-model="form.name" placeholder="please input your name" />
        </el-form-item>

        <el-form-item label="您的年龄：">
          <el-input-number v-model="form.age" :min="18" :max="120" />
        </el-form-item>

        <el-form-item label="您的性别：">
          <el-select v-model="form.sex" placeholder="please select your sex">
            <el-option label="男" :value="true" />
            <el-option label="女" :value="false" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">接口测试POST</el-button>
        </el-form-item>
      </el-form>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import Card from "@/components/Card"
import { ElMessage } from "element-plus"
const form = reactive({})

const onQuery = () => {}

const onSubmit = () => {}
</script>
