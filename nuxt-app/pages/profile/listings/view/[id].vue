<script setup>

    const route = useRoute();

    definePageMeta({
        layout: "carcustom"
    });

    const { data: messages }  = await useFetch(`/api/car/listings/${route.params.id}/message`);

</script>

<template>
    <div class="rounded shadow mt-20">
        <CarMessageCard :messages="messages"/>
    </div>
</template>