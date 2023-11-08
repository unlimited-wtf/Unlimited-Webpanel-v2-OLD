<template>
    <div class="section-wrapper">
        <div class="whitelist-items">
            <div class="top-header">
                <div class="text-landing-header">
                    {{ $t('landing.sections.whitelist.headerWhite') }}
                    <span class="prominent" :data-text="$t('landing.sections.whitelist.headerPrimary')">{{
                        $t('landing.sections.whitelist.headerPrimary')
                    }}</span>
                </div>
                <div class="text-landing-subtitle2 q-my-md">
                    {{ $t('landing.sections.whitelist.headerSubtitle') }}
                </div>
            </div>

            <div class="item">
                <div class="header text-uppercase">{{ $t('landing.sections.whitelist.step1Header') }}</div>

                <div class="img-container">
                    <img src="@/assets/icons/user.svg" alt="Userpanel-Icon" />
                </div>

                <div class="bottom">
                    <div class="text-landing-subtitle text-uppercase q-pt-md">
                        {{ $t('landing.sections.whitelist.step1') }}
                    </div>
                    <div class="text-landing-subtitle2 q-px-md q-pb-lg">
                        {{ $t('landing.sections.whitelist.step1Text') }}
                    </div>
                </div>

                <div class="rect">
                    <img src="@/assets/imgs/rectangles.svg" alt="Rect" />
                </div>
            </div>

            <div class="item">
                <div class="header text-uppercase">{{ $t('landing.sections.whitelist.step2Header') }}</div>

                <div class="img-container">
                    <img src="@/assets/icons/whitelist.svg" alt="Userpanel-Icon" />
                </div>

                <div class="bottom">
                    <div class="text-landing-subtitle text-uppercase q-pt-md">
                        {{ $t('landing.sections.whitelist.step2') }}
                    </div>
                    <div class="text-landing-subtitle2 q-px-md q-pb-lg">
                        {{ $t('landing.sections.whitelist.step2Text') }}
                    </div>
                </div>

                <div class="rect">
                    <img src="@/assets/imgs/rectangles.svg" alt="Rect" />
                </div>
            </div>

            <div class="item">
                <div class="header text-uppercase">{{ $t('landing.sections.whitelist.step3Header') }}</div>

                <div class="img-container">
                    <img src="@/assets/icons/join.svg" alt="Userpanel-Icon" />
                </div>

                <div class="bottom">
                    <div class="text-landing-subtitle text-uppercase q-pt-md">
                        {{ $t('landing.sections.whitelist.step3') }}
                    </div>
                    <div class="text-landing-subtitle2 q-px-md q-pb-lg">
                        {{ $t('landing.sections.whitelist.step3Text') }}
                    </div>
                </div>

                <div class="rect">
                    <img src="@/assets/imgs/rectangles.svg" alt="Rect" />
                </div>
            </div>

            <img class="human-with-car gt-sm" src="@/assets/imgs/human-with-car.webp" alt="Human with Car" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 40px 0 40px;
    position: relative;
    overflow: hidden;
    backdrop-filter: brightness(60%);

    .top-header {
        padding-left: 12px;
        padding-right: 12px;

        // for larger screens
        @include breakpoint('md') {
            grid-area: header;
            justify-self: start;
            padding: 0;
            display: flex;
            flex-direction: column;
            max-width: 550px;

            text-align: left;
        }

        // ellipse
        &:after {
            position: absolute;
            filter: blur(387.5px);
            content: '';
            width: 30%;
            height: 30%;
            left: 50%;
            transform: translateX(-50%);

            @supports not (-moz-appearance: none) {
                background-color: rgba($primary, 0.55);
            }
        }
    }

    .whitelist-items {
        display: grid;
        gap: 18px;
        width: 100%;
        justify-items: center;
        justify-content: center;
        padding-bottom: 100px;
        margin-top: 100px;

        @include breakpoint('md') {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-areas:
                'header header header'
                '. . .';
            gap: 36px;
            padding-bottom: 220px;
            padding-top: 100px;
            margin-top: 0;
        }

        .item {
            z-index: 5;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(255, 255, 255, 0.05);
            width: 100%;
            max-width: 400px;
            overflow: hidden;

            .header {
                font-family: $font-drukcyr-medium;
                margin: 35px 0 35px 0;
                font-size: 48px;
                line-height: 60px;
                background: radial-gradient(63.93% 63.93% at 50% 50%, #eaeaea 0%, #4d4d4d 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .img-container {
                padding-top: 50px;
                padding-bottom: 50px;
                height: fit-content;

                img {
                    width: 100%;
                    max-width: 200px;
                }
            }

            .bottom {
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.05);
            }

            .rect {
                position: absolute;
                top: -22%;
                left: 50%;

                img {
                    width: 150%;
                    transform: translateX(-50%);
                }
            }
        }

        .human-with-car {
            position: absolute;
            bottom: 0;
            right: 0;
            filter: drop-shadow(0px 4px 250px rgba(153, 6, 29, 0.55));
            z-index: 1;
            transform: translateY(35%);
            width: 100%;
            max-width: 1350px;
        }
    }
}
</style>
