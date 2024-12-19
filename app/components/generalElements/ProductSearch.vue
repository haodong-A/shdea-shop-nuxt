<script setup lang="ts">
const search = ref()

function reset() {

}
</script>

<template>
  <form relative flex-1 items-center rounded-md shadow-sm class="-space-x-px">
    <div i-hugeicons-search-01 pointer-events-none absolute left-2 z-10 opacity-50 />
    <input
      id="product-search-input"
      v-model="search"
      type="text"
      placeholder="Please Input"
      class="z-0 w-full inline-flex items-center border border-gray-300 rounded-md bg-gray-50 p-2 pl-10 text-sm text-gray-500 shadow-gray-200 shadow-inner outline-none"
    >
    <span
      v-if="search"
      class="bg-primary text-primary absolute right-2 z-10 flex cursor-pointer items-center gap-1 rounded bg-opacity-10 px-2 py-1 text-xs hover:bg-opacity-20"
      @click="reset"
    >
      <span>clear</span>
      <div i-hugeicons-delete-02 />
    </span>
  </form>
</template>

<style scoped>

</style>
