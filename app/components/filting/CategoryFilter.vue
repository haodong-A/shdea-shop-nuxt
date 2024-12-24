<script setup lang="ts">
const props = defineProps({
  terms: {
    type: Array<Product.category>,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  openByDefault: {
    type: Boolean,
    default: true,
  },
  showCount: {
    type: Boolean,
    default: false,
  },
})

const selectedTerms = ref([])
const isOpen = ref(props.openByDefault)
</script>

<template>
  <div v-if="terms.length">
    <div class="mt-8 flex cursor-pointer items-center justify-between font-semibold" @click="isOpen = !isOpen">
      <span> {{ label || 'Categories' }} </span>
      <div i-hugeicons-arrow-down-01 class="transform" :class="isOpen ? 'rotate-180' : ''" />
    </div>
    <div v-show="isOpen" class="custom-scrollbar grid mr-1 mt-3 max-h-[240px] gap-1.5 overflow-auto">
      <el-tree
        :data="terms"
        show-checkbox
        default-expand-all
      />
    </div>
  </div>
</template>

<style scoped>

</style>
