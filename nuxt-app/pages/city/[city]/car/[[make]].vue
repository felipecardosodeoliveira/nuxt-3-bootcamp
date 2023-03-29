<script setup>
const route = useRoute();
const maxPrice = computed(() => route.query.maxPrice)
const minPrice = computed(() => route.query.minPrice)
const { data: cars, refresh } = await useFetchCars(route.params.city, {
    minPrice,
    maxPrice,
    make: route.params.make,
});

watch(
    () => route.query,
    () => refresh()
);

</script>

<template>
    <div>
        <CarCards v-if="cars.length" :cars="cars" />
        <div v-else class="text-red-700"> There's no car's in {{ route.params.city }}</div>
    </div>
</template>