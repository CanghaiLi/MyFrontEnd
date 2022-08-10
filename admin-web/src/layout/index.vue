<template>
  <el-container class="layout">
    <el-aside class="aside">
      <SideBar />
    </el-aside>
    <el-container>
      <el-header class="el-header">
        <BaseHeader />
      </el-header>
      <el-main class="el-main">
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import BaseHeader from "./BaseHeader"
import SideBar from "./SideBar"
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  .aside {
    width: 160px;
    height: 100%;
  }
}
</style>
