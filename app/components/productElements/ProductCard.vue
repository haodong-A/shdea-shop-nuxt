<script setup lang="ts">
const props = defineProps({
  node: {
    type: Object as () => Product.simpleInfo,
    required: true,
  },
  index: {
    type: Number,
    default: 1,
  },
})

const imgWidth = 280
const imgHeight = Math.round(imgWidth * 1.125)
</script>

<template>
  <div group relative>
    <NuxtLink :to="`/product/${node.goodsId}`" :title="node.title">
      <NuxtImg
        v-if="node.cover"
        :width="imgWidth"
        :height="imgHeight"
        :src="node.cover"
        alt="product cover"
        :loading="index <= 3 ? 'eager' : 'lazy'"

        class="aspect-9/8 w-full rounded-lg object-cover object-top"
      />
    </NuxtLink>
    <div class="p-2">
      <NuxtLink :to="`/product/${node.goodsId}`" :title="node.title">
        <h2 class="mb-2 overflow-hidden text-ellipsis group-hover:text-primary">
          {{ node.title }}
        </h2>
        <p class="text-3.5 font-light leading-tight opacity-50 group-hover:text-primary" title="SKU">
          # {{ node.goodsId }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
