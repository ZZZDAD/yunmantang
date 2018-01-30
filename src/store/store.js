import Vue from 'vue'
import Vuex from 'vuex'
import { postRelease, getUser } from '@/api/article'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 1
	},
	getters: {

	},
	mutations: {
		GET_USER (state, data) {
			console.log(data)
		},
		release (state, item) {
			console.log(item)

		}
	},
	actions: {
		GetUser ({ commit }) {
			return new Pormise((resolve, reject) => {
				getUser().then(response => {
					const data = response.data
					commit('GET_USER', data)
					resolve(response.data)
				}).catch(error => {
					reject(error)
				})
			})
		}
	}
})