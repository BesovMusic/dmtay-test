<template>
	<div class="container">
		<Card v-if="!this.getLoadingFromState" />
	</div>
</template>

<script>
import Card from './components/Card.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'App',
	components: {
		Card,
	},
	computed: {
		...mapGetters(['getLoadingFromState']),
	},
	created() {
		this.$store.dispatch('GET_QUESTIONS_FROM_API');
	},
};
</script>

<style lang="scss">
#app {
	display: flex;
	align-items: center;
	min-height: 60vh;
}
</style>
