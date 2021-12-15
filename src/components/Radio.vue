<template>
	<div class="form-check form-check-inline">
		<input
			class="form-check-input"
			name="flexRadioDefault"
			type="radio"
			:value="answer"
			v-model="userAnswer"
			@change="change"
		/>
		<label class="form-check-label"> {{ answer }} </label>
	</div>
</template>

<script>
export default {
	name: 'Radio',
	props: {
		answer: {},
	},
	data() {
		return {
			userAnswer: '',
		};
	},
	methods: {
		change() {
			this.$emit('changeAnswer', this.userAnswer);
		},
		clearUserAnswer() {
			this.userAnswer = '';
		},
	},
};
</script>
