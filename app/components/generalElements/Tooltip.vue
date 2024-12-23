<script setup lang="ts">
const { text } = defineProps({ text: { type: String, required: true } })
</script>

<template>
  <div class="group relative inline-block">
    <!-- Slot for the element the tooltip is attached to -->
    <slot />
    <div class="invisible absolute bottom-full left-1/2 transform whitespace-nowrap rounded bg-black bg-opacity-80 px-2 py-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:visible -translate-x-1/2 -translate-y-4 group-hover:opacity-100">
      {{ text }}
      <div class="absolute left-1/2 top-full h-0 w-0 transform border-8 border-transparent border-t-black border-t-opacity-80 -translate-x-1/2" />
    </div>
  </div>
</template>
