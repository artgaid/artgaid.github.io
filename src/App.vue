<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img alt="Photo" class="photo" src="@/assets/image/photo.webp" />

    <div class="wrapper">
      <HelloWorld msg="Artem Gaidash" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
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

.photo {
  display: block;
  margin-bottom: 2rem;

  border-radius: 50%;
  border: 3px solid black;
  width: 220px;
  box-shadow: 0 0 0 3px white;
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

@media screen and (max-width: 1024px) {
  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
  }

  body {
    flex-direction: column;
  }

  nav {
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }
}
</style>
