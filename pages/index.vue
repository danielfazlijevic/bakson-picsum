<template>
  <div>
    <Header />
    <HotTickets class="mt-16" />
    <UpcomingEvents class="mt-8 pb-16" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HotTickets from '@/components/HotTickets.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
    HotTickets,
    UpcomingEvents
  },
  created() {
    // Fill store with API data
    this.fetchEvents()
  },
  methods: {
    ...mapActions({ fetchEvents: 'events/fetchTickets' })
  }
}
</script>

<style></style>
