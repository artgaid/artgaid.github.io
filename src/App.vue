<script setup>
import { RouterLink, RouterView } from "vue-router";
import Description from "@/components/Description.vue";
</script>

<template>
  <header>
    <img alt="Photo" class="photo" src="@/assets/photo.webp" />

    <div class="wrapper">
      <Description msg="Artem Gaidash" />

      <nav>
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
        <RouterLink to="/work-experience">Experience</RouterLink>
        <RouterLink to="/technology-stack">Technology</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <p class="more">
          More info in my CV
          <a target="_blank" download href="./CV/CV_En.pdf">En</a>
          <a target="_blank" download href="./CV/CV_Ru.pdf">Ru</a>
        </p>
      </nav>
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style>
@import "@/assets/base.css";

#app {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
}

body {
  display: flex;
  place-items: center;
}

header {
  line-height: 1.5;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

header .wrapper {
  display: flex;
  justify-content: center;
  place-items: center;
  flex-wrap: wrap;
}

main {
  display: flex;
  align-items: center;
}

.photo {
  display: block;
  margin-bottom: 2rem;

  border-radius: 50%;
  border: 5px solid transparent;
  width: 220px;
  box-shadow: 0 0 0 1px currentColor;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s all ease-in-out;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  position: sticky;
  top: 0;

  width: 100%;
  text-align: center;

  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.more {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 10px 30px 0 0;
}

@media screen and (max-width: 1240px) {
  #app {
    width: 100%;
    grid-template-columns: 1fr;

    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
  }

  body {
    flex-direction: column;
  }

  header {
    max-height: initial;
    padding-right: 0;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;

    font-size: 15px;
    text-align: center;
    margin-top: 2rem;
    margin-left: 0;
  }

  .more {
    font-size: 10px;
    margin: 10px auto 0;
  }
}
</style>
