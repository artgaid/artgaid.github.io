<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Creative and self-starting Front-End Developer.
      <br />
      I create stable websites and apps in a modern IT environment.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media screen and (max-width: 1024px) {
  h1 {
    font-weight: 500;
    font-size: 2rem;
    top: -10px;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>
