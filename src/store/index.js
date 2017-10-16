import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' // 正式上线后要把这个删除，因为消耗性能

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug, // 正式上线后要把这个删除，因为消耗性能
  plugins: debug ? [createLogger()] : [] // 如果debug 为true就有createlogger打印
})

