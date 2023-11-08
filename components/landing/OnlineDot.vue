<template>
    <div class="q-mr-sm">
        <div class="online-dot" :class="status"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    status: { type: String, default: 'online' }
});
</script>

<style lang="scss" scoped>
.online-dot {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    margin: 10px;
    height: 12px;
    width: 12px;
    transform: scale(1);

    &.online {
        background: $positive;
        animation: online-pulse 2s infinite;
    }

    &.offline {
        background: $red;
        animation: none;
    }

    &.pending {
        background: $orange;
        animation: pending-pulse 2s infinite;
    }
}
</style>
