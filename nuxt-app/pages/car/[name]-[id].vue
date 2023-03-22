<script setup>

const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();

useHead({
    title: `${toTitleCase(route.params.name)}`
});

const car = computed(() => {
    return cars.find(c => {
        return c.id === parseInt(route.params.id);
    })
});

// this is a server side error
if (!car.value) {
    throw createError({
        statusCode: 404,
        message: `Carro com o id ${route.params.id} não existe`
    })
}

definePageMeta({
    layout: 'carcustom'
});

</script>

<template>
    <div v-if="car">
        <CarDetailHero :car="car"/>
        <CarDetailAttributes :features="car.features"/>
        <CarDetailDescription :description="car.description"/>
        <CarDetailContact />
    </div>
</template>