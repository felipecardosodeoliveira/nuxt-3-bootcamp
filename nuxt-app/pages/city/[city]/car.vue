<script setup>

const route = useRoute();
const { toTitleCase } = useUtilities();
const error = useError();

useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : "Cars"} in  ${toTitleCase(route.params.city)}`
});

definePageMeta({
    layout: 'carcustom'
});

const handleError = () => {
    clearError({
        redirect: '/'
    });
}

</script>

<template>
    <div>
        <div class="mt-32 flex">
            <NuxtErrorBoundary>
                <CarSidebar />
                <NuxtPage />
                <template #error="{ error }">
                    <div class="text-center mx-auto flex flex-col">
                        <h1>Something went wrong</h1>
                        {{ error }}
                        <div>
                            <button @click="handleError" class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white">
                                Go Back
                            </button>
                        </div>
                    </div>
                </template>
            </NuxtErrorBoundary>
        </div>
    </div>
</template>