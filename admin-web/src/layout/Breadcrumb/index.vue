<template>
  <el-breadcrumb v-if="!isHome" :separator-icon="ArrowRight" class="bread">
    <el-breadcrumb-item
      v-for="route in breadList"
      :key="route.name"
      :to="route.path"
      >{{ route.meta?.title || "" }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup>
import { computed } from "vue"
import { ArrowRight } from "@element-plus/icons-vue"
import { useRoute } from "vue-router"
const route = useRoute()
console.log(route.name)
const isHome = computed(() => route.name === "Home")
const breadList = computed(() => route.matched.slice(2))
</script>

<style scoped lang="scss">
.bread {
  height: 36px;
  line-height: 30px;
  :deep(.el-breadcrumb__inner) {
    &.is-link {
      font-weight: normal;
    }
  }
  :deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
    font-weight: 600;
    color: #333;
  }
}
</style>
