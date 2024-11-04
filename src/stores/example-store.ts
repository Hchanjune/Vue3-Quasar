import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    tempCounter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment () {
      this.counter++
      this.tempCounter++
    }
  },
  persist: {
    storage: sessionStorage,
    pick: ['counter']
  }
})
