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


    <!-- CARS PAGE -->
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <div class="mt-32 flex">
        <!-- CAR SIDE BAR -->
        <div class="shadow border w-64 mr-10 z-30 h-[190px]">
          <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Location</h3>
            <h3 class="text-blue-400 capitalize">Toronto</h3>
            <!-- <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
              <input type="text" class="border p-1 rounded" />
              <button class="bg-blue-400 w-full mt-2 rounded text-white p-1">
                Apply
              </button>
            </div> -->
          </div>

          <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Make</h3>
            <h3 class="text-blue-400 capitalize">Toyota</h3>
          </div>

          <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Price</h3>
            <h3 class="text-blue-400 capitalize"></h3>
          </div>
        </div>
        <!-- CAR SIDE BAR -->

        <!-- CAR CARDS -->
        <div class="w-full">
          <!-- CAR CARD -->
          <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
            <div class="flex h-full">
              <img src="https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg" alt="" class="w-[300px] h-full" />
              <div class="p-4 flex flex-col">
                <div>
                  <h1 class="text-2xl text-blue-700">Volvo XC40</h1>
                  <p class="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <h1 class="mt-auto text-xl">$39,555</h1>
              </div>
            </div>
          </div>
          <!-- CAR CARD -->
        </div>
        <!-- CAR CARDS -->
      </div>
    </div>
    <!-- CARS PAGE -->


    <!-- CAR DETAIL PAGE -->
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <div>
        <!-- CAR HERO -->
        <div class="mt-10">
          <img src="https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg" class="w-full" alt="" />
          <h1 class="mt-10 text-4xl">Volvo 3XT</h1>
          <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
            <div class="flex">
              <p class="mr-2">5 seats</p>
              <p class="mr-2">|</p>
              <p class="mr-2">67,444 miles</p>
            </div>
            <div>
              <p class="font-bold text-2xl">$25,555</p>
            </div>
          </div>
        </div>
      </div>
      <!-- CAR HERO -->
      <!-- CAR ATTRIBUTES -->
      <div class="mr-10 mt-5 border-b pb-5">
        <div class="flex text-lg mt-2">
          <p class="rounded text-lime-800 mr-3">✔</p>
          <p>Leather Interior</p>
        </div>
      </div>
      <!-- CAR ATTRIBUTES -->
      <!-- CAR DESCRISPTION -->
      <div class="mt-5">
        <p class="mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
          consequuntur, et saepe sequi, ipsum quisquam iste autem quas vel aperiam
          laboriosam dolorum vero tempore placeat, asperiores alias magni. Nulla,
          dolores.
        </p>
      </div>
      <!-- CAR DESCRISPTION -->
      <!-- CAR CONTACT -->
      <div class="mt-10">
        <div class="flex w-[600px] justify-between">
          <input type="text" class="border p-1" placeholder="Name" />
          <input type="text" class="border p-1" placeholder="Email" />
          <input type="text" class="border p-1" placeholder="Phone" />
        </div>
        <div class="flex mt-4 w-[600px]">
          <textarea class="border p-1 w-full" placeholder="Message"></textarea>
        </div>
        <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4">
          Submit
        </button>
      </div>
      <!-- CAR CONTACT -->
    </div>
    <!-- CAR DETAIL PAGE   -->
  </div>
</template>
