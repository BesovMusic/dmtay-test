import { createStore } from 'vuex';
import axios from 'axios';

// колличество вопросов в ответе сервера
const key = 5;

export default createStore({
	state: {
		questions: [],
		loading: true,
		userAnswer: '',
	},
	getters: {
		getQuestionsFromState: (state) => {
			return state.questions;
		},
		getLoadingFromState: (state) => {
			return state.loading;
		},
		getUserAnswerFromState: (state) => {
			return state.userAnswer;
		},
	},
	mutations: {
		setQuestionsToState: (state, questions) => {
			state.questions = questions;
		},
		setLoadingEnd: (state) => {
			state.loading = false;
		},
		setUserAnswer: (state, answer) => {
			state.userAnswer = answer;
		},
	},
	actions: {
		GET_QUESTIONS_FROM_API({ commit }) {
			let url = new URL('https://opentdb.com/api.php');
			url.searchParams.set('amount', key);
			axios
				.get(url)
				.then((response) => {
					commit('setQuestionsToState', response.data.results);
				})
				.catch(console.log)
				.finally(() => {
					commit('setLoadingEnd');
				});
		},
		POST_ANSWERS() {
			axios
				.post('http://localhost:3000/answers/', {
					answer: this.state.userAnswer,
				})
				.then((response) => {
					console.log(response);
				})
				.catch(console.log);
		},
	},
	modules: {},
});
