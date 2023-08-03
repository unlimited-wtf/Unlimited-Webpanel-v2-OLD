<template>
    <div>
        {{ $t('welcome') }}
        {{ status }}
        {{ data }}

        <button @click="signIn">Login</button>
    </div>
</template>

<script setup>
const { status, data, signIn, signOut } = useAuth();
</script>
