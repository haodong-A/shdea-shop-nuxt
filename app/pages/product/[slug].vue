<script setup lang="ts">
import { isEmpty } from 'lodash-es'
import RequestQuote from "~/components/productElements/RequestQuote.vue";

const product = ref<Product.Info>({} as Product.Info)

const productSpec = ref<Product.Spec[]>([])

const currentSpec = ref<any>()

const route = useRoute()

const loading = ref<boolean>(false)

watch(() => route.query, () => {
  if (route.query.sku) {
    const find = productSpec.value.find(item => item.specModel === route.query.sku)
    if (find) {
      loading.value = true
      currentSpec.value = find
      setTimeout(() => {
        loading.value = false
      }, 500)
    }
  }
})

function onChange(value: any) {
  currentSpec.value = productSpec.value.find((item: any) => item.specModel === value)
}

onMounted(async () => {
  const slug = route.params.slug
  product.value = await useFetchPost('/app/goods/info/info', { goodsId: slug })
  productSpec.value = product.value.spec || []

  if (route.query.sku) {
    const find = productSpec.value.find((item: any) => item.specModel === route.query.sku)
    if (find) {
      currentSpec.value = find
    }
  }
  else {
    currentSpec.value = productSpec.value[0]
  }
})

function parse(value: string, def = []): object {
  try {
    return JSON.parse(value)
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (e) {
    return def
  }
}

useSeoMeta({
  title: product.value.title || 'Product',
})
</script>

<template>
  <main class="relative py-6 container xl:max-w-7xl">
    <div v-if="!isEmpty(product) && !loading">
      <SEOHead :info="product" />
      <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
        <div v-if="!isEmpty(product)" class="flex-1">
          <ProductImageGallery
            :main-image="currentSpec?.mainImage"
            :other-images="currentSpec?.otherImages"
            :cover="product.cover"
          />
        </div>

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
            <div v-if="currentSpec?.haveSample" class="flex items-center gap-2">
              <span class="text-gray-400">Availability: </span>
              <span class="text-green-600"> Provide Sample</span>
            </div>
            <div v-if="currentSpec?.specModel" class="flex items-center gap-2">
              <span class="text-gray-400">SKU: </span>
              <span>{{ currentSpec.specModel || 'N/A' }}</span>
            </div>
          </div>
          <div class="mb-8 font-light line-height-loose prose" v-html="product?.description || '' " />
          <template v-if="currentSpec?.moqPrices">
            <table class="mb-8 mt-4">
              <tbody>
                <tr>
                  <th>Moq (pcs)</th>
                  <th>Price (USD)</th>
                </tr>
                <tr v-for="(item, index) in parse(currentSpec?.moqPrices)" :key="index">
                  <td>{{ item?.moq?.min || 0 }} ~ {{ item?.moq?.max || 0 }}</td>
                  <td>{{ item?.price }}</td>
                </tr>
              </tbody>
              <colgroup>
                <col>
                <col>
                <col>
              </colgroup>
            </table>
          </template>
          <hr>
          <div v-if="productSpec.length" class="mb-8 mt-4">
            <ProductSpecCard :spec="productSpec" :active="currentSpec.specModel" @change="onChange" />
          </div>

          <hr>

          <div
            class="fixed bottom-0 left-0 z-10 mt-12 w-full flex items-center gap-4 bg-white bg-opacity-90 p-4 md:static md:bg-transparent md:p-0"
          >
            <RequestQuote class="w-full flex-1" :disabled="false" />
          </div>
          <div class="flex flex-wrap gap-4">
            <WishlistButton :spec="currentSpec" :title="product.title" />
            <ShareButton :product />
          </div>
        </div>
      </div>
      <div v-if="currentSpec?.detailPage || currentSpec?.specParam" class="my-32">
        <ProductTabs :product-spec="currentSpec" :param="product.param" />
      </div>
    </div>
    <div v-else class="h-[calc(100vh-72px)] flex items-center justify-center">
      <LoadingIcon />
    </div>
  </main>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

table caption {
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
}

th,
td {
  border: 1px solid #cdcccc;
  text-align: center;
  padding: 20px 0;
}

table thead tr {
  background-color: #008c8c;
  color: #fff;
}

table tbody tr:nth-child(odd) {
  background-color: #eee;
}

table tfoot tr td {
  text-align: right;
  padding-right: 20px;
}
</style>
