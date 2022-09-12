<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/" class="pages_links">Home</RouterLink>
    <RouterLink to="/courses" class="pages_links">courses</RouterLink>
  </nav>
  <RouterView class="routerView" />
</template>

<style scoped>
nav {
  background-color: #3c3c3c;
  margin-top: 20px;
  border-radius: 17px;
  overflow: hidden;
}
nav .pages_links {
  padding: 20px 36px;
  font-size: 18px;
  display: inline-block;
}
.router-link-active,
.router-link-exact-active {
  background-color: hsla(160, 97%, 43%, 0.384);
  color: #fff;
}

.routerView {
  margin: 70px 0;
}
</style>
