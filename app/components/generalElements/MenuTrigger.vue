<script setup lang="ts">
const { toggleMobileMenu } = useHelpers()
</script>

<template>
  <div>
    <div i-hugeicons-menu-01 mr-4 h-8 w-8 cursor-pointer @click="toggleMobileMenu()">
      />
    </div>
  </div>
</template>

<style scoped>

</style>
