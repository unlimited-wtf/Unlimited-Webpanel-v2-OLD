<template>
    <div>
        {{ $t('welcome') }}
        {{ status }}
        {{ data }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'ucp'
});

const { status, data } = useAuth();
</script>
