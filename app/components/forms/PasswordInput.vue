<script setup lang="ts">
const { modelValue, className, placeholder, required } = defineProps({
  modelValue: { type: String, required: true },
  className: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  autocomplete: { type: String, default: 'new-password' },
  required: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

function handleInputChanged(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="relative w-full flex items-center">
    <input
      :type="showPassword ? 'text' : 'password'"
      class="flex flex-1 items-center"
      :value="modelValue"
      :class="className"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="required"
      @input="handleInputChanged"
    >
    <div v-if="showPassword" i-hugeicons-eye size="7" class="absolute right-4 cursor-pointer" @click="showPassword = !showPassword" />
    <div v-else i-hugeicons-view-off size="7" class="absolute right-4 cursor-pointer" @click="showPassword = !showPassword" />
  </div>
</template>
