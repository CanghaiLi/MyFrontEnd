import { ElMessage } from "element-plus"
import { ref } from "vue"

const useLoging = () => {
  const isLoging = ref(false)
  async function setLoging(loginApi, data) {
    try {
      isLoging.value = true
      const result = await loginApi(data)
      isLoging.value = false
      ElMessage({
        message: "登录成功",
        type: "success",
      })
      return result
    } catch (err) {
      isLoging.value = false
      throw new Error(err)
    }
  }
  return {
    isLoging,
    setLoging,
  }
}

export default useLoging
