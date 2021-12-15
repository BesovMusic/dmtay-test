import { createStore } from 'vuex';
import axios from 'axios';

// колличество вопросов в ответе сервера
const key = 5;

export default createStore({
	state: {
		questions: [],
	},
	getters: {
		getQuestionsFromState: (state) => {
			return state.questions;
		},
	},
	mutations: {
		setQuestionsToState: (state, questions) => {
			state.questions = questions;
		},
	},
	actions: {
		getQuestionsFromApi({ commit }) {
			let url = new URL('https://opentdb.com/api.php');
			url.searchParams.set('amount', key);
			axios
				.get(url)
				.then((response) => {
					commit('setQuestionsToState', response.data.results);
				})
				.catch(console.log);
		},
		postAnswers({ state }, userAnswer) {
			axios
				.post('http://localhost:3000/answers/', {
					answer: userAnswer,
				})
				.then(() => {
					console.log(state);
				})
				.catch(console.log);
		},
	},
	modules: {},
});
