<template>
    <ClientOnly>
        <q-expansion-item
            v-if="canViewNavMenuGroup(props.item)"
            dense
            :header-class="`rounded-borders text-font q-py-sm ${toggleState ? 'opened-expansion-item' : ''}`"
            expand-icon="chevron_right"
            expanded-icon="expand_more"
            v-model="toggleState"
        >
            <template v-slot:header>
                <q-item-section side>
                    <q-icon color="font" size="sm" :name="item.icon" />
                </q-item-section>

                <q-item-section v-text="props.item.title" />
            </template>

            <div class="q-gutter-xs q-mt-xs">
                <LayoutVerticalNavMenuLink
                    v-for="(child, index) in item.children"
                    :key="`navgroupitem-${index}`"
                    :item="{ ...child, icon: 'far fa-circle' }"
                    :size="'8px'"
                />
            </div>
        </q-expansion-item>
    </ClientOnly>
</template>

<script setup lang="ts">
import type { NavigationGroup } from '@/composables/useNavigation';
const { canViewNavMenuGroup } = useAbility();

const toggleState = ref(false);

const props = defineProps<{
    item: NavigationGroup;
}>();
</script>

<style lang="scss">
.opened-expansion-item {
    background: color-mix(in srgb, $primary 10%, transparent);
}
</style>
