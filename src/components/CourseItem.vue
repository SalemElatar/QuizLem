<template>
  <div class="course_item">
    <span
      class="activeTag"
      :style="
        isActive
          ? { 'background-color': 'rgb(137 173 130)' }
          : { 'background-color': '#555' }
      "
      >{{ isActive ? "active" : "archived" }}</span
    >

    <h3 class="course_item_title">
      <RouterLink to="/"> {{ CourseTitle }}</RouterLink>
    </h3>
    <span class="course_item_av_quiz"
      >Quizes : {{ CourseProg }} / {{ avQuizes }}</span
    >
    <progress :value="CourseProg" :max="avQuizes">avQuizes</progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CourseTitle: "Fundamentals - Udacity",
      isActive: true,
      avQuizes: 15,
      CourseProg: 12,
    };
  }
},
</script>

<style scoped>
.course_item {
  border-radius: 8px;
  border: 1px solid #555;
  padding: 18px 25px;
  margin: 15px 20px;
}
.course_item .activeTag {
  background-color: #555;
  border: 1px solid #000;
  position: absolute;
  top: -15px;
  left: -10px;
  color: #fff;
  border-radius: 5px;
  padding: 0px 10px;
}
.course_item_title a {
  color: var(--color-text);
}
progress {
  display: block;
  accent-color: #5e8f5e;
}
</style>
