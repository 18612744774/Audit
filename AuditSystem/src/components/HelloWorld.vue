<template>
	<div>
			<el-col :span="2" class="colst" style="margin-left: 100px;"> 
			    <el-menu 
			      default-active="1"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose"
			      text-color="#545c64"
			      active-text-color="#409eff">
			      
			      <el-menu-item index="1" style="text-align: left;">
			        <i class="el-icon-setting"></i>
			        <span slot="title"><router-link to="/find">查询审核</router-link></span>
			      </el-menu-item>
			      <el-menu-item index="2" style="text-align: left;">
			        <i class="el-icon-setting"></i>
			        <span slot="title"><router-link to="/keyWord">关键词设置</router-link></span>
			      </el-menu-item>
			    </el-menu>
			  </el-col>
			  <router-view></router-view>
	</div>
	
  
  
</template>
<script>
export default {
  name: 'HelloWorld',
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-menu{
		flex-direction: column-reverse !important;
	}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
