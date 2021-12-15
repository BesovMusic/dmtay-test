import { createStore } from 'vuex';
import axios from 'axios';

// колличество вопросов в ответе сервера
const NUMBER_OF_QUESTIONS = 5;

export default createStore({
	state: {
		questions: [],
	},
	getters: {
		getQuestions: (state) => {
			return state.questions;
		},
	},
	mutations: {
		questions: (state, questions) => {
			state.questions = questions;
		},
	},
	actions: {
		getQuestionsFromApi({ commit }) {
			const url = new URL('https://opentdb.com/api.php');
			url.searchParams.set('amount', NUMBER_OF_QUESTIONS);
			axios
				.get(url)
				.then((response) => {
					commit('questions', response.data.results);
				})
				.catch(console.log);
		},
		sendAnswer({ state }, userAnswer) { // eslint-disable-line no-unused-vars
			axios
				.post('http://localhost:3000/answers/', {
					answer: userAnswer,
				})
				.catch(console.log);
		},
	},
});
