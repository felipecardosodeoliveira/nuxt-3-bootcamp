<script setup>
</script>

<template>
    <div>
        <Html :lang="dynamic > 10 ? 'pt-BR': ''">
            <Head>
              <Title>Top 50 Restaurants</Title>
              <Meta name="description" content="My page is cool"></Meta>
            </Head>
        </Html>

        <SiteNav/>
        <main>
            <div class="container">
                <RestaurantTable 
                
                />
            </div>
        </main>
    </div>
</template>