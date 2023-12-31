<template>
    <q-layout view="lHh LpR lff">
        <q-header bordered class="q-pa-md bg-transparent">
            <LayoutToolbar />
        </q-header>

        <q-drawer dark show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg2">
            <!-- drawer content -->
            <div class="row items-center">
                <q-avatar size="100px">
                    <q-img fit="contain" src="/logo.png" :ratio="16 / 9" spinner-color="primary" spinner-size="82px" />
                </q-avatar>
                <div class="text-primary row justify-center">{{ config.public.serverName }}</div>
            </div>

            <q-separator spaced inset />

            <q-list>
                <component
                    :is="resolveUcpNavMenuItemComponent(item)"
                    v-for="item in navigation"
                    :key="item.header || item.title"
                    :item="item"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <q-page class="q-pa-md">
                <slot></slot>
            </q-page>
        </q-page-container>

        <LayoutFooter />
    </q-layout>
</template>

<script setup lang="ts">
import type { NavigationItem } from '@/composables/useNavigation';
import type { SubjectRawRule, MongoQuery } from '@casl/ability';
import { ability } from '~/plugins/ability.client';
const config = useRuntimeConfig();
const { leftDrawerOpen } = useLayout();
const { navigation } = useNavigation();
const { status } = useAuth();

const UcpNavMenuLink = resolveComponent('LayoutUcpNavMenuLink');
const UcpNavMenuGroup = resolveComponent('LayoutUcpNavMenuGroup');
const UcpNavMenuHeader = resolveComponent('LayoutUcpNavMenuHeader');

if (status.value === 'authenticated') {
    const { pending: permsPending, data: permissions } = useLazyFetch('/api/permissions', {
        server: false
    });

    watch(permissions, (newPermissions) => {
        ability.update(newPermissions as SubjectRawRule<string, never, MongoQuery>[]);
    });
}

const resolveUcpNavMenuItemComponent = (item: NavigationItem) => {
    if (item.header) return UcpNavMenuHeader;
    if (item.children) return UcpNavMenuGroup;

    return UcpNavMenuLink;
};
</script>

<style lang="scss" scoped>
* {
    font-family: $font-montserrat;
}
</style>
