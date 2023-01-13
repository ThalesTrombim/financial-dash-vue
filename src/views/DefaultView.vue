<script lang="ts" setup>
import SideBar from '../components/SideBar/SideBar.vue';

import DashView from './DashView.vue';
</script>

<template>
	<div class="defaultview--container">
		<side-bar />
		<div class="views--area">
			<component :is="DashView" />
		</div>
	</div>
</template>

<style scoped>
.defaultview--container {
	display: flex;
}
</style>