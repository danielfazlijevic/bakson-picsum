<template>
  <section class="container mx-auto block hot-tickets px-4">
    <div class="section-header flex flex-wrap items-center">
      <h2 class="font-bold text-2xl">Upcoming Events</h2>
      <ChangeViewType :viewType="viewType" @changeViewType="changeViewType" />
    </div>

    <hr />
    <DynamicView :tickets="tickets" :viewType="viewType" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import ChangeViewType from '@/components/ChangeViewType.vue'
import DynamicView from '@/components/DynamicView.vue'
export default {
  components: {
    ChangeViewType,
    DynamicView
  },
  data() {
    return {
      viewType: 'list'
    }
  },
  computed: {
    ...mapGetters({ tickets: 'events/getTickets' })
  },
  methods: {
    changeViewType(value) {
      this.viewType = value
    }
  }
}
</script>

<style scoped></style>
