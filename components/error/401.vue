<template>
    <div class="absolute-center column items-center">
        <h3 class="text-weight-medium q-mb-md">401</h3>
        <strong class="text-h5">{{ $t('error.notAuthorized') }} 🔐</strong>
        <div class="q-my-md text-subtitle1 text-center">{{ $t('error.notAuthorizedText') }}</div>
        <q-btn no-caps class="q-mt-md" color="primary" @click="handleError" :label="$t('error.back')" />
    </div>
</template>

<script setup>
const { status } = useAuth();

const handleError = () => {
    const dest = status.value === 'authenticated' ? '/ucp' : '/';

    clearError({ redirect: dest });
};
</script>
