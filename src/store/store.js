import Vue from 'vue'
import Vuex from 'vuex'
import fetch from '@/utils/fetch'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 1
	},
	getters: {

	},
	mutations: {
		release(state, item){
			console.log(item)
			fetch({
				url: '/release',
				method: 'POST',
				params: item
			})
		}
	},
	actions: {

	}
})