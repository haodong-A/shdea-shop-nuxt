<script setup lang="ts">
const { spec, title } = defineProps({
  spec: {
    type: Object as () => Product.Spec,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
const { wishlist, toggleWishlist, loading } = useWishlist()
const isWishlisted = computed(() => wishlist.value.find(item => item.sku === spec?.specModel))
</script>

<template>
  <button type="button" class="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400" :disabled="loading" @click="toggleWishlist({ title, mainImage: spec.mainImage, sku: spec.specModel }, !isWishlisted)">
    <div v-if="isWishlisted && !loading" class="text-red-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 4.529a6 6 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464" /></svg>
    </div>
    <div v-else-if="!isWishlisted && !loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 4.529a6 6 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a4 4 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454" /></svg>
    </div>
    <LoadingIcon v-else :size="16" />
    <span>{{ isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist' }}</span>

  </button>
</template>
