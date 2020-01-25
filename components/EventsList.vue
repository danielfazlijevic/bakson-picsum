<template>
  <div class="hot-tickets-grid">
    <EventListItem
      v-for="ticket in tickets.slice(0, limit)"
      :key="ticket.download_url"
      :ticket="ticket"
    />
  </div>
</template>

<script>
import EventListItem from '@/components/EventListItem.vue'
import { UPCOMING_EVENTS_LIMIT } from '@/static/config'

export default {
  components: {
    EventListItem
  },
  props: {
    tickets: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      limit: UPCOMING_EVENTS_LIMIT
    }
  }
}
</script>

<style scoped></style>
