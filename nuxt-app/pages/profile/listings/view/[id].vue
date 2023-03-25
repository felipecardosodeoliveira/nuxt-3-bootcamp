<script setup>

    const route = useRoute();

    definePageMeta({
        layout: "carcustom"
    });


</script>

<template>
    <div class="rounded shadow mt-20">
        <CarMessageCard />
        <!-- {{  route.params.id }} -->
    </div>
</template>