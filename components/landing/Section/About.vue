<template>
    <div class="section-wrapper">
        <div class="max-width-container">
            <div class="top-header q-px-lg">
                <div class="text-landing-header">
                    {{ $t('landing.sections.about.headerWhite') }}
                    <span class="prominent" :data-text="$t('landing.sections.about.headerPrimary')">
                        {{ $t('landing.sections.about.headerPrimary') }}</span
                    >
                </div>
                <div class="text-landing-subtitle2 q-my-md">
                    {{ $t('landing.sections.about.headerSubtitle') }}
                </div>
            </div>

            <div class="about-items q-my-md">
                <div class="item reversed text-right right">
                    <div class="title text-landing-subtitle text-uppercase">
                        {{ $t('landing.sections.about.subtitle1Header') }}
                    </div>
                    <div class="content text-landing-subtitle2" id="xxx">
                        {{ $t('landing.sections.about.subtitle1Text') }}
                    </div>
                    <div class="bar q-px-md">
                        {{ '/'.repeat(35) }}
                    </div>
                </div>
                <div class="item text-left left q-mt-xl">
                    <div class="title text-landing-subtitle text-uppercase">
                        {{ $t('landing.sections.about.subtitle2Header') }}
                    </div>
                    <div class="content text-landing-subtitle2" id="xxx">
                        {{ $t('landing.sections.about.subtitle2Text') }}
                    </div>
                    <div class="bar q-px-md">
                        {{ '/'.repeat(35) }}
                    </div>
                </div>
            </div>

            <img class="biker-image lt-lg" src="@/assets/imgs/biker.webp" alt="Biker Girl" />

            <div class="position-wrapper gt-md">
                <div class="circles gt-md">
                    <div class="big-grey">
                        <img class="small-grey" src="@/assets/imgs/small_circle_grey.svg" alt="small grey circle" />
                    </div>

                    <img class="big-white" src="@/assets/imgs/big_circle_white.svg" alt="big white circle" />
                </div>
                <img class="biker-image" src="@/assets/imgs/biker.webp" alt="Biker Girl" />
            </div>
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
    backdrop-filter: brightness(60%);
    overflow: hidden;

    .max-width-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1920px;
        align-items: flex-end;
        position: relative;

        @include breakpoint('lg') {
            margin-bottom: 100px;
        }

        // header wrapper
        .top-header {
            position: relative;
            z-index: 5;
            margin-top: 100px;
            align-self: center;

            // for larger screens
            @include breakpoint('lg') {
                display: flex;
                flex-direction: column;
                max-width: 450px;

                // right side
                align-items: flex-end;
                align-self: flex-end;
                text-align: right;
                padding-right: 60px;
            }

            @include breakpoint('xl') {
                margin-top: 100px;
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

        // content
        .about-items {
            position: relative;
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            @include breakpoint('lg') {
                align-self: end;
                max-width: 598px;
            }

            // each row
            .item {
                display: grid;
                grid-template-columns: min-content auto;
                grid-template-rows: min-content auto;
                grid-template-areas:
                    'bar title'
                    'bar content';
                max-width: 550px;
                padding-right: 12px;

                &.reversed {
                    grid-template-columns: auto min-content;
                    grid-template-areas:
                        'title bar'
                        'content bar';
                    padding-left: 12px;
                }

                @include breakpoint('lg') {
                    &.right {
                        align-self: end;
                    }
                    &.left {
                        align-self: start;
                    }
                }

                .title {
                    grid-area: title;
                }

                .content {
                    grid-area: content;
                }

                .bar {
                    grid-area: bar;
                    display: flex;
                    justify-content: center;

                    background: radial-gradient(50% 50% at 50% 50%, #07e0e6 0%, rgba(7, 224, 230, 0) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    writing-mode: vertical-rl;
                }
            }
        }

        .biker-image {
            width: 100%;
            margin-top: 40px;
            max-width: 500px;
            align-self: flex-start;
            transform: translateX(-20%);

            @include breakpoint('lg') {
                position: absolute;
                bottom: 0;
                max-width: 700px;
                left: 0;
            }

            @include breakpoint('xl') {
                max-width: 800px;
            }

            @include breakpoint('xxl') {
                max-width: 1000px;
            }
        }

        .position-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100vh;
            height: 100vh;
            transform: translateY(100px);

            .biker-image {
                width: 100%;
                margin-top: 40px;
                max-width: 500px;
                align-self: flex-start;
                transform: translateX(-20%);

                @include breakpoint('lg') {
                    position: absolute;
                    bottom: 0;
                    max-width: 800px;
                    left: 0;
                }

                @include breakpoint('xxl') {
                    max-width: 1000px;
                }
            }

            .circles {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100vh;
                height: 100vh;
                user-select: none;

                * {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                }

                @include breakpoint('lg') {
                    transform: translate(-250px, 180px);

                    .big-grey {
                        max-width: 850px;
                        max-height: 850px;
                        height: 100%;
                        background-image: url('@/assets/imgs/big_circle_grey.svg');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;

                        .small-grey {
                            width: 62%;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }

                    .big-white {
                        max-width: 850px;
                        max-height: 850px;
                        height: 100%;
                        animation-name: spin;
                        animation-duration: 15s;
                        animation-iteration-count: infinite;
                        animation-timing-function: linear;

                        @keyframes spin {
                            from {
                                -webkit-transform: rotate(0deg);
                                transform: rotate(0deg);
                            }

                            to {
                                -webkit-transform: rotate(360deg);
                                transform: rotate(360deg);
                            }
                        }
                    }
                }

                @include breakpoint('xl') {
                    transform: translate(-350px, 350px);

                    .big-grey {
                        max-width: 1050px;
                        max-height: 1050px;
                    }

                    .big-white {
                        max-width: 1050px;
                        max-height: 1050px;
                    }
                }

                @include breakpoint('xxl') {
                    transform: translate(-350px, 350px);

                    .big-grey {
                        max-width: 1250px;
                        max-height: 1250px;
                    }

                    .big-white {
                        max-width: 1250px;
                        max-height: 1250px;
                    }
                }
            }
        }
    }
}
</style>
