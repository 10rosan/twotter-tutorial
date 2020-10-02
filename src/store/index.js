import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  state: {},

  //mutations are functions that effects the STATE
  mutations: {},

  //Actions are functions that you call throughout your applications that call mutations
  actions: {},

  modules: {
    User: UserModule

  }
})
