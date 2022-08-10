<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    default-active="1-2"
    text-color="#fff"
    class="menu"
  >
    <el-sub-menu index="1">
      <template #title
        ><el-icon><message /></el-icon>Nav One</template
      >
      <el-menu-item-group>
        <template #title>Group 1</template>
        <el-menu-item index="1-1">Option 1</el-menu-item>
        <el-menu-item index="1-2">Option 2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="1-3">Option 3</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>Option4</template>
        <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><icon-menu /></el-icon>Nav Two
      </template>
      <el-menu-item-group>
        <template #title>Group 1</template>
        <el-menu-item index="2-1">Option 1</el-menu-item>
        <el-menu-item index="2-2">Option 2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="2-3">Option 3</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="2-4">
        <template #title>Option 4</template>
        <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><setting /></el-icon>Nav Three
      </template>
      <el-menu-item-group>
        <template #title>Group 1</template>
        <el-menu-item index="3-1">Option 1</el-menu-item>
        <el-menu-item index="3-2">Option 2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="3-3">Option 3</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="3-4">
        <template #title>Option 4</template>
        <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="4">nav 4</el-menu-item>
  </el-menu>
</template>

<script setup>
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue"
</script>

<style scoped lang="scss">
.menu {
  height: 100%;
}
</style>
