export default async (id) => {
    const { data, error, refresh} = await useFetch(`/api/car/${id}`);

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable to fetch car with id " + id
        });
    }

    return { data, refresh };
}