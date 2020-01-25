<template>
  <div>
    <div v-if="tickets">
      <transition name="fade">
        <EventsList v-if="viewType === 'list' && tickets" :tickets="tickets" />
        <HotTicketsGrid
          v-if="viewType === 'grid' && tickets"
          :tickets="tickets"
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
    }
  }
}
</script>

<style scoped></style>
