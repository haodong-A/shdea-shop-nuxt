<script setup lang="ts">
const mockTerms = [
  {
    label: 'a',
    value: 'a',
    children: [
      {
        label: 'a-1',
        value: 'a-1',
      },
      {
        label: 'a-2',
        value: 'a-2',
      },
    ],
  },
  {
    label: 'b',
    value: 'b',
    children: [
      {
        label: 'b-1',
        value: 'b-1',
      },
      {
        label: 'b-2',
        value: 'b-2',
      },
    ],
  },
]
</script>

<template>
  <aside id="filters">
    <div class="relative z-30 grid mb-12 space-y-8 divide-y">
      <CategoryFilter :terms="mockTerms" />
    </div>
  </aside>
</template>

<style scoped lang="postcss">
#filters {
  @apply w-[280px];

  & .slider-connect {
    @apply bg-primary;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  input[type='checkbox'],
  input[type='radio'] {
    @apply bg-white border rounded-lg cursor-pointer font-sans outline-none border-gray-300 w-full p-3 transition-all duration-150 appearance-none hover:border-primary;

    width: 1em;
    height: 1em;
    position: relative;
    cursor: pointer;
    border-radius: 4px;
    padding: 0;
  }

  input[type='radio'] {
    border-radius: 50%;
  }

  input[type='checkbox']:after,
  input[type='radio']:after {
    content: '';
    display: block;
    opacity: 0;
    transition: all 250ms cubic-bezier(0.65, -0.43, 0.4, 1.71);
  }

  input[type='checkbox']:after {
    width: 5px;
    height: 9px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(0deg) translate(-1px, 1px) scale(0.75);
    position: absolute;
    top: 3px;
    left: 6.5px;
  }

  input[type='radio']:after {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transform: scale(0);
    position: absolute;
    background: #fff;
    top: 4px;
    left: 4px;
  }

  input[type='checkbox']:checked:after,
  input[type='checkbox'] + label,
  input[type='radio'] + label {
    @apply cursor-pointer text-gray-600 hover:text-primary;
  }

  input[type='checkbox']:checked + label,
  input[type='radio']:checked + label {
    @apply text-gray-800 hover:text-primary-dark;
  }

  input[type='checkbox']:checked,
  input[type='radio']:checked {
    @apply bg-primary border-0;
  }

  input[type='checkbox']:checked:after {
    opacity: 1;
    transform: rotate(45deg) translate(-1px, 1px) scale(1);
  }

  input[type='radio']:checked:after {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
