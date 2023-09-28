<template>
    <q-layout view="lHh LpR lff">
        <q-header bordered class="q-pa-md bg-transparent">
            <q-toolbar class="q-py-sm q-px-lg bg2 rounded-borders">
                <q-btn round dense flat icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title class="text-primary"> Unlimited </q-toolbar-title>

                <div class="q-gutter-sm">
                    <q-btn dense round flat icon="o_notifications">
                        <q-badge rounded color="red" floating transparent> 4 </q-badge>

                        <q-menu :offset="[0, 25]" class="bg2" transition-show="jump-down" transition-hide="jump-up">
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

                                <q-item clickable v-close-popup>
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
                        <q-menu :offset="[0, 20]" class="bg2" transition-show="jump-down" transition-hide="jump-up">
                            <q-list>
                                <q-item class="q-my-sm">
                                    <q-item-section side top>
                                        <q-avatar>
                                            <img :src="data.user.image" />
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>{{ data.user.name }}</q-item-label>
                                        <q-item-label caption class="text-accent">Admin</q-item-label>
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

        <q-drawer dark show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg2">
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <q-page>
                <NuxtPage class="q-pa-md" />
            </q-page>
        </q-page-container>

        <LayoutFooter />
    </q-layout>
</template>

<script setup>
const { signOut, data } = useAuth();
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

const handleLogout = async () => {
    await signOut();
};
</script>
