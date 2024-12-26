<script setup lang="ts">
const route = useRoute()

const { products } = useProducts()
const page = ref(Number.parseInt(route.params.pageNumber as string) || 1)

const { productsPerPage } = useHelpers()

function test() {
  products.value = []
}
</script>

<template>
  <div v-if="products.length !== 0" class="text-sm font-light">
    <span>Showing  </span>
    <span class="font-normal">{{ `${(page - 1) * productsPerPage + 1} ` }}</span>
    <span>to </span>
    <span class="font-normal">{{ `${Math.min(page * productsPerPage, products.length)} ` }}</span>
    (<span>of</span> <span class="font-normal" @click="test">{{ products?.length }}</span>)
  </div>
</template>
