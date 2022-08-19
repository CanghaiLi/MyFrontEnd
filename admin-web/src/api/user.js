import request from "@/utils/request"

export function userRegister(params) {
  return request.post("/user/register", params)
}

export function userLogin(params) {
  return request.post("/user/login", params)
}
