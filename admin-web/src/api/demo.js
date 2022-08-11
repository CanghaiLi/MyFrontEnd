import request from "@/utils/request"

export function submit(params) {
  return request.post("/test", params)
}

export function query() {
  return request.get("/keys")
}
