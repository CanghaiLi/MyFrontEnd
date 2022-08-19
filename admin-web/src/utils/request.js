import axios from "axios"
import { ElMessage } from "element-plus"
import storage from "@/utils/storage"

const service = axios.create({
  baseURL: "/api/v1",
  axiosConfig: { "Content-Type": "application/json;charset=UTF-8" },
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: { Authorization: storage.get("token") },
})

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res?.code === 0) {
      return Promise.resolve(res.result || {})
    }
    console.log(res)
    ElMessage.error(res?.msg || "Error")
    if (res.code === 9191) {
      location.href = "/login"
    }
    return Promise.reject(new Error(res.msg || "Error"))
  },
  (error) => {
    if (error.message.includes("timeout")) {
      ElMessage.error("请求超时" + 5000)
    }
    console.log("err" + error) // for debug
    return Promise.reject(error)
  }
)

export default service
