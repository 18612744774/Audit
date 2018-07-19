<template>
  <!--<div class="main">
  	<ul style="justify-content: space-between;display: flex;">
  		<li style="margin-left: 41px; line-height: 62px;"><img src="./assets/img/logo.png" alt="" /></li>
  		<li style="display: flex;margin-right: 41px; line-height: 62px;">
  			<div>
  				<img src="./assets/img/admin.png" alt="" />
  			</div>
  			<div>
  				<ul>
  				  <li style="margin-left: 8px;line-height: 45px;">admin</li>
  				  <li style="line-height: 1px;margin-left: 13px;"><router-link to="/home/login">退出</router-link> </li>
  				</ul>
  			</div>
  		</li>
  	</ul>
  	<router-view></router-view>
  </div>-->
   <div id="app">
        <router-view/>
    </div>
  
</template>
<script>
export default {
  name: 'App',
   data() {
      return {
      };
    },
    methods: {
    }
  
}
</script>

<style scoped>
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
.main{
width:100%;
height:63px;
background:rgba(255,255,255,1);
box-shadow:0px 1px 0px 0px rgba(222,230,240,1);
}

</style>
