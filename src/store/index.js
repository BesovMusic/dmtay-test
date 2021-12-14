import { createStore } from 'vuex';
import axios from 'axios';

// колличество вопросов в ответе сервера
const key = 5;

export default createStore({
	state: {
		questions: [],
	},
	mutations: {
		setQuestionsToState: (state, questions) => {
			state.questions = questions;
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
				.catch(console.log);
		},
	},
	modules: {},
});
