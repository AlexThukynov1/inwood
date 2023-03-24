import { createStore } from 'vuex'

const store = createStore({
    state: {
        isMenuVisible: false
    },
    actions: {
        changeVisible({commit}) {
            commit('menuVisibleTogle')
        }
    },
    mutations: {
     menuVisibleTogle (state)  {
            state.isMenuVisible = !state.isMenuVisible
          }
    }
})

export default store