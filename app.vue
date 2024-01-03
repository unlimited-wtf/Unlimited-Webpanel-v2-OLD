<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useHead({
    title: config.public.siteTitle
});
</script>

<style>
.noscroll {
    height: 100%;
    overflow: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

[v-cloak] {
  display: none;
}
</style>
