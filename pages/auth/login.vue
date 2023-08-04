<template>
    <div>
        <button @click="signIn('discord', { callbackUrl: '/', redirect: true })">Login</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/'
    }
});

const { signIn } = useAuth();
</script>
