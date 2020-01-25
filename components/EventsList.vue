<template>
  <div class="hot-tickets-grid">
    <EventListItem
      v-for="ticket in tickets.slice(start_index, start_index + limit)"
      :key="ticket.download_url"
      :ticket="ticket"
    />
  </div>
</template>

<script>
import EventListItem from '@/components/EventListItem.vue'
import { HOT_TICKETS_LIMIT, UPCOMING_EVENTS_LIMIT } from '@/static/config'

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
      start_index: HOT_TICKETS_LIMIT,
      limit: UPCOMING_EVENTS_LIMIT
    }
  }
}
</script>

<style scoped></style>
