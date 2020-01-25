<template>
  <div
    @click="changeViewType"
    class="inline-block ml-4 h-8 w-8 cursor-pointer "
  >
    <v-icon :name="viewType" class="hover:text-pink-500" />
  </div>
</template>

<script>
export default {
  props: {
    viewType: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeViewType() {
      console.log('test')
      const newType = this.viewType === 'grid' ? 'list' : 'grid'
      this.$emit('changeViewType', newType)
    }
  }
}
</script>

<style scoped></style>
