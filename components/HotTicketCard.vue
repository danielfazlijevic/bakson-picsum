<template>
  <a
    :href="ticket.url"
    target="_blank"
    class="ticket-card block w-full shadow-xl mt-4 lg:mt-0 border-2 border-gray-300 hover:border-gray-500"
  >
    <div class="image-wrapper w-full relative">
      <img :src="ticket.download_url" :alt="`Image by ${ticket.author}`" />
      <p
        class="author absolute block w-full bottom-0 p-4 font-semibold text-white"
      >
        {{ ticket.author }}
      </p>
    </div>
    <div class="p-4 font-semibold">
      <p class="mb-0">Height: {{ ticket.height }}</p>
      <p class="mt-0">Width: {{ ticket.width }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.author {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
</style>
