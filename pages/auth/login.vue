<template>
    <div>
        <button @click="signIn('discord', { callbackUrl: '/', redirect: true })">Login</button>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'full',
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/'
    }
});

const { signIn } = useAuth();
</script>
