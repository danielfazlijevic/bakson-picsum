import { API_URL } from '@/static/config'

export const state = () => ({
  tickets: []
})

export const mutations = {
  set(state, tickets) {
    state.tickets = tickets
  }
}

export const actions = {
  async fetchTickets({ commit }) {
    // fetch tickets from URL
    const tickets = await this.$axios.$get(API_URL)
    commit('set', tickets)
  }
}

export const getters = {
  getTickets(state) {
    return state.tickets
  }
}
