<script setup>
import IconError from "./icons/IconError.vue";
</script>

<template>
  <div class="container">
    <div class="title">4 <IconError /> 4</div>
    <h1 class="description">PAGE NOT FOUND</h1>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  justify-content: center;
}

.title {
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 130px;
  font-weight: 500;
  color: currentColor;

  margin: 0 auto;
}

.description {
  width: fit-content;

  margin: 20px auto 0;
}

@media screen and (max-width: 555px) {
  .title {
    width: 100%;
    font-size: 100px;
    gap: 10px;

    margin: 0;
  }
}
</style>
