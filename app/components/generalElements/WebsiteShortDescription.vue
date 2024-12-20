<script setup lang="ts">
const { description } = useAppConfig()
</script>

<template>
  <p mt-4 text-sm text-gray-700 xl:max-w-md>
    {{ description }}
  </p>
</template>
