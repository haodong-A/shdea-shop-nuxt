<script setup lang="ts">
const { cover, mainImage, otherImages } = defineProps({
  cover: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
  },
  otherImages: {
    type: String,
  },
})

const imageToShow = ref(mainImage)

const active = ref<number>(0)
const galleryImages = ref<string[]>([])

function changeImage(image: any, index: number) {
  active.value = index
  if (image)
    imageToShow.value = image
}

watch(() => otherImages, () => {
  if (otherImages) {
    try {
      galleryImages.value = [mainImage || cover]
      let parse = JSON.parse(otherImages)
      if (parse && parse.length) {
        parse = parse?.filter((item: string) => !!item)
      }
      galleryImages.value.push(...parse)
      if (galleryImages.value.length >= active.value + 1) {
        imageToShow.value = galleryImages.value[active.value]
      }
      else {
        imageToShow.value = galleryImages.value[0]
      }
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (err) {
      galleryImages.value = []
    }
  }
}, { immediate: true })
const imgWidth = 640
</script>

<template>
  <div class="sticky top-[73px]">
    <NuxtImg
      class="min-w-[350px] w-full rounded-xl object-contain"
      :width="imgWidth"
      :height="imgWidth"
      alt="images"
      :src="imageToShow"
      fetchpriority="high"
      placeholder
      placeholder-class="blur-xl"
    />
    <div v-if="galleryImages?.length" class="gallery-images my-4">
      <div
        v-for="(galleryImg, index) in galleryImages" :key="galleryImg"
        :class="index === active ? 'active' : '' "
        class="cursor-pointer overflow-hidden rounded-xl transition-all transition-duration-300"
        placeholder-class="blur-xl"
        @mouseover="changeImage(galleryImg, index)"
      >
        <NuxtImg
          class="rounded-xl"
          :width="imgWidth"
          :height="imgWidth"
          :src="galleryImg"
          alt="shdea"
          placeholder
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-images {
  display: flex;
  overflow: auto;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
}

.gallery-images img {
  width: 72px;
  aspect-ratio: 5/6;
  object-fit: cover;
}

@media (min-width: 768px) {
  .gallery-images {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));

    img {
      width: 100%;
    }
  }
}

.active {
  border-color: rgba(127, 84, 178, 0.5) !important;
}

.gallery-images div {
  border: 3px solid transparent;
}
</style>
