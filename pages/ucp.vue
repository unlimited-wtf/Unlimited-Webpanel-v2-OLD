<template>
    <div>
        {{ $t('welcome') }}
        {{ status }}
        {{ data }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'layout-vertical'
});

const { status, data } = useAuth();
</script>
