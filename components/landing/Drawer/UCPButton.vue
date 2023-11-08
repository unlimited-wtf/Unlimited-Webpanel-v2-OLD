<template>
    <div class="login-btn flex flex-center q-pa-sm">
        <img :src="User" alt="Userpanel Buton" />
    </div>
</template>

<script setup>
import User from '@/assets/icons/user.svg';
</script>

<style lang="scss">
.login-btn {
    width: 38px;
    height: 38px;

    &:hover {
        cursor: pointer;
        border-radius: 4px;
        background: rgba(110, 110, 110, 0.4);
    }

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
