<template>
	<div style="margin-top: 50px;">
			<el-col :span="2" class="colst" style="margin-left: 100px;width: 180px;"> 
			    <el-menu 
			      default-active="1"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose"
			      text-color="#545c64"
			      active-text-color="#409eff">
			      <el-menu-item index="1" style="text-align: left;">
			        <i class="el-icon-setting"></i>
			        <span slot="title"><router-link to="/home/find">查询审核</router-link></span>
			      </el-menu-item>
			      <el-menu-item index="2" style="text-align: left;">
			        <i class="el-icon-setting"></i>
			        <span slot="title"><router-link to="/home/keyWord">关键词设置</router-link></span>
			      </el-menu-item>
			    </el-menu>
			  </el-col>
			  <router-view></router-view>
	</div>
</template>
<script>
export default {
  name: "home",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
  flex-direction: column-reverse !important;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #000000;
  display: inline-block;
  width: 97%;
}
/*.el-menu{
	border-right: solid 0px #e6e6e6 !important; 
}*/
</style>
