<template>
	<div style="width: 100%;margin-top: 97px;">
		<div style="margin-bottom: 10px;">
			<ul style="display: flex;justify-content: space-between;width: 90%;margin: 0 auto;">
				<li style="font-size: 16px;" >已有敏感词:</li>
				<li style="color: #3D88EA;font-size: 16px;cursor: pointer;"><i style="font-size: 21px; vertical-align: middle; margin-right: 5px;" class="el-icon-circle-plus-outline"></i ><span @click="dialogTableVisible = true">添加敏感词</span></li>
			</ul>
		</div>
		<div class="letter">
			<span v-for="(item,index) in letter"  @click="greet(index,item.name)" :class="{click_cur:index == tabIndex}">{{item.name}}</span>
		</div>
		<div style="margin-top: 20px;">
			
		</div>
		<div class="sensitive_content">
			<el-tag style="    margin: 10px;"
			  :key="tag"
			  v-for="tag in dynamicTags"
			  closable
			  :disable-transitions="false"
			  @close="handleClose(tag)">
			  {{tag}}
			</el-tag>
		</div>
		<div class="model" v-if="dialogTableVisible">
	    		<div class="model_main">
	    			<div class="model_main_little">
	    				<ul style="justify-content: space-between;width: 90%; margin: 0 auto;">
	    					<li>添加敏感词</li>
	    					<li><i @click="cruxClose" class="el-icon-close" style="cursor: pointer;"></i></li>
	    				</ul>
	    			</div>
	    			<div class="model_main_content">
	    				<ul>
	    					<li>敏感词：</li>
	    					<li>
	    						<textarea style="border: 1px solid #c7c3c3;border-radius: 3px;margin-left: 15px;" name="" rows="5" cols="63"></textarea>
	    					</li>
	    				</ul>
	    			</div>
	    			<div style="margin-left: 336px;margin-top: 11px;">
		    			 <el-button style="width: 87px;" type="primary">确定</el-button>
		    			 <el-button style="width: 87px;" @click="cruxClose">返回</el-button>
		    		</div>
	    		</div>
	    		
	    	</div>
	</div>
</template>

<script>
	 export default {
	 	data(){
		return{
			tabIndex:0,
			 letter:[
			 	{name:"全部"},
		        {name:"A"},
		        {name:"B"},
		        {name:"C"},
		        {name:"D"},
		        {name:"E"},
		        {name:"F"},
		        {name:"G"},
		        {name:"H"},
		        {name:"I"},
		        {name:"J"},
		        {name:"K"},
		        {name:"L"},
		        {name:"M"},
		        {name:"N"},
		        {name:"O"},
		        {name:"P"},
		        {name:"Q"},
		        {name:"R"},
		        {name:"S"},
		        {name:"T"},
		        {name:"U"},
		        {name:"V"},
		        {name:"W"},
		        {name:"S"},
		        {name:"Y"},
		        {name:"Z"}
		        ],
		         dynamicTags: ['标签一', '标签二',  '标签三'],
		        inputVisible: false,
		        inputValue: '',
		         dialogTableVisible: false
			}
		},
		mounted(){
			
	    },
	    methods: {
	    	 greet(index,name){
	    	 	console.log(name)
		      	 this.tabIndex = index;
		      },
		      sensitive_delete(name){
		      	$(this).parent().hide()
		      	console.log($(this).siblings())
		      },
//		      删除
		       handleClose(tag) {
		       	console.log(tag)
		        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
		      },
		      //    添加关键词 关闭
			     cruxClose(){
			     	this.dialogTableVisible=false
			     },
			//   添加确定
			     cruxSure(){
			//   	$(".cruxInput input").val()
			     	console.log($(".cruxInput input").val())
			     },
	    	
	    }
	 }
	
	
	
</script>

<style scoped>
	.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
	.letter{
		text-align: left;
		margin: 0 auto;
		width:90%;
		min-height:50px;
		border:1px solid rgba(234,234,234,1);
		line-height: 50px;
	}
	.letter span{
		font-size: 16px;
	    display: inline-block;
	    padding: 3px 8px;
	    cursor: pointer;
	    line-height: 19px;
	    margin: 0 10px;
	}
	.letter span:nth-child(1){
		margin-left: 10px;
	}
	.click_cur{
		background: #409eff !important;
    	color: white;
	}
	.sensitive_content{
		text-align: left;
		margin-top: 20px;
		margin: 0 auto;
		width:90%;
		height: 400px;
		border: 1px solid #eaeaea;
	}
	.sensitive_content ul li{
		   margin: 16px;
    	   padding: 5px 8px;
   		  background: #409eff !important;
   			 color: white;
    		border-radius: 5px;
	}
	.model{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(95, 91, 91, 0.5);
		z-index: 99;
	}
	.model_main{
		width:600px;
		height:338px;
		background:rgba(255,255,255,1);
		box-shadow:0px 3px 6px 0px rgba(0,0,0,0.5);
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.model_main_little{
		line-height: 59px;
		border-bottom: 1px solid #e4e7ed;
    
	}
	.model_main_little ul{
   	 border: 0;
   	 font-size: 16px;
   	 display: flex;
	}
	.model_main_content ul{
		margin-top: 40px;
		border: 0;
		 display: flex;
		
	}
	.model_main_content{
		margin: 0 auto;
	    width: 90%;
	    line-height: 59px;
		
	}
	
</style>