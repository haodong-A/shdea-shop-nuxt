<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <el-button class="!outline-none" @click="toggleDark" circle type="primary">
    <div class="i-carbon-sun dark:i-carbon-moon" />
  </el-button>
</template>
