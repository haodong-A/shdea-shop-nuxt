<script setup lang="ts">

</script>

<template>
  <footer order-last bg-white>
    <div my-24 flex flex-wrap justify-between gap-12 container md:gap-24>
      <div mr-auto>
        <Logo />
        <WebsiteShortDescription />
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">
          Information
        </div>
        <div class="text-sm">
          <a class="block py-1.5" href="https://github.com/scottyzen/woonuxt?tab=readme-ov-file#next-generation-front-end-for-woocommerce" target="_blank">About</a>
          <a href="/" class="block py-1.5">Careers</a>
          <a href="/" class="block py-1.5">Press</a>
          <a href="https://woonuxt.com/faq" class="block py-1.5" rel="noreferrer" target="_blank">FAQ's</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">
          Products
        </div>
        <div class="text-sm">
          <NuxtLink to="/products" class="block py-1.5">
            New Arrivals
          </NuxtLink>
          <NuxtLink to="/products?filter=sale[true]" class="block py-1.5">
            On sale
          </NuxtLink>
          <NuxtLink to="/products?orderby=rating&order=ASC&filter=rating[1]" class="block py-1.5">
            Top rated
          </NuxtLink>
          <a href="/" class="block py-1.5">Gift Cards</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">
          Customer Service
        </div>
        <div class="text-sm">
          <NuxtLink to="/contact" class="block py-1.5">
            Contact Us
          </NuxtLink>
          <a href="/" class="block py-1.5">Shipping & Returns</a>
          <a href="/" class="block py-1.5">Privacy Policy</a>
          <a href="/" class="block py-1.5">Terms & Conditions</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">
          My Account
        </div>
        <div class="text-sm">
          <NuxtLink to="/my-account/" class="block py-1.5">
            Order
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mb-4 flex items-center justify-center border-t container">
      <div class="copywrite">
        <p class="py-4 text-center text-xs">
          <a href="https://www.shdea-cooker.com" title="SHDEA">Shangdea - SHDEA from china</a>
        </p>
      </div>
      <SocialIcons />
    </div>
  </footer>
</template>

<style scoped lang="postcss">
a {
  @apply hover:underline;
}
</style>
