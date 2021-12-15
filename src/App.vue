<template>
	<div class="container">
		<Card />
	</div>
</template>

<script>
import Card from './components/Card.vue';

import { mapActions } from 'vuex';

export default {
	name: 'App',
	components: {
		Card,
	},
	data() {
		return {
			loading: false,
		};
	},
	methods: {
		...mapActions(['getQuestionsFromApi']),
	},
	created() {
		this.getQuestionsFromApi();
	},
};
</script>

<style lang="scss">
// #app {
// 	display: flex;
// 	align-items: center;
// 	min-height: 60vh;
// }
</style>
