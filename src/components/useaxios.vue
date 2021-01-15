<template>
  <div class="useaxios">
    <el-button type="primary" @click="sendGet()">请求Get接口</el-button>
    <el-button type="primary" @click="sendPost()">请求Post接口</el-button>
    <el-button type="warning" @click="reset()">重置结果</el-button>
    <div>
      <span>请求结果：</span>
      <span>{{value}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'useaxios',
    data() {
      return {
        value: ''
      }
    },
    methods: {
      sendGet() {
        this.$axios
          .get('https://httpbin.org/get')
          .then(response => (this.value = response.data.url))
          .catch(error => (console.log(error)))
      },
      sendPost() {
        let param = {"username":"666666@qq.com","password":"666"}
        this.$axios
          .post('https://httpbin.org/post', param)
          .then(response => (this.value = response.data.data))
          .catch(error => (console.log(error)))
      },
      reset() {
        this.value = ''
      }
    }
  }
</script>

<style>
  .useaxios {
    text-align: left;
  }
</style>
