<template>
  <div>
    <HotTickets />
    <UpcomingEvents class="mt-8 pb-16" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HotTickets from '@/components/HotTickets.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'

export default {
  components: {
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
