<template>
  <div class="hot-tickets-grid">
    <HotTicketCard
      v-for="ticket in tickets.slice(0, limit)"
      :key="ticket.download_url"
      :ticket="ticket"
    />
  </div>
</template>

<script>
import HotTicketCard from '@/components/HotTicketCard.vue'
import { HOT_TICKETS_LIMIT } from '@/static/config'

export default {
  components: {
    HotTicketCard
  },
  props: {
    tickets: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      limit: HOT_TICKETS_LIMIT
    }
  }
}
</script>

<style scoped>
.hot-tickets-grid {
  display: flex;
  flex-wrap: wrap;
}

@screen lg {
  .hot-tickets-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}
</style>
