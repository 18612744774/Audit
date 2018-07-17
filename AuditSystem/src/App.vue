<template>
  <div id="app">
  <el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#409eff">
		  <img src="../build/logo.png" style="width: 2%;position: absolute;left: 50px;" alt="" />
		  <el-menu-item index="1" style="margin-left: 100px;"><router-link to="find">内容审核</router-link></el-menu-item>
		  <el-menu-item index="2"> <router-link to="ContentAudit">数据监控</router-link></el-menu-item>
		  <el-menu-item index="3"><router-link to="account">账号管理</router-link></el-menu-item>
		  <el-menu-item index="4" style="position: absolute;right: 0;"><router-link to="login">账号：admin</router-link></el-menu-item>
		</el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
a{
	text-decoration: none;
	display: inline-block;
}
body{
	padding: 0;
	margin: 0;
}

</style>
