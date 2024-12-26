<script setup lang="ts">
const { allProducts, updateProductList, isPending } = useProducts()

const route = useRoute()

useHead({
  title: `Products`,
  meta: [{ hid: 'description', name: 'description', content: 'Products' }],
})
watch(
  () => route.query,
  () => {
    if (route.name !== 'products')
      return
    updateProductList()
  },
)
onMounted(() => {
  updateProductList()
})
</script>

<template>
  <div v-if="allProducts.length" flex items-start gap-16 container>
    <!--    <Filters /> -->
    <div v-loading="isPending" w-full>
      <div class="mt-8 w-full flex items-center justify-between gap-4 md:gap-8">
        <ProductResultCount />
      </div>
      <ProductGrid />
    </div>
  </div>
  <NoProductsFound v-else>
    Could not fetch products from your store. Please check your configuration.
  </NoProductsFound>
</template>

<style scoped>

</style>
