<template>
    <div>
      <SiteNav/>
      <main>
        <Html lang="pt-BR">
            <Head>
              <Title>Restaurantly</Title>
              <Meta name="description" content="My page is cool"></Meta>
            </Head>
        </Html>
        <div class="container">
            <h1>Welcome to Restaurantly</h1>
            <NuxtLink to="/restaurants">Go to restaurants</NuxtLink>
        </div>
      </main>
    </div>
  </template>
  
<style scoped>
    .container {
        text-align: center;
    }
</style>