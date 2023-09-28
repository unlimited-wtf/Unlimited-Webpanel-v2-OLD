<template>
    <div class="row" style="height: 90vh">
        <!-- left logo on large screens -->
        <div class="col-0 col-md-6 flex justify-center content-center">
            <img src="/logo.png" class="responsive" alt="logo" style="max-width: 50%" />
        </div>

        <!-- card container -->
        <div
            v-bind:class="{
                'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs
            }"
            class="col-12 col-md-6 flex content-center"
        >
            <!-- card -->
            <q-card v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }" class="bg2">
                <!-- title -->
                <q-card-section>
                    <div class="q-pt-lg">
                        <div class="col text-h6 text-center flex justify-center">
                            <div class="text-h4 text-uppercase text-primary q-my-none text-weight-regular">
                                {{ $t('components.login.title') }}
                            </div>
                        </div>
                    </div>
                </q-card-section>

                <!-- subtitle -->
                <q-card-section>
                    <div class="text-center text-subtitle1 text-secondary">
                        {{ $t('components.login.subtitle') }}
                    </div>
                </q-card-section>

                <!-- login btn -->
                <q-card-section class="flex justify-center">
                    <q-btn
                        color="primary"
                        v-bind:class="{
                            'full-width': $q.screen.md || $q.screen.sm || $q.screen.xs
                        }"
                        :label="$t('login')"
                        type="submit"
                        icon="discord"
                        @click="signIn('discord', { callbackUrl: '/', redirect: true })"
                    />
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'full',
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/'
    }
});

const { signIn } = useAuth();
</script>
