<script setup lang="ts">
const { toggleSearch } = useSearching()
</script>

<template>
  <div class="relative inline-flex cursor-pointer sm:hidden" title="Cart">
    <div i-hugeicons-search-02 size="6" class="mr-1 md:mr-0" @click="toggleSearch" />
  </div>
</template>
