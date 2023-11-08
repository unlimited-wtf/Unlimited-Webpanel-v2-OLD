<template>
    <div class="footer-wrapper">
        <div class="grid">
            <div class="trademark">
                <img class="q-mx-md" src="@/assets/imgs/logo/logo-trans-footer.webp" alt="Logo" />
                <div class="q-px-md">
                    <LandingLogoText />
                    <div class="text-landing-subtitle2">Copyright © {{ new Date().getFullYear() }}</div>
                </div>
            </div>
            <div class="links">
                <!--       
                <div class="link">
                    <div class="square"></div>
                    <a class="text-white" href="#">MyLink</a>
                </div>
                -->
            </div>
            <div class="discord" @click="openDiscordLink">
                <div class="text">
                    <div class="text-uppercase">Discord</div>
                    <div class="text-landing-subtitle2">.gg/{{ config.public.discordInvCode }}</div>
                </div>
                <img src="@/assets/icons/discord.svg" alt="Discord Logo" />
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();

const openDiscordLink = () => {
    window.open(config.public.discordUrl, '_blank');
};
</script>

<style lang="scss" scoped>
.footer-wrapper {
    position: absolute;
    backdrop-filter: brightness(60%);
    width: 100%;
    display: flex;
    justify-content: center;

    .grid {
        display: grid;
        width: 100%;
        max-width: 1700px;
        align-items: center;
        justify-items: center;
        padding: 50px 0 50px 0;
        gap: 50px;
        grid-template-areas:
            'trademark'
            'links'
            'discord';

        @include breakpoint('md') {
            gap: 0;
            grid-template-areas: 'trademark links discord';
        }

        @include breakpoint('xxl') {
            max-width: 2200px;
        }

        .trademark {
            grid-area: trademark;
            filter: drop-shadow(0px 4px 250px rgba($primary, 0.55));
            display: flex;

            img {
                width: 148px;
                height: 100%;
            }
        }

        .links {
            grid-area: links;
            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 20px 50px;
            margin: auto;

            @include breakpoint('lg') {
                gap: 20px 150px;
            }

            .square {
                width: 8px;
                height: 8px;
                background: $primary;
                box-shadow: 0px 0px 19px $primary;
                transform: rotate(45deg);
                margin-right: 18px;
            }

            .link {
                display: flex;
                align-items: center;

                a {
                    text-decoration: none;
                }
            }
        }

        .discord {
            grid-area: discord;
            border: 1px solid rgba(255, 255, 255, 0.15);
            width: 200px;
            height: 84px;
            display: flex;
            justify-content: space-between;
            padding: 0 25px 0 25px;
            align-items: center;
            cursor: pointer;

            .text {
                display: grid;
                align-items: center;

                :nth-child(2) {
                    line-height: 14px;
                }
            }

            img {
                height: 31px;
                width: 44px;
            }
        }
    }
}
</style>
