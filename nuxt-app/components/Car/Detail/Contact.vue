<script setup>

const messageError = ref("");

const route = useRoute();

const message = reactive({
    name: "",
    email: "",
    phone: "",
    message: ""
});

const isDisableButton = computed(() => {
    for (let key in message.value) {
        if (!message.value[key]) return true;
    }
    return false
});

const handleSubmit = async () => {
    const body = {
        ...message
    }

    try {
        const req = await $fetch(`http://localhost:3000/api/car/listings/${route.params.id}/message`, {
            method: "post",
            body: body
        });

        if (req.statusCode == 412) {
            messageError.value = req.statusMessage;
        } else {

            message.value = {
                name: "",
                email: "",
                phone: "",
                message: ""
            }

            navigateTo("/profile/listings")
        }

    } catch (error) {
        messageError.value = error.statusMessage;

    }
}

</script>

<template>
    <div class="mt-10">
        <p class="bg-red-700 text-white p-3 mb-2" v-if="messageError"> {{ messageError }}</p>
        <div class="flex w-[600px] justify-between">
            <input v-model="message.name" type="text" class="border p-1" placeholder="Name" />
            <input v-model="message.email" type="text" class="border p-1" placeholder="Email" />
            <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" />
        </div>
        <div class="flex mt-4 w-[600px]">
            <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message"></textarea>
        </div>
        <button :disabled="isDisableButton" @click="handleSubmit" class="bg-blue-400 text-white px-10 py-3 rounded mt-4">
            Submit
        </button>
    </div>
</template>