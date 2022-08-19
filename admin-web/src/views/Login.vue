<template>
  <div>
    <el-form ref="formRef" :model="formData" label-width="100px">
      <el-form-item
        label="账户名"
        prop="username"
        :rules="[
          { required: true, message: 'username is required' },
          { min: 3, max: 15, message: 'Length should be 3 to 15' },
        ]"
      >
        <el-input v-model="formData.username" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[
          { required: true, message: 'password is required' },
          { min: 6, max: 20, message: 'Length should be 6 to 20' },
        ]"
      >
        <el-input v-model="formData.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginForm(formRef)">登录</el-button>
        <el-button type="primary" @click="submitForm(formRef)">注册</el-button>
        <el-button @click="resetForm(formRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { userRegister, userLogin } from "@/api/user"
import { ElMessage } from "element-plus"
import storage from "@/utils/storage"
const router = useRouter()
const formData = reactive({
  username: "",
  password: "",
})
const formRef = ref()

const loginForm = (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const token = await userLogin(formData)
      ElMessage.success("登录成功")
      storage.set("token", token, { expires: 1 }) // 1天后过期
      router.replace("/admin/setting")
    } else {
      console.log("error submit!")
      return false
    }
  })
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      console.log(formData)
      await userRegister(formData)
      ElMessage.success("注册成功，请重新登录")
      resetForm(formRef.value)
    } else {
      console.log("error submit!")
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
