<template>
    <q-layout view="lHh LpR lff">
        <q-header bordered class="q-pa-md bg-transparent">
            <LayoutToolbar />
        </q-header>

        <q-drawer dark show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg-background2">
            <!-- drawer content -->
            <div class="row items-center q-mb-md">
                <q-avatar size="100px">
                    <q-img fit="contain" src="/logo.png" :ratio="16 / 9" spinner-color="primary" spinner-size="82px" />
                </q-avatar>
                <div
                    :style="{ color: lighten('font', 85) }"
                    class="text-weight-bolder text-uppercase row justify-center wrap"
                >
                    {{ config.public.serverName }}
                </div>
            </div>

            <q-list class="q-px-md q-gutter-xs">
                <!-- @vue-skip Tell Volar VSC Extension to stfu - ts things -->
                <component
                    v-for="(item, index) in navigation"
                    :is="resolveUcpNavMenuItemComponent(item)"
                    :key="`navitem-${index}`"
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

        <q-page-sticky position="right">
            <q-btn
                class="q-pa-sm"
                dense
                size="md"
                icon="las la-cog"
                color="primary"
                style="border-radius: 10px 0 0 10px"
            />
        </q-page-sticky>
    </q-layout>
</template>

<script setup lang="ts">
import type { SubjectRawRule, MongoQuery } from '@casl/ability';
import { ability } from '~/plugins/ability.client';
import { colors } from 'quasar';
const config = useRuntimeConfig();
const { resolveUcpNavMenuItemComponent } = useUtils();
const { leftDrawerOpen } = useLayout();
const { navigation } = useNavigation();
const { status } = useAuth();
const { lighten } = colors;

if (status.value === 'authenticated') {
    const { pending: permsPending, data: permissions } = useLazyFetch('/api/permissions', {
        server: false
    });

    watch(permissions, (newPermissions) => {
        ability.update(newPermissions as SubjectRawRule<string, never, MongoQuery>[]);
    });
}
</script>

<style lang="scss" scoped>
* {
    font-family: $font-public-sans;
    color: $font;
    font-size: 1rem;
}
</style>
