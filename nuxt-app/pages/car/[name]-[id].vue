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
})

definePageMeta({
    layout: 'carcustom'
});

</script>

<template>
    <div>
        <CarDetailHero :car="car"/>
        <CarDetailAttributes :features="car.features"/>
        <CarDetailDescription :description="car.description"/>
        <CarDetailContact />
    </div>
</template>