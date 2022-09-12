<template>
  <div class="courses">
    <div class="select_course_view">
      <span>Select Course View : </span>
      <ul>
        <router-link to="/courses/AllCourses"> all courses </router-link>
        <router-link to="/courses/ActiveCourses"> Active course </router-link>
        <router-link to="/courses/ArchiveCourses"> archived </router-link>
      </ul>
    </div>
    <h2>This is the Active Courses</h2>
    <div class="courses_view">
      <RouterView class="routerView" />
    </div>
  </div>
</template>

<script setup></script>
<style>
.router-link-active,
.router-link-exact-active {
  background-color: hsla(160, 97%, 43%, 0.384);
  color: #fff;
}
.select_course_view {
  font-size: 1rem;
  margin-bottom: 20px;
}
.select_course_view span {
  color: #000;
}
.select_course_view ul {
  display: inline;
  padding-left: 15px;
}
.select_course_view ul a {
  color: var(--color-text);
  text-transform: capitalize;
  list-style: none;
  display: inline;
  border: 1px solid;
  border: 0.5px solid #c7c7c773;
  border-radius: 10px;
  padding: 8px 15px;
  margin-left: 10px;
  font-weight: 500;
}
.select_course_view ul a:hover {
  background-color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  color: #fff;
}

.courses_view {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
}

/* .courses_view {
} */
</style>
