<template>
  <el-sub-menu v-if="menu?.children?.length" :index="path">
    <template #title>
      <el-icon v-if="menu.meta?.icon">
        <component :is="menu.meta?.icon"></component>
      </el-icon>
      <span>{{ menu.meta?.title }}</span>
    </template>
    <template v-for="children in menu.children" :key="children.name">
      <menu-item :menu="children" :path="`${path}/${children.path}`" />
    </template>
  </el-sub-menu>
  <router-link v-else :to="path">
    <el-menu-item :index="path">
      <el-icon v-if="menu.meta?.icon">
        <component :is="menu.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ menu.meta?.title }}</span>
      </template>
    </el-menu-item>
  </router-link>
</template>
<script setup>
defineProps({
  menu: {
    type: Object,
    required: true,
  },
  path: {
    type: String,
    default: "",
  },
})
</script>
