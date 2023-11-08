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
        </q-drawer>

        <q-page-container>
            <q-page class="q-pa-md">
                <slot></slot>
            </q-page>
        </q-page-container>

        <LayoutFooter />
    </q-layout>
</template>

<script setup>
const config = useRuntimeConfig();
const { leftDrawerOpen } = useLayout();
</script>

<style lang="scss" scoped>
* {
    font-family: $font-montserrat;
}
</style>
