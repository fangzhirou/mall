<template>	
	<div>
		<nav-header></nav-header>
		<router-view></router-view>
		<nav-footer></nav-footer>
	</div>
	</template>
<script>
import NavHeader from './NavHeader.vue'
export default {
  components: { NavHeader },
	name:'nav-header'
}
</script>
	