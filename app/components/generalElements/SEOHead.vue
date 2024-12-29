<script setup lang="ts">
import type { PropType } from 'vue'

const { info } = defineProps({ info: { type: Object as PropType<Product.Info>, required: true } })
const { stripHtml } = useHelpers()
const title = info?.title
const siteName = process.env.SITE_TITLE ?? 'SHDEA'

const img = useImage()
const imageURL = info?.cover ?? '/images/placeholder.jpg'
const defaultImageSrc = img.getSizes(imageURL, { width: 1200, height: 630 }).src

function getFullImageURL(url: string) {
  if (url.startsWith('http'))
    return url
  return `${url}`
}

const defaultImage = getFullImageURL(defaultImageSrc || '')
const description = stripHtml(info.description || '')
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta v-if="description" name="description" hid="description" :content="description" />
    <Meta name="image" hid="image" :content="defaultImage" />
    <Meta property="og:site_name" hid="og:site_name" :content="siteName" />
    <Meta v-if="info.title" property="og:title" hid="og:title" :content="info.title" />
    <Meta v-if="description" property="og:description" hid="og:description" :content="description" />
    <Meta property="og:image" hid="og:image" :content="defaultImage" />
    <Meta name="twitter:card" hid="twitter:card" content="summary_large_image" />
    <Meta v-if="info.title" name="twitter:title" hid="twitter:title" :content="info.title" />
    <Meta v-if="description" name="twitter:description" hid="twitter:description" :content="description" />
  </Head>
</template>
