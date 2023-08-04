<template>
    <q-layout view="lHh LpR fFf">
        <q-header bordered class="bg-white text-black">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title class="text-primary"> Unlimited </q-toolbar-title>
                <q-btn class="q-ml-auto" @click="handleLogout" flat color="negative" no-caps label="Abmelden" />
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <q-page>
                <NuxtPage class="q-pa-md" />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
const { signOut } = useAuth();
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

const handleLogout = async () => {
    await signOut();
};
</script>
