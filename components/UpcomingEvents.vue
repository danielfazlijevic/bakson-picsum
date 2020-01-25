<template>
  <section class="container mx-auto block hot-tickets px-4">
    <div class="section-header flex flex-wrap items-center">
      <h2 class="font-bold text-2xl">Upcoming Events</h2>
      <ChangeViewType :viewType="viewType" @changeViewType="changeViewType" />
      <v-icon
        @click.native="sortAsc = !sortAsc"
        class="ml-4 h-8 w-8 hover:text-pink-500 cursor-pointer"
        name="layers"
      />
    </div>

    <hr />
    <DynamicView :sort="sortAsc" :tickets="tickets" :viewType="viewType" />
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
      viewType: 'list',
      sortAsc: true
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
