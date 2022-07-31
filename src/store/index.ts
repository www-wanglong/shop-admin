import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol('store')

export function useStore () {
  return baseUseStore(key)
}

// Create a new store instance.
export const store = createStore<State>({
  state () {
    return {
      count: 1
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
