<template>
	<div style="width: 100%;display: flex;">
		<div class="content" >
			<el-row class="tac">
				<el-col :span="4">
					<el-menu style="width: 200px;" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router="" background-color="#20335d" text-color="#fff">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>内容审核</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="/home/tab/find"><img style="margin: 0px 7px;" src="../assets/img/find.png" alt="" />查询审核</el-menu-item>
								<el-menu-item index="/home/tab/keyWord"><img style="margin: 0px 7px;" src="../assets/img/sign.png" alt="" />关键词设置</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>数据监控</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="/home/tab/ContentAudit_Operate"><img style="margin: 0px 7px;" src="../assets/img/2.png" alt="" />运营指标监控</el-menu-item>
								<el-menu-item index="/home/tab/ContentAudit_product"><img style="margin: 0px 7px;" src="../assets/img/fenxi.png" alt="" />产品功能分析</el-menu-item>
								<el-menu-item index="/home/tab/ContentAudit_user"><img style="margin: 0px 7px;" src="../assets/img/user.png" alt="" />用户信息查询</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-col>
			</el-row>
			
		</div>
		<router-view></router-view>
	</div>
	
	
	
</template>

<script>
	export default {
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
  color: #FFFFFF;
  display: inline-block;
  width: 97%;
}
.content{
	height: 1000px;
	width: 200px;
	background:rgba(32,51,93,1);
}
.el-submenu__title{
	width: 200px!important;
}
</style>