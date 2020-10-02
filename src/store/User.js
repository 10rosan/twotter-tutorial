export const UserModule = {
    namespace: true,

    state: {
        user: null
      },
    
      //mutations are functions that effects the STATE
      mutations: {
        SET_USER(state, user) {
          state.user = user;
        }
    
    
      },
    
      //Actions are functions that you call throughout your applications that call mutations
      actions: {
        setUser({ commit}, user) {
          commit('SET_USER', user);
        }
    
      }
}