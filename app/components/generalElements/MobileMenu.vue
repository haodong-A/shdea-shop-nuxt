<script setup lang="ts">
const { toggleMobileMenu } = useHelpers()
</script>

<template>
  <div class="fixed bottom-0 left-0 top-0 z-50 max-w-lg w-11/12 flex flex-col overflow-x-hidden bg-white shadow-lg">
    <CloseIcon class="rounded-xl bg-white p-1.5 shadow-xl" @click="toggleMobileMenu(false)" />
    <div class="mt-8 text-center">
      Menu
    </div>
    <MainMenu class="grid m-4 gap-6 p-4 text-gray-500" />
    <div class="mt-auto p-8 text-center text-[10px] text-gray-400">
      <a href="/" title="SHDEA">shangdea-SHDEA from china</a>
    </div>
  </div>
</template>
