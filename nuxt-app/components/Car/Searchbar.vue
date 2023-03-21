<script setup>
    const city = ref("");
    const cityError = ref();
    const router = useRouter();
    
    const handleSearch = () => {
        if (!city.value) {
            cityError.value = true;
            return;
        }
        navigateTo(`/city/${city.value}/car`);
    }

</script>

<template>
    <div
        class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input 
            v-model="city"
            type="text"
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
            :class="cityError ? 'border-red-50 border' : ''"
            placeholder="Pesquise por cidade..." />
        <button class="bg-sky-500 px-10 text-white" @click="handleSearch">Buscar</button>
    </div>
</template>