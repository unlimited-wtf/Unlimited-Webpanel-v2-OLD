import { set } from 'nuxt/dist/app/compat/capi';
<template>
    <q-toolbar class="q-py-sm q-px-lg bg-background2 rounded-borders">
        <q-btn round dense flat icon="las la-bars" @click="toggleLeftDrawer" />

        <q-space />

        <div class="q-gutter-sm">
            <q-btn dense round flat icon="las la-bell">
                <q-badge rounded color="red-6" floating transparent> 4 </q-badge>

                <q-menu :offset="[0, 25]" class="bg-background2" transition-show="jump-down" transition-hide="jump-up">
                    <q-list style="max-width: 350px">
                        <q-item class="items-center">
                            <q-item-section>
                                <q-item-label class="text-subtitle1 text-weight-bolder"> Notifications </q-item-label>
                            </q-item-section>

                            <q-item-section side>
                                <q-btn class="bg-transparent" dense round flat color="primary" icon="mark_email_read">
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
                                <q-item-label caption lines="2" class="text-grey-5"
                                    >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
                                    elit.</q-item-label
                                >
                                <q-item-label caption class="text-grey-8">5 min ago</q-item-label>
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
                <q-menu square :offset="[0, 20]" class="bg-background2" fit transition-show="jump-down" transition-hide="jump-up">
                    <q-list>
                        <q-item class="q-my-sm">
                            <q-item-section side top>
                                <q-avatar>
                                    <img :src="data.user.image" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label class="text-uppercase text-primary">{{ data.user.name }}</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-separator spaced inset />

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
</template>

<script setup>
const { signOut, data } = useAuth();
const { toggleLeftDrawer } = useLayout();
const config = useRuntimeConfig();

const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
};
</script>
