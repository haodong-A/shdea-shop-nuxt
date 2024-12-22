<script setup lang="ts">
const inputPlaceholder = computed(() => {
  return {
    email: 'johndoe@email.com',
    username: '',
    password: '********',
  }
})

const formView = ref('Login')
const router = useRouter()
const formTitle = computed(() => {
  if (formView.value === 'login') {
    return 'Login In to your account'
  }
  else if (formView.value === 'register') {
    return 'Sign up'
  }
  else if (formView.value === 'forgotPassword') {
    return 'Forgot password?'
  }
  else {
    return 'Login In to your account'
  }
})

function navigate(view: string) {
  formView.value = view
  if (view === 'forgotPassword') {
    router.push({ query: { action: 'forgotPassword' } })
  }
  else if (view === 'register') {
    router.push({ query: { action: 'register' } })
  }
  else {
    router.push({ query: {} })
  }
}
</script>

<template>
  <div class="mx-auto my-16 max-w-lg min-h-[600px] lg:my-24">
    <div class="flex flex-col items-center">
      <Logo />
      <h1 class="text-xl font-semibold lg:text-3xl mt-5">
        {{ formTitle }}
      </h1>
      <div v-if="formView === 'login'" class="my-2 text-center">
        Don't have an account?
        <a class="text-primary cursor-pointer font-semibold" @click="navigate('register')"> Sign up </a>.
      </div>
      <div v-if="formView === 'register'" class="my-2 text-center">
        Already have an account?
        <a class="text-primary cursor-pointer font-semibold" @click="navigate('login')">
          Please log in
        </a>
        .
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
