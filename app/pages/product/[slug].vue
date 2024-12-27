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
  currentSpec.value = productSpec.value[0]
})
</script>

<template>
  <main class="relative py-6 container xl:max-w-7xl">
    <div v-if="!!product">
      <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
        <ProductImageGallery
          v-if="!isEmpty(product)"
          class="relative flex-1"
          :main-image="currentSpec?.mainImage"
          :other-images="currentSpec?.otherImages"
          :cover="product.cover"
        />
        <NuxtImg v-else src="/image/placeholder.jpg" alt="Placeholder" class="skeleton relative flex-1" />
        <div class="my-8 gap-2 text-sm empty:hidden">
          <div class="mb-4 flex justify-start">
            <div class="flex-1">
              <h1 class="font-sesmibold mb-2 flex flex-wrap items-center gap-2 text-2xl">
                {{ product.title }}
              </h1>
            </div>
          </div>
          <div class="grid my-8 gap-2 text-sm empty:hidden">
            <div v-if="currentSpec?.specModel" class="flex items-center gap-2">
              <span class="text-gray-400">SKU: </span>
              <span>{{ currentSpec.specModel || 'N/A' }}</span>
            </div>
          </div>
          <div class="mb-8 font-light line-height-loose prose" v-html="product?.description || '' " />
          <hr>
          <table>

          </table>
          <hr>
          <div v-if="productSpec.length" class="mb-8 mt-4">
            <ProductSpecCard :spec="productSpec" :active="currentSpec.specModel" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
