<template>
    <q-layout view="lHh LpR lff" class="bg-dark">
        <q-header bordered class="bg-secondary">
            <q-toolbar class="q-pa-md">
                <q-btn dense flat icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title class="text-primary"> Unlimited </q-toolbar-title>

                <div class="q-gutter-sm">
                    <q-btn
                        dense
                        round
                        flat
                        :icon="$q.dark.isActive ? 'o_light_mode' : 'o_dark_mode'"
                        @click="$q.dark.toggle()"
                    />

                    <q-btn dense round flat icon="o_notifications">
                        <q-badge rounded color="red" floating transparent> 4 </q-badge>

                        <q-menu :offset="[0, 25]" class="bg-secondary">
                            <q-list style="max-width: 350px">
                                <q-item class="items-center">
                                    <q-item-section>
                                        <q-item-label class="text-subtitle1 text-weight-bolder">
                                            Notifications
                                        </q-item-label>
                                    </q-item-section>

                                    <q-item-section side>
                                        <q-btn
                                            class="bg-transparent"
                                            dense
                                            round
                                            flat
                                            color="primary"
                                            icon="mark_email_read"
                                        >
                                            <q-tooltip
                                                class="bg-primary"
                                                anchor="center left"
                                                self="center right"
                                                :offset="[10, 10]"
                                            >
                                                Mark all as read
                                            </q-tooltip>
                                        </q-btn>
                                    </q-item-section>
                                </q-item>

                                <q-separator />

                                <q-item clickable v-close-popup class="text-primary">
                                    <q-item-section>
                                        <q-item-label class="text-bold">Single line item</q-item-label>
                                        <q-item-label caption lines="2"
                                            >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
                                            elit.</q-item-label
                                        >
                                        <q-item-label caption class="text-grey">5 min ago</q-item-label>
                                    </q-item-section>

                                    <q-item-section side top>
                                        <q-badge rounded color="primary" />
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>

                    <q-btn round>
                        <q-avatar>
                            <img :src="data.user.image" />
                        </q-avatar>
                        <q-menu :offset="[0, 20]" class="bg-secondary">
                            <q-list>
                                <q-item class="q-my-sm">
                                    <q-item-section side top>
                                        <q-avatar>
                                            <img :src="data.user.image" />
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>{{ data.user.name }}</q-item-label>
                                        <q-item-label caption class="text-grey">Admin</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-separator class="q-my-sm" />

                                <q-item clickable v-close-popup>
                                    <q-item-section side>
                                        <q-icon name="person" />
                                    </q-item-section>
                                    <q-item-section side>Profile</q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section side>
                                        <q-icon name="o_settings" />
                                    </q-item-section>
                                    <q-item-section side>Settings</q-item-section>
                                </q-item>

                                <q-separator class="q-my-sm" />

                                <!--    Logout Button    -->
                                <q-item clickable v-close-popup @click="handleLogout">
                                    <q-item-section side>
                                        <q-icon color="negative" name="logout" />
                                    </q-item-section>
                                    <q-item-section side class="text-negative">Logout</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer dark show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg-secondary">
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <q-page>
                <NuxtPage class="q-pa-md" />
            </q-page>
        </q-page-container>

        <q-footer class="bg-transparent q-px-md q-pb-sm">
            <div class="text-subtitle2 text-sub">
                COPYRIGHT © 2022 - {{ new Date().getFullYear() }}
                <a href="https://discord.unlimited.wtf" target="_blank" style="text-decoration: none"
                    ><span class="text-primary">Unlimited</span></a
                >, All rights Reserved
            </div>
        </q-footer>
    </q-layout>
</template>

<script setup>
const $q = useQuasar();

const { signOut, data } = useAuth();
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

const handleLogout = async () => {
    await signOut();
};
</script>
