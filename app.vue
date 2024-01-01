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
</style>
