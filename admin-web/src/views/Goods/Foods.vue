<template>
  <div class="foods">
    <Card> <el-button @click="onQuery">请求数据GET</el-button></Card>
    <Card style="margin-top: 16px">
      <el-form :model="form">
        <el-form-item label="您的名称：">
          <el-input v-model="form.name" placeholder="please input your name" />
        </el-form-item>

        <el-form-item label="您的年龄：">
          <el-input-number
            v-model="form.age"
            placeholder="please input your age"
          />
        </el-form-item>

        <el-form-item label="您的性别：">
          <el-select v-model="form.sex" placeholder="please select your sex">
            <el-option label="男" :value="true" />
            <el-option label="女" :value="false" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">接口测试</el-button>
        </el-form-item>
      </el-form>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import Card from "@/components/Card"
import { ElMessage } from "element-plus"
import { query, submit } from "@/api/demo"
const form = reactive({})

const onQuery = () =>
  query()
    .then((res) => ElMessage.success("成功返回结果 ---> " + res.join("?")))
    .catch(() => {})

const onSubmit = () => {
  submit(form)
    .then((res) => {
      ElMessage.success("成功返回结果 ---> " + JSON.stringify(res))
    })
    .catch(() => {})
}
</script>
