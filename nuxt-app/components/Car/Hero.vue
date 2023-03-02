<script setup> 
    // import Searchbar from "./Searchbar.vue";
</script>

<template>
    <div
        class="relative h-screen w-100 bg-no-repeat bg-bottom bg-cover bg-[url('https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')]">
        <div class="z-10 absolute w-full h-full flex justify-center items-center">
            <div class="text-center w-1/1">
                <h1 class="text-7xl font-serif mb-10 text-white">Encontre seu carro</h1>
                <!-- HOME SEARCH BAR -->
               <CarSearchbar />
                <!-- HOME SEARCH BAR -->
            </div>
        </div>
        <div class="-z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>
</template>