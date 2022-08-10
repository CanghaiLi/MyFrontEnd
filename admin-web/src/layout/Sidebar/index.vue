<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#1B2640"
    text-color="#fff"
    :defaultActive="activePath"
    class="menu"
  >
    <MenuItem
      v-for="menu in menus"
      :key="menu.name"
      :menu="menu"
      :path="'/admin/' + menu.path"
    />
  </el-menu>
</template>

<script setup>
import { computed } from "vue"
import MenuItem from "./MenuItem.vue"
import menus from "@/router/routes"
import { useRoute } from "vue-router"
const route = useRoute()
console.log(route)

const activePath = computed(() => {
  return route.path
})
</script>

<style scoped lang="scss">
.menu {
  border: none;
  :deep(.el-menu-item) {
    min-width: auto;
    &.is-active {
      background-color: rgb(22, 30, 51);
    }
  }
}
</style>
