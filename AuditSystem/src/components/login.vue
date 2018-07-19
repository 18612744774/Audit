<template>
	<div class="wrap">
		<div class="wrap_sign">
			<div style="width:390px;height:52px;border:1px solid rgba(228,228,228,1);line-height: 52px;font-size: 20px;color: #2E86FF; font-weight: 600;">
				<p style="display: inline-block;margin-left: -150px;">内部管理系统登陆</p>
			</div>
			<div style="margin-left: -22px;margin-top: 56px; width: 90%;">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="账号" prop="pass">
				    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="checkPass">
				    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button style="width: 252px;" type="primary" @click="submitForm('ruleForm2')">立即登录</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
        	 this.$router.push({
                            path: "/home/tab/find"
                        })
        	
        	
//        if (valid) {
//          alert('submit!');
//        } else {
//          console.log('error submit!!');
//          return false;
//        }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
	.wrap{
		height: 100%;
		width: 100%;
		position:fixed;
		background: url(../assets/img/backg.png) ;
		background-size: 100%;
	}
	.wrap_sign{
		width:391px;
		height:406px;
		background:rgba(255,255,255,1);
		border-radius:2px;
		position: absolute;
	    right: 186px;
	    top: 191px;
	}
</style>