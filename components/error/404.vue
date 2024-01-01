<template>
    <div class="absolute-center column items-center">
        <h3 class="text-weight-medium q-mb-md">404</h3>
        <strong class="text-h5">{{ $t('error.pageNotFound') }} ⚠️</strong>
        <div class="q-my-md text-subtitle1 text-center">{{ $t('error.pageNotFoundText') }}</div>
        <q-btn no-caps class="q-mt-md" color="primary" @click="handleError" :label="$t('error.back')" />
    </div>
</template>

<script setup>
const handleError = () => clearError({ redirect: '/ucp' });
</script>
