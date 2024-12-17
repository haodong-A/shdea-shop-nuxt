<script setup lang="ts">
import useScrollBody from '~/composables/scroll'

const arr = ['Home', 'category', 'product']
const { x, y, isScrollTop, arrivedState } = useScrollBody()
const hiddenRef = computed(() => {
  if (arrivedState.top) {
    return ''
  }
  if (!isScrollTop.value && y.value > 500) {
    return 'header-hidden'
  }
  return 'bg-white dark:bg-gray-900'
})
</script>

<template>
  <div py-4 fixed top-0 w-full select-none transition-all transition-duration-700 dark:bg-gray-900 dark:bg-op-25 :class="hiddenRef" z-9999>
    <nav h-full w-full flex items-center px-10>
      <el-row no-gutters w-full>
        <el-col :span="24" :sm="8" class="items-center justify-center !flex sm:justify-start">
          <img src="/logo.png" alt="logo" class="sm:h-11" h-7>
        </el-col>
        <el-col :span="8" mx-auto w-full :sm="8">
          <div mt-3 h-full w-full flex items-center justify-center sm:mt-0>
            <div v-for="(item, index) in arr" :key="index" mx-6>
              {{ item }}
            </div>
          </div>
        </el-col>
        <el-col :span="8" :sm="8">
          <div class="h-full flex items-center justify-end">
            <DarkToggle />
          </div>
        </el-col>
      </el-row>
    </nav>
  </div>
</template>

<style scoped>
.header-hidden {
  top: -200px;
}
</style>
