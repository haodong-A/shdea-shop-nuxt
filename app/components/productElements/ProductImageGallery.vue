<script setup lang="ts">
const props = defineProps({
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

const primaryImage = computed(() => props.mainImage || props.cover)

const imageToShow = ref(primaryImage.value)

const galleryImages = ref<string[]>([])

function changeImage(image: any) {
  if (image)
    imageToShow.value = image
}

watch(() => props.otherImages, () => {
  if (props.otherImages) {
    try {
      galleryImages.value = JSON.parse(props.otherImages) || []
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
  <div>
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
      <NuxtImg
        v-for="galleryImg in galleryImages"
        :key="galleryImg"
        class="cursor-pointer rounded-xl"
        :width="imgWidth"
        :height="imgWidth"
        :src="galleryImg"
        alt="shdea"
        placeholder
        placeholder-class="blur-xl"
        loading="lazy"
        @click.native="changeImage(galleryImg)"
      />
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
</style>
