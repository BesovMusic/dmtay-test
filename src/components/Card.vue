<template>
	<div v-if="question" class="card mt-2 shadow-sm">
		<div class="card-body">
			<h5
				class="card-title" 
				v-html="question.category"
			></h5>
			<h6
				class="card-subtitle mb-2 text-muted"
				v-html="question.difficulty"
			></h6>
			<p
				class="card-text" 
				v-html="question.question"
			></p>
			<div
				v-for="(answer, index) in answers"
				:key="index"
				class="form-check form-check-inline"
			>
				<input
					class="form-check-input"
					name="flexRadioDefault"
					type="radio"
					:value="answer"
					v-model="userAnswer"
				/>
				<label
					class="form-check-label"
					v-html="answer"
				></label>
			</div>
			<button
				class="btn btn-primary"
				@click="selectAnswer"
				:class="{ disabled: !isButtonActive }"
			>
				Next
			</button>
		</div>
	</div>

	<div v-show="gameEnded" class="finalWrapper">
		<div class="card mt-2 shadow-sm">
			<div class="card-body">
				<h5 class="card-title">Final</h5>
				<p class="card-text">
					Correct answers: {{ correctAnswerCounter }}
				</p>
				<button class="btn btn-primary" @click="retry">Retry</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'Card',
	data() {
		return {
			cardNumber: 0,
			correctAnswerCounter: 0,
			userAnswer: '',
			gameEnded: false,
		};
	},
	methods: {
		...mapActions(['sendAnswer', 'getQuestions']),
		selectAnswer(e) {
			if (this.userAnswer === this.question.correct_answer) {
				this.correctAnswerCounter++;
			}
			this.sendAnswer(this.userAnswer);
			this.incrementCardNumber();
			e.target.blur();
		},
		incrementCardNumber() {
			if (this.cardNumber < this.questions.length - 1) {
				this.cardNumber++;
			} else {
				this.gameEnded = true;
			}
			this.userAnswer = '';
		},
		retry() {
			this.getQuestions();
			this.cardNumber = 0;
			this.correctAnswerCounter = 0;
			this.gameEnded = false;
		},
	},
	computed: {
		...mapGetters(['questions']),
		question() {
			return this.questions[this.cardNumber];
		},
		answers() {
			const arr = this.question.incorrect_answers.concat(
				this.question.correct_answer
			);
			return arr.sort(() => Math.random() - 0.5);
		},
		isButtonActive() {
			return this.userAnswer != '';
		},
	},
};
</script>

<style lang="scss">
.finalWrapper {
	position: absolute;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	z-index: 2;
	background: #fff;
	top: 0;
	left: 0;
}
</style>
