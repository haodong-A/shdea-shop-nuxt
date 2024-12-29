<script setup>
const props = defineProps({
  disabled: { type: Boolean, default: false },
})
const isLoading = ref(false)
</script>

<template>
  <button
    type="submit"
    class="min-w-[150px] flex items-center justify-center gap-4 rounded-lg bg-gray-800 p-2.5 text-center text-white font-bold focus:outline-none"
    :class="{ disabled }"
    :disabled="disabled"
    @click="isLoading = true"
  >
    <span> Request for quote </span>
    <LoadingIcon v-if="isLoading" stroke="4" size="12" color="#fff" />
  </button>
</template>

<style lang="postcss" scoped>
button {
  outline: none !important;
  transition: all 150ms ease-in;
}

button.disabled {
  @apply cursor-not-allowed bg-gray-400;
}
</style>
