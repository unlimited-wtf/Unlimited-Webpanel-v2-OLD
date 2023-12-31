<template>
    <q-item
        v-if="canViewUcpNavMenuLink(props.item)"
        clickable
        v-ripple
        :to="{ name: props.item.route }"
        :active="$route.matched.some((route) => route.name === props.item.route)"
        active-class="active-sidebar-element"
    >
        <q-item-section avatar>
            <q-icon
                :color="$route.matched.some((route) => route.name === props.item.route) ? 'primary' : 'main'"
                size="10px"
                :name="props.item.icon || 'far fa-circle'"
            />
        </q-item-section>
        <q-item-section
            :class="{
                'text-main': $route.matched.some((route) => route.name !== props.item.route)
            }"
            v-text="$t(`navigation.titles.${props.item.title}`)"
        ></q-item-section>
    </q-item>
</template>

<script setup lang="ts">
import type { NavigationItem } from '@/composables/useNavigation';
const { canViewUcpNavMenuLink } = useAbility();

const props = defineProps<{
    item: NavigationItem;
}>();
</script>

<style scoped lang="scss">
.active-sidebar-element {
    background-color: rgba($primary, 0.25);
}
</style>
