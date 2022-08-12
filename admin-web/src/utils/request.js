import axios from "axios"
import { ElMessage, ElMessageBox } from "element-plus"

const service = axios.create({
  baseURL: "/api/pc",
  axiosConfig: { "Content-Type": "application/json;charset=UTF-8" },
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: { "x-token": "sjssjsjjs" },
})

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (!res) return Promise.reject(new Error("无返回，服务器开小差了~"))

    if (res.code === 1) {
      ElMessageBox.alert(res.msg, "请求出错了", {
        confirmButtonText: "确定",
        type: "error",
      })
      return Promise.reject(new Error(res.msg || "Error"))
    } else if (res.code === -2) {
      window.location.hash = "/error?message=您还未登录&code=-2"
      return Promise.reject(new Error(res.msg || "Error"))
    } else {
      return Promise.resolve(res.data || {})
    }
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
