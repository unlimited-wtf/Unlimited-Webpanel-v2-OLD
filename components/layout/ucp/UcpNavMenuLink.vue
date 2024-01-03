<template>
    <q-item
        v-if="canViewUcpNavMenuLink(props.item)"
        clickable
        v-ripple
        :to="localeRoute({ name: props.item.route })"
        :active="isRoutePathActive"
        active-class="active-sidebar-element"
        class="rounded-borders text-font q-py-sm"
        dense
    >
        <q-item-section side>
            <q-icon
                :color="isRoutePathActive ? 'font-highlighted' : 'font'"
                :size="size || 'sm'"
                :name="props.item.icon"
                :class="{
                    'q-pl-md': size
                }"
            />
        </q-item-section>
        <q-item-section
            :class="{
                'text-font-highlighted': isRoutePathActive
            }"
            v-text="props.item.title"
        />
    </q-item>
</template>

<script setup lang="ts">
import type { NavigationItem } from '@/composables/useNavigation';
const { canViewUcpNavMenuLink } = useAbility();
const { pathIncludesRoute } = useUtils();
const localeRoute = useLocaleRoute();
const route = useRoute();

const isRoutePathActive = computed(() => {
    return pathIncludesRoute(route.matched, props.item.route);
});

const props = defineProps<{
    item: NavigationItem;
    size?: string;
}>();
</script>

<style scoped lang="scss">
.active-sidebar-element {
    background: linear-gradient(72.47deg, $primary 22.16%, rgba($primary, 0.7) 76.47%) !important;
    box-shadow: 0 2px 6px rgba($primary, 0.48);
    font-weight: 500;
}
</style>
