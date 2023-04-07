<script setup lang="ts">
    import restaurants from "@/data/restaurants.json";

    const restaurantsOrganized = {
        first: [...restaurants].splice(0,25),
        last: [...restaurants].splice(25, 25)
    }

</script>

<template>
    <div class="table">
        <h1>Top 50: THE RANKING</h1>
        <div class="table-container">
            <div class="table-col">
                <RestaurantRow :isHeader="true" />
                <RestaurantRow
                     v-for="(restaurant, index) in restaurantsOrganized.first"
                     :key="restaurant.id"
                     :rank="restaurant.rank"
                     :name="restaurant.name"
                     :index="index"
                />
            </div>
            <div class="table-col">
                <RestaurantRow :isHeader="true" />
                <RestaurantRow 
                    v-for="(restaurant, index) in restaurantsOrganized.last"
                    :key="restaurant.id"
                    :rank="restaurant.rank"
                    :name="restaurant.name"
                    :index="index"
                 />
            </div>
        </div>
    </div>
</template>

<style scoped>

.table { margin: 2.5rem 0; }

.table h1 { margin-bottom: 2rem; }

.table-container { display: flex; justify-content: space-between;}

</style>