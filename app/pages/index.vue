<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'

// 导入 Pagination 模块样式
import 'swiper/css/pagination'

const swiperRef = ref(null)
const swiper = useSwiper(swiperRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

useSeoMeta({
  title: 'Home',
})
</script>

<template>
  <client-only>
    <div h-full>
      <div h-full>
        <swiper-container
          ref="swiperRef"
          direction="horizontal"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :modules="[Pagination, Autoplay]"
        >
          <swiper-slide>
            <img src="/picture1.jpg" alt="picture" h-full w-full class="object-cover">
          </swiper-slide>
          <swiper-slide>
            <img src="/picture1.jpg" alt="picture" h-full w-full class="object-cover">
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </client-only>
</template>

<style>
.el-carousel__container {
  height: 100% !important;
}

img {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
</style>
