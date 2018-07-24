<template>
	<div style="margin-top: 54px; width: 100%;height: 60px;" class="keyTab">
		  <el-menu :default-active="activeIndex" class="el-menu-demo" router="" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="/home/tab/keyWord/keyWord_Disable">禁用词</el-menu-item>
		  <el-menu-item index="/home/tab/keyWord/keyWord_Crawl">爬取词</el-menu-item>
		  <el-menu-item index="/home/tab/keyWord/keyWord_Sensitive">敏感词</el-menu-item>
		  <router-view></router-view>
		</el-menu>
		
	
	</div>
	
</template>

<script>
	 export default {
     data() {
      return {
        activeIndex:null
        
      };
    },
    mounted(){
    	this.activeIndex=sessionStorage.getItem("keyRouter")
    	console.log(this.activeIndex)
    },
    methods: {
//  	tab
      handleSelect(key, keyPath) {
      	sessionStorage.setItem("keyRouter",key)
      }
//   
    }
  };
	
</script>

<style scoped>
	.keyTab ul{
		height: 60px;
	}
</style>