<template>
  <div>
    <!-- NAVBAR -->
    <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
      <a href="" class="text-3xl font-mono">cartrader</a>
    </header>
    <!-- NAVBAR -->

    <!-- HOME HERO -->
    <div
      class="relative h-screen w-100 bg-no-repeat bg-bottom bg-cover bg-[url('https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')]">
      <div class="z-10 absolute w-full h-full flex justify-center items-center">
        <div class="text-center w-1/1">
          <h1 class="text-7xl font-serif mb-10 text-white">Encontre seu carro</h1>
          <!-- HOME SEARCH BAR -->
          <div
            class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
            <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
              placeholder="Pesquise por cidade..." />
            <button class="bg-sky-500 px-10 text-white">Buscar</button>
          </div>
          <!-- HOME SEARCH BAR -->
        </div>
      </div>
      <div class="-z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>
    <!-- HOME HERO -->

  </div>
</template>
