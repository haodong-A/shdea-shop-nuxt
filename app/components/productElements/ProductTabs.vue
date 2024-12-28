<script setup lang="ts">
import ProductParamTable from '~/components/productElements/ProductParamTable.vue'

const { productSpec, param } = defineProps({
  productSpec: { type: Object, required: true },
  param: {
    type: String,
    default: '',
  },
})

const initialTab = productSpec.detailPage ? 0 : 1
const show = ref(initialTab)
const specParam = ref<any>({})

function cleanObject(obj: any) {
  const newObj: any = Array.isArray(obj) ? [] : {} // 确保保持原来的结构
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      const cleaned = cleanObject(obj[key]) // 递归清理子对象
      if (Object.keys(cleaned).length > 0) {
        newObj[key] = cleaned // 只有非空的子对象才保留
      }
    }
    else if (obj[key] !== undefined) {
      newObj[key] = obj[key] // 仅保留非 undefined 的属性
    }
  }
  return newObj
}
function buildObject(arr, param) {
  return arr.reduce((acc, item) => {
    // 如果有 children 属性，则递归处理
    if (item.children) {
      acc[item.key] = buildObject(item.children, param) // 递归构建子对象
    }
    else {
      acc[item.key] = param[item.key]// 如果没有 children，则直接赋值
    }
    return acc
  }, {})
}

watch(() => param, () => {
  if (param) {
    try {
      const parseField = JSON.parse(param)
      const parseParam = JSON.parse(productSpec.specParam)
      if (parseField.length && parseParam) {
        const build = buildObject(parseField, parseParam)
        specParam.value = cleanObject(build)
      }
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (e) {
      specParam.value = []
    }
  }
}, { immediate: true })
</script>

<template>
  <div>
    <nav class="tabs flex gap-8 border-b">
      <button v-if="productSpec.detailPage " type="button" :class="show === 0 ? 'active' : ''" @click.prevent="show = 0">
        Description
      </button>
      <button v-if="productSpec.specParam " type="button" :class="show === 1 ? 'active' : ''" @click.prevent="show = 1">
        Specification
      </button>
    </nav>
    <div class="tab-contents">
      <div v-if="show === 0 && productSpec.detailPage " class="mt-8 w-full flex justify-center font-light">
        <div class="w-full md:max-w-3/4 editor-content-view" v-html="productSpec.detailPage" />
      </div>
      <div v-if="show === 1">
        <template v-if="!!specParam">
          <div v-for="key in Object.keys(specParam)" :key class="mt-10">
            <div class="font-600">
              {{ key }}
            </div>
            <ProductParamTable :table="specParam[key]" class="mt-2" />
          </div>
        </template>
        <template v-else>
          NOT FOUND
        </template>
      </div>
    </div>
  </div>
</template>

<style src="~/style/editor.css" scoped />

<style lang="postcss" scoped>
.tabs button {
  @apply border-transparent border-b-2 text-lg pb-8;
  margin-bottom: -1px;
}

.tabs button.active {
  @apply border-primary text-primary;
}
</style>
