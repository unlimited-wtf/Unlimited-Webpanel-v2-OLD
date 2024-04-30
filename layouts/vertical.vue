<template>
    <q-layout view="lHh LpR lff">
        <!-- topbar toolbar -->
        <q-header bordered class="q-pa-md bg-transparent">
            <LayoutToolbar />
        </q-header>

        <!-- drawer content -->
        <q-drawer dark show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg-background2">
            <div class="row items-center q-mb-md">
                <q-avatar size="100px">
                    <q-img fit="contain" src="/logo.png" :ratio="16 / 9" spinner-color="primary" spinner-size="82px" />
                </q-avatar>
                <div class="text-weight-bolder text-uppercase row justify-center wrap server-name">
                    {{ config.public.serverName }}
                </div>
            </div>

            <q-list class="q-px-md q-gutter-xs">
                <component
                    v-for="(item, index) in navigation"
                    :is="resolveNavMenuItemComponent(item)"
                    :key="`navitem-${index}`"
                    :item="item"
                />
            </q-list>
        </q-drawer>

        <!-- actual page -->
        <q-page-container>
            <q-page class="q-pa-md">
                <slot></slot>
            </q-page>
        </q-page-container>

        <!-- footer -->
        <LayoutFooter />
    </q-layout>
</template>

<script setup>
import { ability } from '~/plugins/ability.client';
import { colors, useQuasar } from 'quasar';
import { useServerStore } from '~/stores/server';
import { useUserStore } from '~/stores/user';
const config = useRuntimeConfig();
const { resolveNavMenuItemComponent } = useUtils();
const { leftDrawerOpen } = useLayout();
const { navigation } = useNavigation();
const { status } = useAuth();
const { lighten } = colors;
const socket = useSocket();
const serverStore = useServerStore();
const userStore = useUserStore();
const $q = useQuasar();

// Make sure to update the ability instance when the user's permissions change
userStore.$onAction(({ name, after, store }) => {
    if (name === 'setPermissions') {
        after((result) => {
            ability.update(store.permissions);
        });
    }
}, true /* listen even if component was closed */);

if (status.value === 'authenticated') {
    const { pending: permsPending, data: permissions } = useLazyFetch('/api/users/permissions', {
        server: false
    });

    watch(permissions, (newPermissions) => userStore.setPermissions(newPermissions));
}

onMounted(() => {
    socket.connect();

    socket.on('update:server:status', (status) => {
        serverStore.updateServerStatus(status);
    });

    socket.on('update:user:permissions', (permissions) => {
        $q.notify({
            message: 'Your permissions have been updated',
            color: 'primary',
            position: 'top',
            icon: 'las la-check',
            classes: 'text-font-highlighted',
            timeout: 2500
        });
        userStore.setPermissions(JSON.parse(permissions));
    });
});
</script>

<style lang="scss" scoped>
* {
    font-family: $font-public-sans;
    color: $font;
    font-size: 1rem;
}

.server-name {
    background: linear-gradient(to right, lighten($primary, 10) 0%, lighten($primary, 40) 17.92%, $primary 100%);
    background-clip: text;
}
</style>
