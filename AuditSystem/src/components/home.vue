<template>
	<div class="main">
  	<ul style="justify-content: space-between;display: flex;">
  		<li style="margin-left: 41px; line-height: 62px;"><img src="../assets/img/logo.png" alt="" /></li>
  		<li style="display: flex;margin-right: 41px; line-height: 62px;">
  			<div>
  				<img src="../assets/img/admin.png" alt="" />
  			</div>
  			<div>
  				<ul>
  				  <li style="margin-left: 8px;line-height: 45px;">admin</li>
  				  <li style="line-height: 1px;margin-left: 13px;"><router-link to="/login">退出</router-link> </li>
  				</ul>
  			</div>
  		</li>
  	</ul>
  	<router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "home",
  methods: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
