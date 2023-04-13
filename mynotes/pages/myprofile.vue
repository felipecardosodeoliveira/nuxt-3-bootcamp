<script lang="ts">
  definePageMeta({
    "middleware": "auth"
  });
  
</script>

<template>
    <div class="container">
      <h1>Notes App Profile</h1>
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