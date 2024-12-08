<script setup lang="ts">
</script>

<template>
  <!--  <div text="xl gray4" m-5 flex="~ gap3" justify-center>
    <NuxtLink i-carbon-campsite to="/" />
    <a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
    <DarkToggle />
  </div> -->
  <footer class="bg-#111111FF px-10 py-10">
    <div>
      <div>
        <ElRow :gutter="50" class="text-left">
          <ElCol :span="6">
            <img src="/logo.png" alt="SHDEA">
            <p class="mt-5 text-left color-#8e8e8e">
              Gravida massa volutpat aenean odio. Amet,
              turpis erat nullam fringilla elementum diam in. Nisi,
              purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            </p>
            <div class="mt-5 flex color-#CACAC5FF">
              <a i-hugeicons-facebook-01 href="https://facebook.com" target="_blank" title="facebook" class="mr-4 h-6 w-6 cursor-pointer transition-colors transition-duration-300 hover:color-#438EB8FF" />
              <a i-hugeicons-new-twitter title="X" href="https://x.com" target="_blank" class="mr-4 h-6 w-6 cursor-pointer transition-colors transition-duration-300 hover:color-#438EB8FF" />
              <a i-hugeicons-tiktok title="tiktok" href="https://tiktok.com" target="_blank" class="mr-4 h-6 w-6 cursor-pointer transition-colors transition-duration-300 hover:color-#438EB8FF" />

              <a i-hugeicons-whatsapp title="whatsapp" href="https://whatsapp.com" target="_blank" class="h-6 w-6 cursor-pointer transition-colors transition-duration-300 hover:color-#438EB8FF" />
            </div>
          </ElCol>
          <ElCol :span="6" class="color-#CACAC5FF">
            <p class="text-size-xl">
              Quick Links
            </p>
            <div class="mt-5">
              <NuxtLink to="/sds" class="block transition-colors transition-duration-300 hover:color-#438EB8FF">
                Home
              </NuxtLink>
              <NuxtLink to="/" class="mt-2 block transition-colors transition-duration-300 hover:color-#438EB8FF">
                Category
              </NuxtLink>
            </div>
          </ElCol>
          <ElCol :span="6" class="color-#CACAC5FF">
            <p class="text-size-xl">
              Help & Info
            </p>
            <div class="mt-5">
              <NuxtLink to="/" class="block transition-colors transition-duration-300 hover:color-#438EB8FF">
                Faqs
              </NuxtLink>
              <NuxtLink to="/" class="mt-2 block transition-colors transition-duration-300 hover:color-#438EB8FF">
                About
              </NuxtLink>
              <NuxtLink to="/" class="mt-2 block transition-colors transition-duration-300 hover:color-#438EB8FF">
                Shipping + Delivery
              </NuxtLink>
            </div>
          </ElCol>
          <ElCol :span="6">
            <p class="text-size-xl  color-#CACAC5FF">
              Contact Us
            </p>
            <div class="mt-5">
              <p class="mb-2 color-#8e8e8e">
                Do you have any questions or suggestions?
              </p>
              <a href="mailto:shdea2020@163.com" class="mb-2 block color-#CACAC5FF">shdea2020@163.com</a>
              <p class="color-#8e8e8e">
                Do you need support? Give us a call. +86 123456789
              </p>
            </div>
          </ElCol>
        </ElRow>
      </div>
    </div>
  </footer>
</template>
