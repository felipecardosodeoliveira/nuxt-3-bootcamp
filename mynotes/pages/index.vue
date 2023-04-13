<script setup lang="ts">
    const { supabase } = useSupabase();
</script>

<template>
    <div>
        <div class="container">
            <AuthCard/>
        </div>
    </div>
</template>

<style scoped>
    .container {
        align-items: center;
        display: flex;
        justify-content: center;
        max-width: 50%;
        margin: 0 auto;
        height: calc(100vw - 900px);
    }
</style>