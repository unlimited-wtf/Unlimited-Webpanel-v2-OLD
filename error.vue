<template>
    <div>
        <component :is="resolverErrorComponent" />
        <ImagesBackgroundShape />
    </div>
</template>

<script setup>
const error = useError();

const Error404 = resolveComponent('Error404');

const resolverErrorComponent = computed(() => {
    switch (error.value?.statusCode) {
        case 404:
            return Error404;
        default:
            return Error404;
    }
});


</script>
