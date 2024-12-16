<script setup lang="ts">
const arr = ['Home', 'category', 'product']
</script>

<template>
  <div border class="py-4">
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
            s
          </div>
        </el-col>
      </el-row>
    </nav>
  </div>
</template>

<style scoped>

</style>
