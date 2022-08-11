<template>
  <el-container class="layout">
    <el-header class="header">
      <BaseHeader />
    </el-header>
    <el-container>
      <el-aside class="aside">
        <SideBar />
      </el-aside>
      <el-main class="main">
        <Breadcrumb />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import BaseHeader from "./BaseHeader"
import SideBar from "./SideBar"
import Breadcrumb from "./Breadcrumb"
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  .aside {
    background-color: #1b2640;
    width: 180px;
    height: 100%;
  }
  .header {
    height: 56px;
    background-color: #1b2640;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.3);
  }
  .main {
    padding: 4px 16px;
  }
}
</style>
