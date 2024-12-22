<script setup lang="ts">
const { siteName } = useAppConfig()

useHead({
  titleTemplate: `%s - ${siteName}`,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
#__nuxt {
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
