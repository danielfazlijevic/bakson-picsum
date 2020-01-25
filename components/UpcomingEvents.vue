<template>
  <section class="container mx-auto block hot-tickets px-4">
    <h2 class="font-bold text-2xl">Upcoming Events</h2>
    <hr />
    <EventsList v-if="tickets" :tickets="tickets" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import EventsList from '@/components/EventsList.vue'

export default {
  components: {
    EventsList
  },
  computed: {
    ...mapGetters({ tickets: 'events/getTickets' })
  }
}
</script>

<style scoped></style>
