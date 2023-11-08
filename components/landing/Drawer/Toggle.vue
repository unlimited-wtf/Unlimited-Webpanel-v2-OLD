<template>
    <div class="burger-btn flex flex-center q-pa-sm">
        <img :src="Burger" alt="burger-menu" />
    </div>
</template>

<script setup>
import Burger from '@/assets/icons/burger.svg';
</script>

<style lang="scss">
.burger-btn {
    width: fit-content;
    height: fit-content;

    &:hover {
        cursor: pointer;
        border-radius: 4px;
        background: rgba(110, 110, 110, 0.4);
    }
}
</style>
