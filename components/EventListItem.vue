<template>
  <div class="list-item flex flex-wrap my-3">
    <div class="w-full flex flex-wrap lg:w-1/2">
      <img
        :src="ticket.download_url"
        :alt="`Upcoming event by ${ticket.author}`"
        class="w-full lg:w-1/3 object-cover"
      />
      <div class="info flex">
        <div class="date w-1/6 p-3 font-semibold text-center text-gray-700">
          <p class="month uppercase">{{ month }}</p>
          <p class="day">{{ day }}</p>
        </div>
        <div class="w-5/6 p-3">
          <p class="text-pink-500 font-semibold time">
            {{ dayName }} - {{ hour }}:{{ minute }}
          </p>
          <p class="font-semibold">{{ ticket.author }}</p>
          <p class="text-lg">
            Width: {{ ticket.width }}, Height: {{ ticket.height }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex justify-end items-center p-3">
      <a
        :href="ticket.url"
        class="bg-pink-500 text-white hover:bg-pink-600 p-3 flex items-center"
        target="_blank"
        ><span>Find pics</span> <v-icon name="chevron-right" class="h-6 w-6"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      month: '',
      day: '',
      dayName: '',
      hour: '',
      minute: ''
    }
  },
  created() {
    // Generate random dummy date values for each component
    // we use en-GB as region because of the 24hr time format and DD-MM-YYYY date format
    const randomDate = this.randomDate()
    this.month = randomDate.toLocaleString('en-GB', { month: 'short' })
    this.day = randomDate.toLocaleString('en-GB', { day: 'numeric' })
    this.hour = randomDate.toLocaleString('en-GB', { hour: '2-digit' })
    this.minute = randomDate.toLocaleString('en-GB', { minute: '2-digit' })
    this.dayName = randomDate.toLocaleString('en-GB', { weekday: 'short' })
  },
  methods: {
    // get random date in period
    // set default dates for start and end
    randomDate(start = new Date(), end = new Date(2020, 12, 12)) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
    }
  }
}
</script>

<style scoped>
@screen lg {
  .list-item {
    height: 140px;
  }

  img {
    height: 140px;
  }
}
</style>
