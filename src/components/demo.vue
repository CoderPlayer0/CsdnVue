<template>
  <div class="demo">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="处理中心">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="我的工作台-选项1">选项1</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项2</template>
              <el-menu-item index="我的工作台-选项2-选项1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-main>{{value}}</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        value: 'Main'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.value = key
      }
    }
  }
</script>

<style>
  html,
  body,
  #app,
  .demo,
  .el-container {
    height: 100%;
  }

  .el-header,
  .el-footer {
    padding: 0;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
