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
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

.noscroll {
    height: 100%;
    overflow: hidden;
}
</style>
