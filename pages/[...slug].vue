<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'published',
  }
);
</script>

<template>
  <pre>{{ story }}</pre>
</template>
