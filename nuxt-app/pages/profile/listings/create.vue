<script setup>

definePageMeta({
    layout: "carcustom"
});

const { makes } = useCars();

const user = useSupabaseUser();

const supabase = useSupabaseClient();

const info = useState('addInfo', () => {
    return {
        make: "",
        model: "",
        year: "",
        miles: "",
        price: "",
        city: "",
        seats: "",
        features: "",
        description: "",
        image: null,
    }
});

const onChangeInput = (data, name) => {
    info.value[name] = data;
}

const message = ref("");

const inputs = [
    {
        id: -1,
        title: "Price *",
        name: "price",
        placeholder: "10000",
    },
    {
        id: 1,
        title: "Model *",
        name: "model",
        placeholder: "Civic",
    },
    {
        id: 2,
        title: "Year *",
        name: "year",
        placeholder: "2019",
    },
    {
        id: 3,
        title: "Miles *",
        name: "miles",
        placeholder: "10000",
    },
    {
        id: 4,
        title: "City *",
        name: "city",
        placeholder: "Austin",
    },
    {
        id: 5,
        title: "Number of Seats *",
        name: "seats",
        placeholder: "5",
    },
    {
        id: 6,
        title: "Features *",
        name: "features",
        placeholder: "Leather Interior, No Accidents",
    },
];

const isDisableButton = computed(() => {
    for (let key in info.value) {
        if (!info.value[key]) return true;
    }

    return false
});

const handleSubmit = async () => {
    const fileName = Math.floor(Math.random() * 10000000000000000000000);
    const { data, error } = await supabase.storage.from("images").upload("public/" + fileName, info.value.image)
    
    if (error) {
        return message.value = "Cannot upload iimage";
    }
    
    const body = {
        ...info.value,
        features: info.value.features.split(','),
        city: info.value.city.toLocaleLowerCase(),
        numberOfSeats: parseInt(info.value.seats),
        miles: parseInt(info.value.miles),
        price: parseInt(info.value.price),
        year: parseInt(info.value.year),
        name: info.value.model + " " + info.value.make,
        listerId: user.value.id,
        image: data.path
    }

    delete body.seats;

    try {
        const req = await $fetch(`http://localhost:3000/api/car/listings`, {
            method: "post",
            body: body
        });

        if (req.statusCode == 412) {
            message.value = req.statusMessage;
            await supabase.storage.from("images").remove(data.path);

        } else {
            navigateTo("/profile/listings");
        }

    } catch (error) {
            message.value = req.statusMessage;
            await supabase.storage.from("images").remove(data.path);

    }
}

</script>
<template>
    <div>
        <div class="mt-24">
            <h1 class="text-6xl">
                Create a new listing
            </h1>
        </div>
        <div class="">
            <form action="" class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
                <CarAdSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput" />
                <CarAdInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name"
                    :placeholder="input.placeholder" @change-input="onChangeInput" />
                <CarAdTextArea title="Description *" name="description" placeholder="" @change-input="onChangeInput" />
                <CarAdImage @change-input="onChangeInput" />
                <div>
                    <button @click="handleSubmit" :disabled="isDisableButton" type="button" class="bg-blue-500 text-white py-2 px-7 mt-3">Send</button>
                </div>

            </form>
            <p class="bg-red-500 text-white " v-if="message"> {{ message }}</p>
        </div>
    </div>
</template>