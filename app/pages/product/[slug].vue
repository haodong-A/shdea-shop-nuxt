<script setup lang="ts">
import { isEmpty } from 'lodash-es'

const product = ref<Product.Info>({} as Product.Info)

const productSpec = ref<Product.Spec[]>([])

const currentSpec = ref()

const route = useRoute()

const isLoading = ref(false)

watch(() => route.query, () => {
  if (route.query.model) {
    const find = productSpec.value.find(item => item.specModel === route.query.model)
    if (find) {
      currentSpec.value = find
    }
  }
})

onMounted(async () => {
  await nextTick()
  const slug = route.params.slug
  product.value = await useFetchPost('/app/goods/info/info', { goodsId: slug })
  productSpec.value = product.value.spec || []
  currentSpec.value = {
    ...productSpec.value[0],
    otherImages: productSpec.value[0]?.otherImages ? JSON.parse(productSpec.value[0]?.otherImages) : [],
  }
})
</script>

<template>
  <main class="relative py-6 container xl:max-w-7xl">
    <div>
      <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
        <ProductImageGallery
          v-if="!isEmpty(product)"
          class="relative flex-1"
          :main-image="currentSpec?.mainImage"
          :other-images="currentSpec?.otherImages"
          :cover="product.cover"
        />
        <NuxtImg v-else src="/image/placeholder.jpg" alt="Placeholder" class="skeleton relative flex-1" />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
