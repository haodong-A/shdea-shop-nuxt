<script setup lang="ts">
</script>

<template>
  <footer class="footer-contain color-#4D4D4DFF dark:color-white">
    <!--    文字部分 -->
    <el-row py-4>
      <el-col :span="24" :sm="12" px-10 sm:pr-30 xl:pr-70>
        <img src="/logo.png" alt="SHDEA" h-10>
        <p mt-4 line-height-relaxed>
          Gravida massa volutpat aenean odio. Amet,
          turpis erat nullam fringilla elementum diam in. Nisi,
          purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
        </p>
        <p mt-4>
          whatsapp: +44 1222556565
        </p>
      </el-col>
      <el-col :span="24" :sm="12" mt-5 justify-around sm:mt-0 class="!flex">
        <div>
          <p text-4.5 font-bold>
            Information
          </p>
          <ul mt-3>
            <li cursor-pointer transition-colors transition-duration-300 class="hover:color-#E42129FF">
              About
            </li>
            <li my-2 cursor-pointer transition-colors transition-duration-300 class="hover:color-#E42129FF">
              FAQ's
            </li>
          </ul>
        </div>
        <div>
          <p text-4.5 font-bold>
            Product
          </p>
          <ul mt-3>
            <li cursor-pointer transition-colors transition-duration-300 class="hover:color-#E42129FF">
              New Arrival
            </li>
          </ul>
        </div>
        <div>
          <p text-4.5 font-bold>
            Service
          </p>
          <ul mt-3>
            <li cursor-pointer transition-colors transition-duration-300 class="hover:color-#E42129FF">
              Contact Us
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-divider class="!my-4"/>
    <div flex items-center justify-end pb-4>
      <NuxtLink
        href="https://www.facebook.com/vuedesigner"
        aria-label="facebook"
        external
        target="_blank"
        i-logos-facebook
        mr-4
      />
      <NuxtLink
        href="https://twitter.com/vuedesigner"
        aria-label="X-twitter"
        external
        target="_blank"
        i-hugeicons-new-twitter
        mr-4
      />

      <NuxtLink
        href="https://tiktok.com"
        aria-label="tiktok"
        external
        target="_blank"
        i-logos-tiktok-icon
        mr-4
      />
      <NuxtLink
        href="https://www.youtube.com/@vuedesigner"
        aria-label="youtube"
        external
        target="_blank"
        i-logos-youtube-icon
        mr-6
      />
    </div>
  </footer>
</template>

<style scoped>
.footer-contain {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1.93465px 7.73859px 0px;
}
</style>
