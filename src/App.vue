<template></template>

<script>
export default {
	name: 'App',

	created() {
		this.$store.dispatch('GET_QUESTIONS_FROM_API');
	},
};
</script>
