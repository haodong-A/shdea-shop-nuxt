<script setup lang="ts">
const inputPlaceholder = computed(() => {
  return {
    email: 'example@email.com',
    username: 'Please Enter Username',
    password: 'Please Enter Password',
  }
})
const userInfo = ref({ email: '', password: '', username: '' })
const formView = ref('login')
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
const emailLabel = computed(() => (formView.value === 'register' ? 'Email' : 'Email or Username'))
const usernameLabel = computed(() => (formView.value === 'login' ? 'Email or Username' : 'UserName'))
const message = ref('')
const errorMessage = ref('')

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

const { isPending } = useAuth()

const buttonText = computed(() => {
  if (formView.value === 'login') {
    return 'Log In'
  }
  else if (formView.value === 'register') {
    return 'Register'
  }
  else if (formView.value === 'forgotPassword') {
    return 'Send Password Reset Email'
  }
  return 'Log In'
})
function handleFormSubmit(userInfo: any) {
  console.log(userInfo)
}
</script>

<template>
  <div class="mx-auto my-16 max-w-lg min-h-[600px] select-none lg:my-24">
    <div class="flex flex-col items-center">
      <Logo />
      <h1 class="mt-5 text-xl font-semibold lg:text-3xl">
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
    <form class="mt-6" @submit.prevent="handleFormSubmit(userInfo)">
      <label v-if="formView === 'register' || formView === 'forgotPassword'" for="email">
        {{ emailLabel }}
        <span class="text-red-500">*</span> <br>
        <input id="email" v-model="userInfo.email" :placeholder="inputPlaceholder.email" autocomplete="email" type="text" required>
      </label>
      <p v-if="formView === 'forgotPassword'" class="text-sm text-gray-500">
        Please enter your email address or username and we will send you a link to reset your password.
      </p>
      <div v-if="formView !== 'forgotPassword'">
        <label for="username">
          {{ usernameLabel }}
          <span class="text-red-500">*</span> <br>
          <input id="username" v-model="userInfo.username" :placeholder="inputPlaceholder.username" autocomplete="username" type="text" required>
        </label>
        <label for="password">
          Password <span class="text-red-500">*</span> <br>
          <PasswordInput
            id="password"
            v-model="userInfo.password"
            class-name="border rounded-lg w-full p-3 px-4 bg-white"
            :placeholder="inputPlaceholder.password"
            :autocomplete="formView === 'login' ? 'current-password' : 'new-password'"
            :required="true"
          />
        </label>
      </div>
      <Transition name="scale-y" mode="out-in">
        <div v-if="message" class="my-4 text-sm text-green-500" v-html="message" />
      </Transition>
      <Transition name="scale-y" mode="out-in">
        <div v-if="errorMessage" class="my-4 text-sm text-red-500" v-html="errorMessage" />
      </Transition>
      <button class="mt-4 flex items-center justify-center gap-4 text-lg">
        <LoadingIcon v-if="isPending" stroke="4" size="16" color="#fff" />
        <span>{{ buttonText }}</span>
      </button>
    </form>
    <div v-if="formView === 'login'" class="my-8 cursor-pointer text-center" @click="navigate('forgotPassword')">
      Forgot password?
    </div>
    <div v-if="formView === 'forgotPassword'" class="my-8 cursor-pointer text-center" @click="navigate('login')">
      Back to Login
    </div>
  </div>
</template>

<style lang="postcss" scoped>
input,
button {
  @apply border rounded-lg mb-4 w-full p-3 px-4 bg-white;
}

form button {
  @apply rounded-lg font-bold bg-gray-800 text-white py-3 px-8 hover:bg-gray-800;
}
</style>
