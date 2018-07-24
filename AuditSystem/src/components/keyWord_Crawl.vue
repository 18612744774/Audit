<template>
	<div style="width: 100%;margin-top: 97px;">
		 <div class="main">
	    		<ul>
	    			<li class="main_left">关键词：</li>
	    			<li><el-input maxlength="20"  @keyup.enter.native="submit" placeholder="请输入搜索内容"  class="find_input" clearable></el-input></li>
	    		</ul>
	    		<ul style="position: relative;">
	    			<li class="main_left">类别：</li>
	    			<li>
	    				<li class="typeList"><button class="click_cur">全部</button></li>
		    			<li class="typeList typeListOne" style="width: 77%;">
		    				<button v-for="(item,index) in buttonList"  @click="greet(index)" :class="{click_cur:index == tabIndex}">{{item.name}}</button>
		    			</li>
	    			</li>
	    			<li class="makeType " @click="makeType">展开</li>
	    			
	    		</ul>
	    		<ul style="border: 0;position: relative;">
	    			<li class="main_left">状态：</li>
	    			<li>
	    				<li class="typeList"><button class="click_cur">全部</button></li>
		    			<li class="typeList typeListTwo" style="width: 77%;">
		    				<button>正常</button>
		    				<button>停止</button>
		    				
		    			</li>
		    			<li class="makeOver" @click="makeOver">展开</li>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="model" v-if="dialogTableVisible">
	    		<div class="model_main">
	    			<div class="model_main_little">
	    				<ul style="justify-content: space-between;width: 90%; margin: 0 auto;">
	    					<li>添加搜索关键词</li>
	    					<li><i @click="cruxClose" class="el-icon-close" style="cursor: pointer;"></i></li>
	    				</ul>
	    			</div>
	    			<div class="model_main_content">
	    				<ul>
	    					<li>关键词：</li>
	    					<li><el-input
	    						class="cruxInput" maxlength="20"
							  placeholder="请输入内容"
							  clearable>
							</el-input></li>
	    				</ul>
	    				<ul>
	    					<li>类别：</li>
	    					<li class="cruxType">
	    						<button>行业名词</button>
	    						<button>行业名词</button>
	    						<button>行业名词</button>
	    						<button>行业名词</button>
	    					</li>
	    				</ul>
	    				<ul>
	    					<li style="opacity: 0;">类别：</li>
	    					<li>
	    						<textarea style="border: 1px solid #c7c3c3;border-radius: 3px;margin-left: 15px;" name="" rows="4" cols="63"></textarea>
	    					</li>
	    				</ul>
	    			</div>
	    			<div style="margin-left: 317px;margin-top: 11px;">
		    			 <el-button style="width: 87px;" type="primary" @click="cruxSure()">确定</el-button>
		    			 <el-button style="width: 87px;" @click="cruxClose()">返回</el-button>
		    		</div>
	    		</div>
	    		
	    	</div>
	    	<div style="margin-top: 40px;width: 97%;position: relative;">
	    		<el-button  @click="dialogTableVisible = true" type="primary" style="position: absolute;left: 28px;top: -17px;">添加关键词</el-button>
	    		
	    		<p style="text-align: right;line-height: 40px;">50条记录</p>
	    	</div>
	    	<div style="width: 96%; margin-left: 29px;">
				<el-table :data="tableData" border style="width: 100%" :default-sort="{order: 'descending'}">
					<el-table-column prop="number" label="序号" :span="6">
					</el-table-column>
					<el-table-column prop="date" label="关键词" sortable :span="6">
					</el-table-column>
					<el-table-column prop="name" label="类别" sortable :span="6">
					</el-table-column>
					<el-table-column prop="name" label="近一周过滤量" sortable :span="6">
					</el-table-column>
					<el-table-column prop="date" label="创建时间" sortable :span="6">
					</el-table-column>
					<el-table-column prop="name"   label="状态"  :span="6">
					</el-table-column>
					<el-table-column  label="操作" :formatter="formatter" :span="6">
						  <template slot-scope="scope">
						  	<span class="operation" @click="operation">开启</span>
					      </template>
					</el-table-column>
				</el-table>
			</div>
			<div style="margin: 40px 0;">
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage4"
			      :page-sizes="[100, 200, 300, 400]"
			      :page-size="100"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="400">
			    </el-pagination>
			</div>
		
	</div>
	
</template>

<script>
	 export default {
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        rounds:1,
        roundT:1,
         currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tabIndex:0,
        dialogTableVisible: false,
        buttonList:[
        {name:"行业名词"},
        {name:"货币"},
        {name:"交易所"}
   
        ],
          tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          number:'1'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          number:'2'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          number:'3'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number:'4'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    mounted(){
    	this.ak()
    },
    methods: {
    	ak(){
    		
    		if($(".typeListTwo").height()>60){
    			$(".typeListTwo").css({height:"60px"})
    			
    			$(".makeOver").show()
    		}else{
    			$(".makeOver").hide()
    			
    		}
    		if($(".typeListOne").height()>60){
    			$(".typeListOne").css({height:"60px"})
    			$(".makeType").show()
    		}else{
    			$(".makeType").hide()
    		}
    		
    	},
//  	tab
      handleSelect(key, keyPath) {
//      console.log(key, keyPath);
      },
//    排序
     formatter(row, column) {
        return row.address;
     },

//    分页
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      greet(index){
      	 this.tabIndex = index;
      },
//    搜索
      submit(){
      	console.log($(".find_input input").val())
      },
//    状态展开
      makeOver(){
      	if(this.rounds==1){
      		$(".typeListTwo").css("height","auto")
      		$(".makeOver").html("闭合")
      		this.rounds=0
      	}else{
      		$(".typeListTwo").css("height","60px")
      		$(".makeOver").html("展开")
      		this.rounds=1
      	}
      
      } ,
//    类别展开
      makeType(){
      	if(this.roundT==1){
      		$(".typeListOne").css("height","auto")
      		$(".makeType").html("闭合")
      		this.roundT=0
      	}else{
      		$(".typeListOne").css("height","60px")
      		$(".makeType").html("展开")
      		this.roundT=1
      	}
      
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
     //   状态操作
     operation(){
     	alert(1)
     }
    },
    
    
  };
	
</script>

<style scoped>
	
	.main{
	    margin-top: 24px;
	    border: 1px solid #e4e7ed;
	    border-radius: 4px;
	    margin-left: 29px;
	    width: 96%;
		
	}
	.main ul{
		min-height: 60px;
		display: flex;
		border-bottom: 1px solid #e4e7ed;
		flex-wrap: wrap;
	}
	.main_left{
		line-height: 60px;
    	background: #ececec;
    	 width: 118px;
       text-align: right;
	}
	.find_input{
		margin-left: 27px;
		margin-top: 9px;
	}
	.typeList button{
		border: 1px solid #e4e7ed;
	    border-radius: 4px;
	    width: 83px;
	    height: 38px;
	    background: white;
	    cursor: pointer;
	    margin: 0 5px;
	}
	.typeList{
		overflow: hidden;
		text-align: left;
		line-height: 55px;
	}
	.click_cur{
		background: #409eff !important;
    	color: white;
	}
	.makeOver{
		line-height: 55px;
		position: absolute;
		right: 10px;
		color: #409eff;
		cursor: pointer;
		display: none;
	}
	.makeType{
		line-height: 55px;
		position: absolute;
		right: 10px;
		color: #409eff;
		cursor: pointer;
		display: none;
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
	}
	.model_main_content ul{
		border: 0;
		
	}
	.model_main_content{
		margin: 0 auto;
	    width: 88%;
	    line-height: 59px;
		
	}
	.cruxType button{
		margin: 0 3px;
	    padding: 4px;
	    background: #409eff;
	    border-radius: 3px;
	    color: #ffffff;
	}
	.cruxType{
		    margin-left: 11px;
	}
	.operation{
		color: #409eff;
		cursor: pointer;
	}
</style>