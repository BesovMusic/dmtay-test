<template>
	<div class="card mt-2 shadow-sm">
		<div class="card-body">
			<h5 class="card-title">{{ questions.category }}</h5>
			<h6 class="card-subtitle mb-2 text-muted">
				{{ questions.difficulty }}
			</h6>
			<p class="card-text">{{ questions.question }}</p>
			<Radio
				v-for="(answer, index) in answers"
				:key="index"
				:answer="answer"
				@changeAnswer="changeAnswer"
			/>
			<button class="btn btn-primary" @click="answerSelected">
				Next
			</button>
		</div>
	</div>
	{{ correctAnswerCounter }}
	{{ userAnswer }}
</template>

<script>
import Radio from './Radio.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'Card',
	components: {
		Radio,
	},
	data() {
		return {
			cardNumber: 0,
			correctAnswerCounter: 0,
			userAnswer: '',
		};
	},
	methods: {
		answerSelected() {
			if (this.getUserAnswerFromState === this.questions.correct_answer) {
				this.correctAnswerCounter++;
			}
			this.$store.dispatch('POST_ANSWERS');
			this.incrementCardNumber();
		},
		incrementCardNumber() {
			if (this.cardNumber < this.getQuestionsFromState.length - 1) {
				this.cardNumber++;
				this.$store.state.userAnswer = '';
			} else {
				alert('Игра окончена');
			}
		},
		changeAnswer(answer) {
			this.userAnswer = answer;
		},
	},
	computed: {
		...mapGetters(['getQuestionsFromState', 'getUserAnswerFromState']),
		questions() {
			return this.getQuestionsFromState[this.cardNumber];
		},
		answers() {
			return this.questions.incorrect_answers.concat(
				this.questions.correct_answer
			);
		},
	},
};
</script>
