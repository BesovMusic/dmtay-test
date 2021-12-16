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
	methods: {
		...mapActions(['getQuestions']),
	},
	created() {
		this.getQuestions();
	},
};
</script>
