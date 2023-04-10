<script setup lang="ts">
  const { isDarkMode } = useDarkMode();
</script>

<template>
  <div :style="isDarkMode ? {backgroundColor: 'black', color: 'white'}: ''">
    <Nav/>
    <Heading />
    <Cards />
  </div>
</template>

<style scoped>
  * {
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
</style>
