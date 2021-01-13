<template>
  <div class="progressbar">
    <div class="title">
      <span>自定义进度条:</span>
    </div>
    <div class="progress">
       <div class="greenblock" v-for="(index) in success" ></div>
       <div class="greyblock" v-for="(index) in failed" ></div>
    </div>
    <div class="show">
      <span>{{success}}</span>
    </div>
    <div class="edit">
      <button @click="add()">增加</button>
      <button @click="mul()">减少</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progressbar',
  data () {
    return {
      amount: 50,
      success: 24,
      failed: 26
    }
  },
  methods: {
    add: function(){
      if(this.success != this.amount){
        this.success = this.success + 1
        this.failed = this.failed - 1
      }
    },
    mul: function(){
      if(this.failed != this.amount){
        this.success = this.success - 1
        this.failed = this.failed + 1
      }
    }
  }
}
</script>

<style>
.progressbar{
  margin-top: 10px;
  margin-left: 10px;
}
.title{
  width: 140px;
  height: 20px;
  float: left;
}
.progress{
  width: 500px;
  height: 20px;
  margin-top: 4px;
  float: left;
}
.show{
  width: 100px;
  height: 20px;
  float: left;
  text-align: center;
}
.edit{
  width: 100px;
  height: 20px;
  float: left;
}
.greenblock{
  width: 6px;
  height: 20px;
  margin-left: 4px;
  float: left;
  background-color: limegreen;
}
.greyblock{
  width: 6px;
  height: 20px;
  margin-left: 4px;
  float: left;
  background-color: gainsboro;
}
</style>
