<script setup lang="ts">
const { allProducts } = useProducts()
function clearAll() {

}
</script>

<template>
  <div class="my-16 w-full lg:my-24">
    <div class="w-full flex flex-col items-center justify-center text-center text-pretty">
      <div i-hugeicons-sad-01 size="50" class="mb-10 opacity-25" />
      <h2 class="text-2xl font-bold">
        No products found
      </h2>
      <p class="mt-4 max-w-md">
        <slot>Try adjusting your search or filter to find what you're looking for.</slot>
      </p>
      <div>
        <button
          v-if="allProducts.length"
          class="mt-8 inline-block w-full rounded-lg bg-primary p-2 px-3 text-center text-sm text-white font-bold hover:bg-primary-dark"
          title="Clear all filters and search"
          aria-label="Clear all filters and search"
          @click="clearAll"
        >
          Clear all filters and search
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
