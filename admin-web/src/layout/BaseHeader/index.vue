<script setup>
const userName = "系统管理员"
</script>

<template>
  <div class="toolbar">
    <div class="logo" @click="$router.replace('/')">
      <img src="@/assets/logoleo.png" />
      <span>XX数字管理系统</span>
    </div>

    <el-dropdown v-if="userName">
      <span class="drop">
        <el-icon class="drop-icon">
          <UserFilled />
        </el-icon>
        {{ userName }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss">
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  right: 20px;
  text-align: right;
  cursor: pointer;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 36px;
      margin-right: 10px;
    }
    span {
      color: #fff;
      font-weight: 600;
      font-size: 18px;
      user-select: none;
    }
  }
  .drop {
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    &-icon {
      font-size: 16px;
      margin-right: 6px;
    }
  }
}
</style>
