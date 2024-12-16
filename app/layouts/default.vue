<script setup lang="ts">
import Lenis from 'lenis'

onMounted(() => {
  nextTick(() => {
    // eslint-disable-next-line no-new
    new Lenis({
      autoRaf: true,
    })
  })
})
</script>

<template>
  <div>
    <Header />
    <main mx-auto w-full>
      <slot />
      <br>
      s
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      s
    </main>
    <Footer w-full />
  </div>
</template>
