<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloPage from "./components/HelloPage.vue";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
</template>

<style scoped></style>
