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
import Vue from 'vue'
import { Component, Provide } from 'vue-property-decorator'

import NavMenu from 'components/NavMenu.vue'

@Component({
  components:{
    NavMenu
  }
})

export default class App extends Vue {
  name: 'app'
}
</script>

<style>
html{
  height: 100%;
  background: #eee
}
</style>

