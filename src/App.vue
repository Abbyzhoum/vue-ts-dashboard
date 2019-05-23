<template>
  <div id="app">
    <!-- <router-view/> -->


    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script lang="ts">
// export default{
//   name: 'App'
// }
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})

export default class App extends Vue {

}
</script>

<style>
html{
  height: 100%;
  background: #eee
}
</style>

