<script setup>
const { makes } = useCars();

const modal = ref({
    make: false,
    location: false,
    price: false
});

const city = ref('');

const priceRange = ref({
    min: 0,
    max: 0
})

const route = useRoute();
const router = useRouter();


const priceRangeText = computed(() => {
    const { minPrice, maxPrice } = route.query;

    if (!minPrice && !maxPrice) {
        return "Any"

    } else if (!minPrice && maxPrice) {
        return `< $${maxPrice}`;

    } else if (minPrice && !maxPrice) {
        return `< $${minPrice}`;

    } else {
        return `$${minPrice}-$${maxPrice}`;

    }
})

const updateModal = (key) => {
    modal.value[key] = !modal.value[key];
}

const onChangeLocation = () => {
    if (!city.value) return;
    if (!isNaN(parseInt(city.value))) {
        throw createError({
            staturCode: 400,
            message: 'Invalid city format'
        });
        return
    }
    updateModal('location');
    navigateTo(`/city/${city.value}/car/${route.params.make}`);
    city.value = "";
}

const onChangeMake = (make) => {
    updateModal('make');
    // router.push({
    //     query: {
    //         make: make,
    //     }
    // })
    // console.log(router)
    navigateTo(`/city/${route.params.city}/car/${make}`);
}

const onChangePrice = () => {
    updateModal('price');

    if (priceRange.value.min && priceRange.value.max) {
        if (priceRange.value.min < priceRange.value.max) {
            router.push({
                query: {
                    minPrice: priceRange.value.min,
                    maxPrice: priceRange.value.max
                }
            })
        }
    }
}

</script>

<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px] relative">
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Location </h3>
            <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
                {{ route.params.city }}
            </h3>
        </div>

        <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
            <input type="text" class="border p-1 rounded" v-model="city">
            <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" @click="onChangeLocation">
                Apply
            </button>
        </div>

        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Make</h3>
            <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
                {{ route.params.make || 'any' }}
            </h3>
            <div v-if="modal.make"
                class="absolute border shadow left-56 p-5 top-1 w-[600px] flex justify-between flex-wrap bg-white">
                <h4 @click="onChangeMake(make)" v-for="make in makes" :key="make" class="w-1/3">
                    <span>
                        {{ make }}
                    </span>
                </h4>
            </div>
        </div>

        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Price</h3>
            <h3 @click="onChangePrice" class="text-blue-400 capitalize">
                {{ priceRangeText }}
            </h3>
            <div v-if="modal.price"
                class="absolute border shadow left-56 p-5 top-1 w-[600px] flex justify-between flex-wrap bg-white">
                <input class="border p-1 rounded" type="number" placeholder="min" v-model="priceRange.min">
                <input class="border p-1 rounded" type="number" placeholder="min" v-model="priceRange.max">
                <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" @click="onChangePrice">Apply</button>
            </div>
        </div>
    </div>
</template>