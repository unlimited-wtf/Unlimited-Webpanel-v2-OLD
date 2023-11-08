<template>
    <div class="section-wrapper q-px-lg">
        <div class="top-header">
            <div class="text-landing-header">
                {{ $t('landing.sections.features.headerWhite') }}
                <span class="prominent" :data-text="$t('landing.sections.features.headerPrimary')">{{
                    $t('landing.sections.features.headerPrimary')
                }}</span>
            </div>
            <div class="text-landing-subtitle2 q-my-md q-px-md">
                {{ $t('landing.sections.features.headerSubtitle') }}
            </div>
        </div>

        <div class="features-items q-px-md">
            <div class="item purple q-pa-md">
                <div class="img"></div>
                <div class="text-landing-subtitle text-uppercase">
                    {{ $t('landing.sections.features.feature1Header') }}
                </div>
                <div class="text-landing-subtitle2">
                    {{ $t('landing.sections.features.feature1Text') }}
                </div>
            </div>

            <div class="item orange image-right q-pa-md">
                <div>
                    <div class="text-landing-subtitle text-uppercase">
                        {{ $t('landing.sections.features.feature2Header') }}
                    </div>
                    <div class="text-landing-subtitle2">
                        {{ $t('landing.sections.features.feature2Text') }}
                    </div>
                </div>
                <div class="img"></div>
            </div>

            <div class="item blue image-right q-pa-md">
                <div>
                    <div class="text-landing-subtitle text-uppercase">
                        {{ $t('landing.sections.features.feature3Header') }}
                    </div>
                    <div class="text-landing-subtitle2">
                        {{ $t('landing.sections.features.feature3Text') }}
                    </div>
                </div>
                <div class="img"></div>
            </div>

            <div class="item green image-right q-pa-md">
                <div>
                    <div class="text-landing-subtitle text-uppercase">
                        {{ $t('landing.sections.features.feature4Header') }}
                    </div>
                    <div class="text-landing-subtitle2">
                        {{ $t('landing.sections.features.feature4Text') }}
                    </div>
                </div>
                <div class="img"></div>
            </div>

            <div class="item red image-right q-pa-md">
                <div>
                    <div class="text-landing-subtitle text-uppercase">
                        {{ $t('landing.sections.features.feature5Header') }}
                    </div>
                    <div class="text-landing-subtitle2">
                        {{ $t('landing.sections.features.feature5Text') }}
                    </div>
                </div>
                <div class="img"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .top-header {
        margin-top: 100px;

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

    .features-items {
        margin-top: 32px;
        margin-bottom: calc(32px + 100px);
        display: grid;
        gap: 24px;
        text-align: left;

        @include breakpoint('md') {
            grid-template-rows: auto auto 100px auto auto;
            grid-template-columns: auto auto auto auto auto;
            grid-template-areas:
                'way self self group group'
                'way self self group group'
                'way self self heists heists'
                'way performance performance heists heists'
                'way performance performance heists heists';
        }

        .item {
            min-height: 200px;
            box-sizing: border-box;
            position: relative;
            border-width: 1px;
            border-style: solid;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            overflow: hidden;
            max-width: 500px;

            &::before {
                content: '';
                position: absolute;
                background: url('@/assets/imgs/rectangles.svg');
                width: 100%;
                height: 100%;
                left: 50%;
                top: 0;
                transform: translateX(-50%);
                background-repeat: no-repeat;
                background-position: calc(100% + 120px) -60px;
                z-index: -1;
            }

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, -100%);
                width: 75%;
                height: 100%;
                filter: blur(150px);
            }

            .img {
                display: none;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 100%;
                height: 100%;
                content: '';
            }

            @include breakpoint('md') {
                display: flex;
                flex-direction: column;

                &::before {
                    background: none;
                }

                &.image-right {
                    display: grid;
                    align-items: flex-end;
                    grid-template-columns: auto 1fr;

                    .img {
                        justify-self: flex-end;
                        display: block;
                        margin: 0 -16px -16px 0;
                    }
                }
            }

            // colors
            &.purple {
                background: rgba($purple, 0.05);
                border-image: linear-gradient(180deg, $purple 0%, rgba($purple, 0) 100%) 1;

                &::after {
                    background: $purple;
                }

                @include breakpoint('md') {
                    grid-area: way;

                    .img {
                        display: block;
                        background-image: url('@/assets/imgs/features-1.webp');
                    }
                }
            }

            &.orange {
                position: relative;
                background: rgba($orange, 0.05);
                border-image: linear-gradient(180deg, $orange 0%, rgba($orange, 0) 100%) 1;

                &::after {
                    background: $orange;
                }

                @include breakpoint('md') {
                    grid-area: self;

                    .img {
                        background-image: url('@/assets/imgs/features-2.webp');
                        width: 192px;
                        height: 341px;
                    }
                }
            }

            &.blue {
                background: rgba($blue, 0.05);
                border-image: linear-gradient(180deg, $blue 0%, rgba($blue, 0) 100%) 1 1;

                &::after {
                    background: $blue;
                }

                @include breakpoint('md') {
                    grid-area: performance;

                    .img {
                        background-image: url('@/assets/imgs/features-3.webp');
                        width: 198px;
                        height: 245px;
                    }
                }
            }

            &.green {
                background: rgba($green, 0.05);
                border-image: linear-gradient(180deg, $green 0%, rgba($green, 0) 100%) 1;

                &::after {
                    background: $green;
                }

                @include breakpoint('md') {
                    grid-area: group;

                    .img {
                        background-image: url('@/assets/imgs/features-4.webp');
                        width: 371px;
                        height: 259px;
                    }
                }
            }

            &.red {
                background: rgba($red, 0.05);
                border-image: linear-gradient(180deg, $red 0%, rgba($red, 0) 100%) 1;

                &::after {
                    background: $red;
                }

                @include breakpoint('md') {
                    grid-area: heists;

                    .img {
                        background-image: url('@/assets/imgs/features-5.webp');
                        width: 312px;
                        height: 336px;
                    }
                }
            }
        }
    }
}
</style>
