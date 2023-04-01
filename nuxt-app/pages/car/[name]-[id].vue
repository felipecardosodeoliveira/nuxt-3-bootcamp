<script setup>

const route = useRoute();

const user = useSupabaseUser();

const { toTitleCase } = useUtilities();

useHead({
    title: `${toTitleCase(route.params.name)}`
});

const { data: car } = await useFetchCar(route.params.id);

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