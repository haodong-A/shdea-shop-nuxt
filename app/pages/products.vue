<script setup lang="ts">
const { allProducts } = useProducts()

useHead({
  title: `Products`,
  meta: [{ hid: 'description', name: 'description', content: 'Products' }],
})
</script>

<template>
  <div v-if="allProducts.length" flex items-start gap-16 container >
<!--    <Filters />-->
  </div>
  <NoProductsFound v-else>
    Could not fetch products from your store. Please check your configuration.
  </NoProductsFound>
</template>

<style scoped>

</style>
