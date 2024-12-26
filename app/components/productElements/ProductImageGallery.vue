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
    type: Array<string>,
  },
})

const primaryImage = computed(() => props.mainImage || props.cover)

const imageToShow = ref(primaryImage.value)

function changeImage(image: any) {
  if (image)
    imageToShow.value = image
}

const imgWidth = 640
</script>

<template>
  <div>
    <NuxtImg
      :width="imgWidth"
      :height="imgWidth"
      alt="images"
      :src="imageToShow"
      fetchpriority="high"
      placeholder
      placeholder-class="blur-xl"
    />
    <div v-if="otherImages?.length" class="gallery-images my-4">
      <NuxtImg
        v-for="galleryImg in otherImages"
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
