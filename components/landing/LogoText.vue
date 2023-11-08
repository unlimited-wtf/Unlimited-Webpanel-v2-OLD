<template>
    <div class="text-white logo">
        <span class="text-uppercase text-primary">{{ config.public.serverName }}</span>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
.logo {
    font-family: $font-drukcyr-medium;
    font-weight: 500;
    font-size: 48px;
    line-height: 61px;
}
</style>
