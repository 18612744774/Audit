<template>
	
	<div style="width: 100%;display: flex;">
		<div class="content" >
			<el-row class="tac">
				<el-col :span="4">
					<el-menu style="width: 200px;" :default-active=tabK class="el-menu-vertical-demo"   router="" background-color="#20335d" text-color="#fff">
						<el-submenu index="1" style="text-align: left;" @open="handleOpen" @close="handleClose">
							<template slot="title" >
								<i class="el-icon-location"></i>
								<span>内容审核</span>
							</template>
							<el-menu-item-group>
								<el-menu-item @click="addressa" style="text-align: left;" index="/home/tab/find"><img style="margin: 0px 7px;" src="../assets/img/find.png" alt="" />查询审核</el-menu-item>
								<el-menu-item @click="addressb"style="text-align: left;" index="/home/tab/keyWord/keyWord_Disable"><img style="margin: 0px 7px;" src="../assets/img/sign.png" alt="" />关键词设置</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2" style="text-align: left;">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>数据监控</span>
							</template>
							<el-menu-item-group>
								<el-menu-item @click="addressc"style="text-align: left;" index="/home/tab/ContentAudit_Operate"><img style="margin: 0px 7px;" src="../assets/img/2.png" alt="" />运营指标监控</el-menu-item>
								<el-menu-item @click="addressd"style="text-align: left;" index="/home/tab/ContentAudit_product"><img style="margin: 0px 7px;" src="../assets/img/fenxi.png" alt="" />产品功能分析</el-menu-item>
								<el-menu-item @click="addresse"style="text-align: left;" index="/home/tab/ContentAudit_user"><img style="margin: 0px 7px;" src="../assets/img/user.png" alt="" />用户信息查询</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-col>
			</el-row>
		</div>
		<div class="newAddress">
			<i class="el-icon-location" style="color: #dcd7d7;"></i>
			<span style="color: #dcd7d7;">当前位置：</span>
			<span v-if="findAdress">查询审核</span>
			<span>{{routerLitter}}</span>
		</div>
		<router-view></router-view>
	</div>
	
	
	
	
</template>

<script>
	export default {
		  data() {
      return {
        routerLitter:null,
        findAdress:true,
         tabK:null
      };
    },
    mounted(){
    	this.tabK=sessionStorage.getItem("router")
    	if(this.tabK==null){
    		this.tabK="/home/tab/find"
    	}
    	
    	console.log(this.tabK)
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addressa(){
    	this.routerLitter="查询审核";
    	this.findAdress=false;
    	this.tabK="/home/tab/find";
    	sessionStorage.setItem("router",this.tabK)
    },
    addressb(){
    	this.routerLitter="关键词设置";
    	this.findAdress=false;
    	this.tabK="/home/tab/keyWord/keyWord_Disable";
    	sessionStorage.setItem("router",this.tabK)
    	sessionStorage.setItem("keyRouter","/home/tab/keyWord/keyWord_Disable")
    },
    addressc(){
    	this.routerLitter="运营指标监控";
    	this.findAdress=false;
    	this.tabK="/home/tab/ContentAudit_Operate";
    	sessionStorage.setItem("router",this.tabK)
    },
    addressd(){
    	this.routerLitter="产品功能分析";
    	this.findAdress=false;
    	this.tabK="/home/tab/ContentAudit_product";
    	sessionStorage.setItem("router",this.tabK)
    },
    addresse(){
    	this.routerLitter="用户信息查询";
    	this.findAdress=false;
    	this.tabK="/home/tab/ContentAudit_user";
    	sessionStorage.setItem("router",this.tabK);
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
.newAddress{
	width: 100%;
	height: 40px;
	background:rgba(255,255,255,1);
	position: absolute;
    top: 63px;
    left: 200px;
    border-top:2px solid #DEE6F0;
    border-bottom: 2px solid #DEE6F0;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
}
</style>