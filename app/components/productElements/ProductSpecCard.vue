<script setup lang="ts">
import { groupBy } from 'lodash-es'

const props = defineProps({
  spec: {
    type: Array,
    required: true,
    default: [],
  },
  active: {
    type: String,
    required: true,
  },
})

const specMap = ref<any>({})

watch(() => props.spec, () => {
  if (props.spec.length) {
    specMap.value = groupBy(props.spec, (item: any) => item?.specType)
  }
}, { immediate: true })
</script>

<template>
  <div class="mb-8 mt-4 flex">
    <div v-for="item in Object.keys(specMap)" :key="item">
      <div class="mb-3">
        {{ item }}
      </div>
      <div v-for="(it, index) in specMap[item]" :key="it.specModel || index" class="cursor-pointer rounded-2 bg-white p-2" :title="it.specModel" :class="active === it.specModel ? '!bg-primary color-white' : ''">
        <NuxtImg

          :width="20"
          :height="20"
          :src="it.mainImage"
          alt="shdea"
          placeholder
          placeholder-class="blur-xl"
          loading="lazy"
        />
        <span class="ml-2"> {{ it.specName }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
