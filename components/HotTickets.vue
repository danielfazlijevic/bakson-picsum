<template>
  <section class="container mx-auto block hot-tickets px-4">
    <h2 class="font-bold text-2xl">Hot Tickets</h2>
    <hr />
    <HotTicketsGrid v-if="tickets" :tickets="tickets" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import HotTicketsGrid from '@/components/HotTicketsGrid.vue'

export default {
  components: {
    HotTicketsGrid
  },
  computed: {
    ...mapGetters({ tickets: 'events/getTickets' })
  }
}
</script>

<style scoped></style>
