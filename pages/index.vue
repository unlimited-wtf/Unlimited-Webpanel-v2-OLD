<template>
    <div>
        <LandingNavigation />
        <div class="sections">
            <LandingSectionLogo id="section-0" data-section="0" />
            <LandingSectionAbout id="section-1" data-section="1" />
            <LandingSectionFeatures id="section-2" data-section="2" />
            <LandingSectionWhitelist id="section-3" data-section="3" />
            <LandingSectionFAQ id="section-4" data-section="4" />
        </div>
        <LandingFooter />
    </div>
</template>

<script setup>
definePageMeta({
    auth: {
        unauthenticatedOnly: false
    }
});
</script>

<style scoped>
.sections {
    display: grid;
}
</style>
