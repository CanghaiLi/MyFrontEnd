<template>
  <el-sub-menu v-if="menu?.children?.length" :index="menuPath">
    <template #title>
      <!-- <el-icon v-if="menu.meta?.icon"> -->
      <el-icon>
        <!-- <component :is="menu.meta?.icon"></component> -->
        <Edit />
      </el-icon>
      <span>{{ menu.meta?.title }}</span>
    </template>
    <template v-for="children in menu.children" :key="children.name">
      <menu-item :menu="children" :path="`${menuPath}/${children.path}`" />
    </template>
  </el-sub-menu>
  <router-link v-else :to="menuPath">
    <el-menu-item :index="menuPath">
      <el-icon>
        <!-- <component :is="menu.meta.icon"></component> -->
        <Edit />
      </el-icon>
      <template #title>
        <span>{{ menu.meta?.title }}</span>
      </template>
    </el-menu-item>
  </router-link>
</template>
<script setup>
import { computed } from "vue"
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
  path: {
    type: String,
    default: "",
  },
})
const menuPath = computed(() => {
  // if ([1, 2].includes(props.menu.meta?.menuType as number)) {
  // return (
  //   (props.path === '/' ? props.path : props.path + '/') +
  //   props.menu.children![0].path
  // )
  // }
  return props.path
})
console.log(props.menu)
</script>
