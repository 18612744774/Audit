<template>
	<div style="margin-left: 280px;">
 		 <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
		    <el-tab-pane label="禁用词" name="first">
		    	<div class="main">
		    		<ul>
		    			<li class="main_left">关键词：</li>
		    			<li><el-input maxlength="20"  @keyup.enter.native="submit" placeholder="请输入搜索内容"  class="find_input" clearable></el-input></li>
		    		</ul>
		    		<!--v-model="input"-->
		    		<ul>
		    			<li class="main_left">类别：</li>
		    			<li class="typeList" v-for="(item,index) in buttonList" >
		    				<button @click="greet(index)" :class="{click_cur:index == tabIndex}">{{item.name}}</button>
		    				
		    			</li>
		    		</ul>
		    		<ul style="border: 0;">
		    			<li class="main_left">状态：</li>
		    			<li class="typeList">
		    				<button>禁用中</button>
		    				<button>解除禁用</button>
		    				
		    			</li>
		    		</ul>
		    	</div>
		    	<div style="width: 90%;margin-top: 80px;">
		    		<p style="text-align: right;line-height: 40px;">50条记录</p>
		    	</div>
		    	<div style="width: 90%;">
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
						<el-table-column prop="name" label="状态" sortable :span="6">
						</el-table-column>
						<el-table-column  label="操作" :formatter="formatter" :span="6">
							  <template slot-scope="scope">
						        <el-button @click="handleClick(scope.row)" type="text" size="small">开启</el-button>
						      </template>
						</el-table-column>
					</el-table>
				</div>
				<div style="margin: 50px 0;">
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
		    	
		    </el-tab-pane>
		    <el-tab-pane label="爬取词" name="second">
		    	<div class="main">
		    		<ul>
		    			<li class="main_left">关键词：</li>
		    			<li><el-input maxlength="20"  placeholder="请输入搜索内容"  class="find_input" clearable></el-input></li>
		    		</ul>
		    		<!--v-model="input"-->
		    		<ul>
		    			<li class="main_left">类别：</li>
		    			<li class="typeList" >
		    				<button>行业名词</button>
		    				<button>货币</button>
		    				<button>交易所</button>
		    			</li>
		    		</ul>
		    		<ul style="border: 0;">
		    			<li class="main_left">状态：</li>
		    			<li class="typeList">
		    				<button>正常</button>
		    				<button>停止</button>
		    				
		    			</li>
		    		</ul>
		    	</div>
		    	<div style="width: 90%;margin-top: 80px;">
		    		<p style="text-align: right;line-height: 40px;">50条记录</p>
		    	</div>
		    	<div style="width: 90%;">
					<el-table :data="tableData" border style="width: 100%" :default-sort="{ order: 'descending'}">
						<el-table-column prop="number" label="序号" :span="6">
						</el-table-column>
						<el-table-column prop="date" label="关键词" sortable :span="6">
						</el-table-column>
						<el-table-column prop="name" label="类别" sortable :span="6">
						</el-table-column>
						<el-table-column prop="name" label="近一周爬取量" sortable :span="6">
						</el-table-column>
						<el-table-column prop="date" label="创建时间" sortable :span="6">
						</el-table-column>
						<el-table-column prop="name" label="状态" sortable :span="6">
						</el-table-column>
						<el-table-column  label="操作" :formatter="formatter" :span="6">
							  <template slot-scope="scope">
						        <el-button @click="handleClick(scope.row)" type="text" size="small">解禁</el-button>
						      </template>
						</el-table-column>
					</el-table>
				</div>
				<div style="margin: 50px 0;">
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
		    </el-tab-pane>
		    <el-tab-pane label="敏感词" name="third">
		    	
		    </el-tab-pane>
		  </el-tabs>
	</div>
</template>

<script>
	 export default {
     data() {
      return {
        activeName2: 'first',
         currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tabIndex:0,
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
        }]
      };
    },
    methods: {
//  	tab
      handleClick(tab, event) {
        console.log(tab, event);
      },
//    排序
     formatter(row, column) {
        return row.address;
     },
//   编辑
      handleClick(row) {
        console.log(row);
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
      }
    }
  };
	
</script>

<style scoped>
	.main{
	    margin-left: 84px;
    	margin-top: 24px;
		width: 900px;
		border: 1px solid #e4e7ed;
		border-radius: 4px;
		
	}
	.main ul{
		height: 60px;
		display: flex;
		border-bottom: 1px solid #e4e7ed;
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
	}
	.typeList{
		line-height: 55px;
    	margin-left: 27px;
	}
	.click_cur{
		background: #409eff !important;
    	color: white;
	}
</style>