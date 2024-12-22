<script setup lang="ts">
const { viewer, avatar, isPending, logoutUser } = useAuth()

const showLoader = ref(false)

const route = useRoute()

const activeTab = computed(() => route.query.tab || 'my-details')

useSeoMeta({
  title: 'My Account',
})
</script>

<template>
  <div class="min-h-[600px]" container>
    <div v-if="showLoader" class="min-h-[500px]" flex flex-col>
      <LoadingIcon class="m-auto" />
    </div>
    <template v-else>
      <LazyLoginAndRegister v-if="!viewer" />
      <div v-else class="mb-24 w-full flex flex-col items-start justify-between lg:flex-row lg:gap-12">
        <div class="top-16 mt-2 w-full lg:sticky lg:max-w-[260px]">
          <section class="my-8 w-full flex items-start justify-center gap-4">
            <img v-if="avatar" :src="avatar" class="aspect-square border border-white rounded-full" alt="user-image" width="48" height="48">
            <div class="w-full flex-1 overflow-hidden text-ellipsis text-balance leading-tight">
              <div class="text-lg font-semibold">
                Welcome, {{ viewer?.firstname }}
              </div>
              <span v-if="viewer?.email" class="text-gray-400 font-light" :title="viewer?.email">{{ viewer?.email }}</span>
            </div>
            <button class="flex flex-col items-center rounded-lg p-2 px-4 text-gray-700 lg:hidden hover:bg-white hover:text-red-700" @click="logoutUser">
              <LoadingIcon v-if="isPending" size="22" />
              <div v-else i-hugeicons-logout-04 size="22" />
              <small>Logout</small>
            </button>
          </section>
          <hr class="my-8">
          <nav class="my-8 min-w-[240px] w-full flex flex-wrap items-start gap-1.5 text-gray-700 lg:grid lg:w-auto">
            <NuxtLink to="/my-account?tab=my-details" class="flex items-center gap-4 p-2 px-4" :class="{ active: activeTab === 'my-details' }">
              <div i-hugeicons-information-circle size="22" />
              My Details
            </NuxtLink>

            <NuxtLink to="/my-account?tab=wishlist" class="flex items-center gap-4 p-2 px-4" :class="{ active: activeTab === 'wishlist' }">
              <div i-octicon-heart-fill-16 size="22" />
              Wishlist
            </NuxtLink>
          </nav>
          <template class="hidden lg:block">
            <hr class="my-8">
            <button class="w-full flex items-center gap-4 rounded-lg p-2 px-4 text-gray-700 hover:bg-white hover:text-red-700" @click="logoutUser">
              <LoadingIcon v-if="isPending" size="22" />
              <div v-else i-hugeicons-logout-04 size="22" />
              Logout
            </button>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
