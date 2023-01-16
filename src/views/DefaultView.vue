<script lang="ts" setup>
import SideBar from '../components/SideBar/SideBar.vue';

import DashView from './DashView.vue';
</script>

<template>
	<div class="defaultview--container">
		<side-bar class="defaultview--sidebar"/>
		<div class="views--area">
			<component :is="DashView" />
		</div>
	</div>
</template>

<style scoped>
.defaultview--container {
	display: flex;
}
.defaultview--sidebar {
	width: 20%;
}
.views--area {
	width: 80%;
}
</style>