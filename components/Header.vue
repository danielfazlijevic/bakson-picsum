<template>
  <header class="bg-black p-4 flex justify-center">
    <input
      v-model="search"
      class="max-w-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Search for an artist, event or venue"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped></style>
