<script setup>
import ItemList from "./ItemList.vue";
import CoursesIcon from "./icons/IconCourse.vue";
import UniversityIcon from "./icons/IconUniversity.vue";
</script>

<template>
  <div>
    <ItemList>
      <template #icon>
        <UniversityIcon />
      </template>
      <template #heading>Belarusian State University of Economics </template>
      <p>2016 - 2021</p>
      University major: "Economics and Business Management”
    </ItemList>

    <ItemList>
      <template #icon>
        <CoursesIcon />
      </template>
      <template #heading>GeekBrains University</template>
      <p>2020-2021</p>
      Major in courses: "Frontend Developer"
    </ItemList>

    <ItemList>
      <template #icon>
        <CoursesIcon />
      </template>
      <template #heading>Skyeng School</template>
      IT English courses
    </ItemList>
  </div>
</template>

<style scoped>
p {
  font-size: 12px;
  font-weight: 300;
}
</style>
