<template>
    <div>
        <ImagesBackgroundShape />
        <component :is="resolverErrorComponent" />
    </div>
</template>

<script setup>
const error = useError();

const Error401 = resolveComponent('Error401');
const Error404 = resolveComponent('Error404');

const resolverErrorComponent = computed(() => {
    switch (error.value?.statusCode) {
        case 401:
            return Error401;
        case 404:
            return Error404;
        default:
            return Error404;
    }
});


</script>
