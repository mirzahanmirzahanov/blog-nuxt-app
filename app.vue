<script setup>
import VFooter from "./components/VFooter.vue";
import VHeader from "./components/VHeader.vue";
</script>

<template>
  <div class="wrapper">
    <VHeader />
    <main class="main">
      <NuxtPage />
    </main>
    <VFooter />
  </div>
</template>

