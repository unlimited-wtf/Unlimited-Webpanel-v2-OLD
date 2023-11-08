<template>
    <div class="section-wrapper q-px-lg">
        <div class="top-header">
            <div class="text-landing-header">
                <span class="prominent" :data-text="$t('landing.sections.faq.headerPrimary')">{{
                    $t('landing.sections.faq.headerPrimary')
                }}</span>
            </div>
            <div class="text-landing-subtitle2 q-my-md q-px-md" style="max-width: 500px">
                {{ $t('landing.sections.faq.headerSubtitle') }}
            </div>
        </div>

        <div class="faq-items text-left">
            <div
                v-for="(q, index) in FAQ"
                class="item"
                @click="opendQuestion === index ? (opendQuestion = null) : (opendQuestion = index)"
            >
                <div class="question text-landing-subtitle1 text-uppercase">
                    {{ q.question }}
                </div>
                <div class="button">
                    <img
                        :src="ArrowRight"
                        alt="Toggle Question"
                        :class="{
                            toggle: opendQuestion === index
                        }"
                    />
                </div>
                <Transition mode="out-in">
                    <div v-if="opendQuestion === index" class="answer text-landing-subtitle2">
                        {{ q.answer }}
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n();

import ArrowRight from '@/assets/icons/arrow-right.svg';

const FAQ = [
    {
        question: t('landing.sections.faq.question1'),
        answer: t('landing.sections.faq.answer1')
    },
    {
        question: t('landing.sections.faq.question2'),
        answer: t('landing.sections.faq.answer2')
    },
    {
        question: t('landing.sections.faq.question3'),
        answer: t('landing.sections.faq.answer3')
    }
];

const opendQuestion = ref(null);
</script>

<style lang="scss" scoped>
.section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .top-header {
        margin-top: 100px;
    }

    .faq-items {
        margin-top: 32px;
        margin-bottom: calc(32px + 100px);
        display: grid;
        width: 100%;
        max-width: 1200px;
        position: relative;

        &:after {
            // ellipse
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

        .item {
            max-width: 100%;
            background: rgba(255, 255, 255, 0.05);
            padding-top: 16px;
            display: grid;
            grid-template-columns: auto 116px;
            grid-template-areas:
                'question button'
                'answer answer';

            .question {
                grid-area: question;
                padding-left: 40px;
                padding-bottom: 16px;
            }

            .button {
                grid-area: button;
                margin: 0 40px 16px 16px;
                width: 60px;
                height: 60px;
                justify-self: flex-end;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid rgba(255, 255, 255, 0.15);

                &:hover {
                    cursor: pointer;
                }

                img.toggle {
                    transition-duration: 400ms;
                    transform: rotate(90deg);
                }
            }

            .answer {
                grid-area: answer;
                padding: 16px 40px 16px 40px;
                background: rgba(255, 255, 255, 0.15);
                color: rgba(255, 255, 255, 0.55);
            }
        }

        :nth-child(even) {
            background: rgba(255, 255, 255, 0.02);
        }

        // open
        //
    }

    .v-enter-active {
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }

    .v-leave-active {
        transition-duration: 0s;
    }

    .v-enter-to,
    .v-leave-from {
        height: fit-content;
        overflow: hidden;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        overflow: hidden;
        max-height: 0;
    }
}
</style>
