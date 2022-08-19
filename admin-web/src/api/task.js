import request from "@/utils/request"

export function taskCreate(params) {
  return request.post("/task/create", params)
}

export function tasksQuery(params) {
  return request.post("/task/list", params)
}
