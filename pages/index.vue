<template>
    <div>
        {{ $t('welcome') }}
        {{ status }}
        {{ data }}
    </div>
</template>

<script setup>
const { status, data } = useAuth();
</script>
