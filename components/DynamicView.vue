<template>
  <div>
    <div v-if="tickets">
      <transition name="fade">
        <EventsList
          v-if="viewType === 'list' && tickets"
          :tickets="selectedTickets"
        />
        <HotTicketsGrid
          v-if="viewType === 'grid' && tickets"
          :tickets="selectedTickets"
        />
      </transition>
    </div>
    <div v-else>Nothing found!</div>
  </div>
</template>

<script>
export default {
  components: {
    HotTicketsGrid: () => import('@/components/HotTicketsGrid'),
    EventsList: () => import('@/components/EventsList')
  },
  props: {
    tickets: {
      type: Array,
      default: null
    },
    viewType: {
      type: String,
      default: ''
    },
    sort: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      sorting: false,
      sortedTickets: []
    }
  },
  computed: {
    selectedTickets() {
      return this.sorting ? this.sortedTickets : this.tickets
    }
  },
  watch: {
    sort(newValue, oldValue) {
      const toSort = [...this.tickets]
      this.sortedTickets = toSort.sort((a, b) => {
        return this.sortAsc
          ? this.sumPixels(a) - this.sumPixels(b)
          : this.sumPixels(b) - this.sumPixels(a)
      })
      this.sorting = true
      this.sortAsc = !this.sortAsc
    }
  },
  methods: {
    sumPixels(item) {
      return item.width + item.height
    }
  }
}
</script>

<style scoped></style>
