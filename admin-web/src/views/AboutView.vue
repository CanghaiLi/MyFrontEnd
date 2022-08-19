<template>
  <Card class="about">
    <div class="header">
      <el-button type="primary" @click="isShow = true">新增记录</el-button>
      <el-button @click="onQuery">TEST API</el-button>
    </div>
    <el-table :data="tableInfo.tasks" stripe>
      <el-table-column prop="title" label="任务名称" width="160" />
      <el-table-column prop="content" label="任务内容" show-overflow-tooltip />
      <el-table-column prop="startTime" label="开始时间" width="160" />

      <el-table-column prop="status" label="任务状态" width="96" />
      <el-table-column label="操作" width="120">
        <template #default="{ row }">
          <el-button link type="primary">编辑{{ row.index }}</el-button>
          <el-button link type="primary">其他{{ row.index }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="listParams.start"
      v-model:page-size="listParams.limit"
      :page-sizes="[5, 10, 15, 20, 30]"
      layout="sizes, prev, pager, next"
      :total="tableInfo.total"
    />
    <el-dialog v-model="isShow" title="新增任务">
      <el-form :model="form">
        <el-form-item label="标题：" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="内容：" :label-width="formLabelWidth">
          <el-input v-model="form.content" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShow = false">取消</el-button>
          <el-button type="primary" @click="handleCreateTask">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </Card>
</template>

<script setup>
import Card from "@/components/Card"
import { test } from "@/api/demo"
import { taskCreate, tasksQuery } from "@/api/task"
import { ElMessage } from "element-plus"
import { onMounted, reactive, ref, watch } from "vue"
const tableInfo = reactive({
  tasks: [],
  total: 0,
})
const listParams = reactive({
  start: 0,
  limit: 10,
})
const isShow = ref(false)
const formLabelWidth = "80px"
const form = reactive({ title: "", content: "" })

const getTasksInfo = async () => {
  const { tasks, total } = await tasksQuery(listParams)
  tableInfo.tasks = tasks
  tableInfo.total = total
}

onMounted(getTasksInfo)
watch(() => listParams.start, getTasksInfo)
const handleCreateTask = async () => {
  await taskCreate(form)
  ElMessage.success("新增成功啦")
  isShow.value = false
}

const onQuery = () =>
  test()
    .then((res) => {
      console.log(res)
      ElMessage.success("成功返回结果 ---> " + res.result)
    })
    .catch(() => {})
</script>

<style scoped lang="scss">
.about {
  .header {
    margin-bottom: 8px;
    text-align: right;
  }
  :deep(.el-pagination) {
    margin-top: 6px;
    justify-content: right;
  }
}
</style>
