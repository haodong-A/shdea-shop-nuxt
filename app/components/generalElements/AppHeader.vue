<script setup lang="ts">
const { isShowingSearch } = useSearching()
</script>

<template>
  <header sticky top-0 z-40 bg-white shadow-light-500 shadow-sm>
    <div flex items-center justify-between py-4 container>
      <div flex items-center>
        <MenuTrigger lg:hidden />
        <Logo md:w-[160px] />
      </div>
      <MainMenu hidden items-center gap-6 text-sm text-gray-500 lg:flex lg:px-4 />
      <div ml-auto flex flex-1 items-center justify-end gap-4 md:w-[160px] md:gap-6>
        <ProductSearch class="hidden max-w-[320px] w-[60%] sm:inline-flex" />
        <SearchTrigger />
        <div class="flex items-center gap-4">
          <SignInLink />
        </div>
      </div>
    </div>
    <Transition name="scale-y" mode="out-in">
      <div v-if="isShowingSearch" class="mb-3 container -mt-1 sm:hidden">
        <ProductSearch class="w-full flex" />
      </div>
    </Transition>
  </header>
</template>

<style scoped>

</style>
