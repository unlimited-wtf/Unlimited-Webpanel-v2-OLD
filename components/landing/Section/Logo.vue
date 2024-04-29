<template>
    <div class="section-wrapper">
        <!-- #region logo/hero start -->
        <div class="top-container">
            <div class="header-container">
                <div class="text-landing-header">
                    {{ $t('landing.sections.logo.serverNameWhite')
                    }}<span class="prominent" :data-text="$t('landing.sections.logo.serverNamePrimary')">
                        {{ $t('landing.sections.logo.serverNamePrimary') }}</span
                    >
                </div>
                <div class="text-landing-subtitle2 text-left q-my-md">
                    {{ $t('landing.sections.logo.serverSubtitle') }}
                </div>
                <LandingButton
                    :label="$t('landing.sections.logo.playNow')"
                    class="q-my-md q-py-lg hoverable full-width"
                    @click="joinFiveM"
                />
            </div>

            <div class="logo-container">
                <img src="@/assets/imgs/logo/logo-trans.webp" alt="Logo" class="logo" />
                <img src="@/assets/imgs/hero-header-mobile.webp" alt="Two Humans" class="hero-header" />
            </div>

            <div class="online-container">
                <div class="box">
                    <div class="top">
                        <LandingOnlineDot :status="getStatus" />
                        <div class="text">{{ data?.players || 0 }}</div>
                    </div>
                    <div class="bottom text-uppercase">
                        {{
                            getStatus !== 'online' && !pending
                                ? $t('landing.sections.logo.serverOffline')
                                : pending ? $t('landing.sections.logo.pendingStatus') : $t('landing.sections.logo.playersOnline')
                        }}
                    </div>
                </div>
            </div>
        </div>

        <!-- #region logo text -->
        <div class="display-wrapper">
            <div class="text-landing-header">
                {{ $t('landing.sections.logo.serverNameWhite')
                }}<span class="prominent" :data-text="$t('landing.sections.logo.serverNamePrimary')">
                    {{ $t('landing.sections.logo.serverNamePrimary') }}</span
                >
            </div>
            <div class="text-landing-subtitle2 q-my-md q-px-lg">
                {{ $t('landing.sections.logo.serverSubtitle') }}
            </div>

            <!-- #region buttons -->
            <div class="button-wrapper">
                <LandingButton
                    :label="$t('landing.sections.logo.playNow')"
                    class="q-my-md q-py-lg hoverable"
                    @click="joinFiveM"
                />
                <LandingButton class="q-py-sm" :class="getStatus">
                    <LandingOnlineDot :status="getStatus" />
                    {{
                        getStatus !== 'online' && !pending
                            ? 'Server offline'
                            : `${data?.players || 0} / ${data?.maxPlayers || 32}`
                    }}
                </LandingButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();

const joinFiveM = () => {
    window.open(`fivem://connect/${config.public.fivemJoinUrl}`);
};

const { data, pending, error, refresh } = useLazyFetch('/api/status', { server: false });

const getStatus = computed(() => {
    if (pending.value) return 'pending';

    if (error.value) return 'offline';

    return data.value.status;
});

let intervall = null;

onMounted(() => {
    intervall = setInterval(refresh, 60 * 1000);
});

onBeforeUnmount(() => {
    clearInterval(intervall);
});
</script>

<style lang="scss" scoped>
.section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 122px;
    margin-top: 61px;

    @include breakpoint('xl') {
        margin-bottom: 0;
        margin-top: 127px;
    }

    .top-container {
        margin-top: -50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;

        @include breakpoint('xl') {
            display: grid;
            grid-template-columns: minmax(auto, 350px) minmax(auto, 1000px) minmax(auto, 350px);
            grid-template-areas: 'play logo online';
            justify-content: center;
            justify-items: center;

            @include breakpoint('xxl') {
                grid-template-columns: minmax(auto, 350px) minmax(auto, 1500px) minmax(auto, 350px);
            }

            .header-container {
                grid-area: play;
                display: block !important;
                max-width: 350px;
            }

            .logo-container {
                grid-area: logo;
            }

            .online-container {
                grid-area: online;
                display: grid !important;
                width: 100%;

                .box {
                    width: 190px;
                    height: 129px;
                    justify-self: flex-end;
                    transform: translateY(-50%);

                    .top {
                        height: 82px;
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        border-width: 1px;
                        border-style: solid;
                        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                        overflow: hidden;
                        background: rgba($primary, 0.05);
                        border-image: linear-gradient(180deg, $primary 0%, rgba($primary, 0) 100%) 1;

                        &::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 50%;
                            transform: translate(-50%, -100%);
                            width: 75%;
                            height: 100%;
                            filter: blur(150px);
                            background: $primary;
                        }

                        .text {
                            font-family: $font-gilroy-bold;
                            font-weight: 400;
                            font-size: 34px;
                            line-height: 42px;
                        }
                    }

                    .bottom {
                        height: 47px;
                        background: $primary;
                        box-shadow: 0px 1px 55px rgba($primary, 0.55);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: rgba(0, 0, 0, 0.4);
                    }
                }
            }
        }

        .header-container {
            display: none;
        }

        .logo-container {
            display: grid;
            align-items: start;
            justify-items: center;
            position: relative;

            * {
                grid-column-start: 1;
                grid-row-start: 1;
            }

            .logo {
                filter: drop-shadow(0px 1.6px 100px $primary);
                // background-image: url(../../../assets/imgs/logo/logo_traced.svg);
                background-size: 80% auto;
                background-repeat: no-repeat;
                background-position: 50% 80%;
                width: 100%;
            }

            .hero-header {
                width: 90%;
                transform: translateY(50%);
            }
        }

        .online-container {
            display: none;
        }
    }

    .display-wrapper {
        display: grid;
        justify-items: center;

        @include breakpoint('xl') {
            display: none;
        }

        .button-wrapper {
            max-width: 500px;
            width: 100%;
            display: grid;
            justify-items: center;
        }
    }
}
</style>
