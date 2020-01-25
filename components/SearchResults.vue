<template>
  <div class="search-results shadow-xl border border-gray-400">
    <EventsList v-if="searchMatches.length > 0" :tickets="searchMatches" />
    <div v-else>No results ...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    EventsList: () => import('@/components/EventsList')
  },
  props: {
    search: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({ tickets: 'events/getTickets' }),
    searchMatches() {
      // generate regex based on user input
      const regex = new RegExp(this.search, 'ig')
      return this.tickets.filter((ticket) => {
        // return true if ticket author contains search value
        return ticket.author.search(regex) > -1
      })
    }
  }
}
</script>

<style scoped>
.search-results {
  position: absolute;
  top: 70px;
  z-index: 10;
  padding: 15px;
  background: rgba(255, 255, 255, 0.98);
  width: 80%;
}
</style>
