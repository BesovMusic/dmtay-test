import { createStore } from 'vuex';
import axios from 'axios';

const MAX_COUNT_QUESTIONS = 5;

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
		async getQuestionsFromApi({ commit }) {
			const url = new URL('https://opentdb.com/api.php');
			url.searchParams.set('amount', MAX_COUNT_QUESTIONS);
			const response = await axios.get(url)
			.catch(console.log);
			commit('questions', response.data.results);
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
