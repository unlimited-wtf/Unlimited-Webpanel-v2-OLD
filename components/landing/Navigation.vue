<template>
    <header>
        <nav :class="{ scrolled: isScrolled, 'bg-black': drawer }">
            <div class="grid" :class="{ 'row justify-end': drawer }">
                <LandingLogoText v-if="!drawer" />

                <ul id="navigation">
                    <li v-for="(section, index) in navLinks" :class="{ active: activeSection === index }">
                        <a href="#" @click.prevent="jumpToSection(index)">{{ section.label }}</a>
                    </li>
                </ul>

                <div class="ucp-btn" @click="navigateTo('/ucp')">{{ $t('landing.loginButton') }}</div>

                <div class="lt-md flex mobile-buttons">
                    <LandingDrawerUCPButton class="q-mr-sm" @click="navigateTo('/ucp')" />
                    <LandingDrawerToggle @click="drawer = !drawer" />
                </div>
            </div>

            <div v-if="drawer" class="drawer">
                <LandingButton
                    class="text-center text-white q-py-lg q-my-md transparent full-width"
                    v-for="(link, index) in navLinks"
                    :label="link.label"
                    @click.prevent="jumpToSection(index), (drawer = false)"
                />
                <LandingDrawerImage />
            </div>
        </nav>
    </header>
</template>

<script setup>
const { t } = useI18n();

const navLinks = [
    { label: t('landing.navigation.start'), section: 'home' },
    { label: t('landing.navigation.project'), section: 'project' },
    { label: t('landing.navigation.features'), section: 'features' },
    { label: t('landing.navigation.whitelist'), section: 'whitelist' },
    { label: t('landing.navigation.faq'), section: 'faq' }
];

const drawer = ref(false);
const isScrolled = ref(false);
const activeSection = ref(0);

watch(drawer, (newValue) => {
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];

    if (newValue) {
        body.classList.add('noscroll');
        html.classList.add('noscroll');
    } else {
        body.classList.remove('noscroll');
        html.classList.remove('noscroll');
    }
});

const resize = () => {
    const width = document.body.clientWidth;

    if (width >= 1024) drawer.value = false;
};

const jumpToSection = (index) => {
    activeSection.value = index;

    const element = document.getElementById(`section-${index}`);
    const y = element.getBoundingClientRect().top + window.pageYOffset - (index === 0 ? 127 : 100);

    setTimeout(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
    }, 10);
};

let delay = null;
const changeIsScrolled = () => {
    isScrolled.value = window.pageYOffset > 127;

    if (document.body.clientWidth < 1000) return;

    if (!isNaN(delay)) {
        clearTimeout(delay);
    }

    delay = setTimeout(checkVisibleSection, 100);
};

const checkVisibleSection = () => {
    const nav = document.getElementById('navigation');
    const sections = document.querySelector('.sections').children;

    let minor = window.innerHeight,
        section = null;

    [].forEach.call(sections, function (item) {
        var offset = item.getBoundingClientRect();

        if (Math.abs(offset.top) < minor) {
            minor = Math.abs(offset.top);

            section = item;
        }
    });

    if (section) {
        activeSection.value = Number(section.dataset.section);
    }
};

onMounted(() => {
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', changeIsScrolled);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
    window.removeEventListener('scroll', changeIsScrolled);
});
</script>

<style scoped lang="scss">
nav {
    display: flex;
    justify-content: center;
    padding: 0 24px 0 24px;
    height: 61px;
    position: relative;
    z-index: 99;

    .drawer {
        position: absolute;
        top: 61px;
        width: 100%;
        height: 100vh;
        background: $black;
        overflow: hidden;
    }

    .mobile-buttons {
        justify-self: flex-end;
    }

    @include breakpoint('md') {
        position: fixed;
        width: calc(100%);
        height: 127px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.13);

        &.scrolled {
            backdrop-filter: blur(10px);
            background-color: rgba($black, 0.5);
        }
    }

    .grid {
        display: grid;
        grid-template-columns: auto auto;
        width: 100%;
        max-width: 1700px;
        align-items: center;

        @include breakpoint('md') {
            grid-template-columns: auto auto auto;
        }

        @include breakpoint('xxl') {
            max-width: 2200px;
        }

        ul {
            display: none;
            align-items: center;
            justify-content: center;
            gap: 60px;
            list-style: none;
            margin: 0;

            @include breakpoint('md') {
                display: flex;
            }

            a {
                color: rgba(255, 255, 255, 0.25);
                text-decoration: none;
            }

            li {
                &.active {
                    position: relative;

                    ::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 3px;
                        bottom: -54px;
                        left: 0;
                        display: block;
                        background: $primary;
                        box-shadow: 0px 0px 18px $primary;
                    }

                    a {
                        color: $white;
                    }
                }
            }
        }

        .ucp-btn {
            position: relative;
            justify-self: flex-end;
            opacity: 0.55;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            box-sizing: border-box;
            width: 175px;
            height: 47px;
            display: none;
            justify-content: center;
            align-items: center;
            background: radial-gradient(
                52.67% 1008.9% at 50% 50%,
                rgba(244, 244, 244, 0.25) 0%,
                rgba(232, 232, 232, 0) 100%
            );
            overflow: hidden;

            @include breakpoint('md') {
                display: flex;
            }

            &::after {
                content: '';
                position: absolute;
                width: 276px;
                height: 276px;
                left: 28px;
                top: 22px;
                filter: blur(74.5px);
                background: #efefef;
            }

            &:hover {
                background: radial-gradient(
                    52.67% 1008.9% at 50% 50%,
                    rgba(244, 244, 244, 0.55) 0%,
                    rgba(232, 232, 232, 0) 100%
                );
                cursor: pointer;
                border: 1px solid grey;
            }
        }
    }
}
</style>
