<script setup lang="ts">
const config = useRuntimeConfig();
const cookie = useCookie('city');
if (!cookie.value) cookie.value = "Toronto";

const input = ref('');
const background = ref('');
const search = ref(cookie.value);

console.log(config.WEATHER_APP_SECRET)

const {
    data: city,
    error
} = useAsyncData("city", async () => {
    let response;
    try {
        response = await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${config.public.WEATHER_APP_SECRET}&units=metric`);

        cookie.value = search.value;
        const temp = response.main.temp;

        if (temp <= -10) {
            background.value = "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
        } else if (temp > -10 && temp <= 0) {
            background.value = "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
        } else if (temp > 0 && temp <= 10) {
            background.value = "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80";
        } else {
            background.value = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3546&q=80";
        }

    } catch (error) {

    }
    return response;
}, {
    watch: [search]
});

let today = new Date();
today = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});

const searchWeater = () => {
    const formatedSearch = input.value.trim().split(' ').join('+');
    search.value = formatedSearch;
    input.value = "";
}

const goBack = () => {
    search.value = cookie.value;
};

</script>

<template>
    <div v-if="city" class="h-screen relative overflow-hidden">
        <img :src="background" alt="">
        <div class="absolute w-full h-full top-0 bg-black bg-opacity-50 overlay"></div>
        <div class="absolute w-full h-full top-0 p-48">
            <div class="flex justify-between">
                <div class="">
                    <h1 class="text-7xl text-white">{{ city.name }}</h1>
                    <p class="font-extralight text-2xl mt-2 text-white">{{ today }}</p>
                    <img :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`" class="w-52 icon" />
                </div>
                <div>
                    <p class="font-extralight text-7xl mt-2 text-white">{{ city.main.temp }}°</p>
                </div>
            </div>
            <div class="mt-10">
                <input v-model="input" type="text" name="" id="" class="w-1/2 h-10 pl-3" placeholder="Search a city">
                <button class="bg-sky-400 w-20 text-white h-10" @click="searchWeater">Search</button>
            </div>
        </div>
    </div>
    <div v-else class="p-10">
        <h1 class="text-7xl">Oops, we can't find that city</h1>
        <button class="mt-5 bg-sky-400 px-10 w-50 text-white h-10" @click="goBack">
            Go Back
        </button>
    </div>
</template>

<style scoped></style>