<template>
  <div class="ativepage">
    <CourseItem v-if="isActive" />
  </div>
</template>

<script setup>
import CourseItem from "../../components/CourseItem.vue";
</script>
