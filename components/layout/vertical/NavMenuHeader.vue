<template>
    <q-item-label
        class="q-mt-md text-uppercase text-font-secondary"
        style="font-size: 12px"
        header
        v-if="canViewNavMenuHeader(item)"
    >
        {{ item.header }}
    </q-item-label>
</template>

<script setup lang="ts">
import type { NavigationHeader } from '@/composables/useNavigation';
const { canViewNavMenuHeader } = useAbility();

const props = defineProps<{
    item: NavigationHeader;
}>();
</script>
