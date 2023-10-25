<script setup>
import ItemList from "./ItemList.vue";
import IconHTML from "./icons/technology-stack/IconHTML.vue";
import IconCSS from "./icons/technology-stack/IconCSS.vue";
import IconJS from "./icons/technology-stack/IconJS.vue";
import IconVue from "./icons/technology-stack/IconVue.vue";
import IconTest from "./icons/technology-stack/IconTest.vue";
import IconNode from "./icons/technology-stack/IconNode.vue";
import IconAPI from "./icons/technology-stack/IconAPI.vue";
import IconAgile from "./icons/technology-stack/IconAgile.vue";
import IconReact from "./icons/technology-stack/IconReact.vue";
import IconDocker from "./icons/technology-stack/IconDocker.vue";
import IconOpenAI from "@/components/icons/technology-stack/IconOpenAI.vue";
</script>

<template>
  <div class="container">
    <div class="technology-list">
      <ItemList>
        <template #icon>
          <IconHTML />
        </template>
        <template #heading>HTML</template>
      </ItemList>
      <ItemList>
        <template #icon>
          <IconCSS />
        </template>
        <template #heading>CSS</template>

        <div class="technology-description">
          Scss | Sass
        </div>
      </ItemList>

      <ItemList>
        <template #icon>
          <IconJS />
        </template>
        <template #heading>JavaScript</template>

        <a target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>
      </ItemList>

      <ItemList>
        <template #icon>
          <IconVue />
        </template>
        <template #heading>Vue</template>

        <div class="technology-description">
          <a target="_blank" href="https://vuejs.org/">Vue 3</a> |
          <a target="_blank" href="https://vuex.vuejs.org/">Vuex</a> or
          <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a> |
          <a target="_blank" href="https://nuxt.com/">Nuxt 3</a> |
          <a target="_blank" href="https://vuetifyjs.com/">Vuetify</a>
        </div>

      </ItemList>

      <ItemList>
        <template #icon>
          <IconReact />
        </template>
        <template #heading>React</template>

        <div class="technology-description">
          <a target="_blank" href="https://nextjs.org/">NEXT.js</a> |
          <a target="_blank" href="https://redux.js.org/">Redux</a> |
          <a target="_blank" href="https://mui.com/">Material-UI</a>
        </div>
      </ItemList>
    </div>

    <div class="technology-list">
      <ItemList>
        <template #icon>
          <IconTest />
        </template>
        <template #heading>Unit Testing</template>
      </ItemList>

      <ItemList>
        <template #icon>
          <IconAPI />
        </template>
        <template #heading>RESTful API</template>

        <div class="technology-description">
          <a target="_blank" href="https://axios-http.com/">Axios</a> |
          <a target="_blank" href="https://vue-query.vercel.app/#/">Vue Query</a>
        </div>

      </ItemList>

      <ItemList>
        <template #icon>
          <IconNode />
        </template>
        <template #heading>Node.js</template>

        <a target="_blank" href="https://expressjs.com/">Express</a>
      </ItemList>

      <ItemList>
        <template #icon>
          <IconAgile />
        </template>
        <template #heading>Agile</template>

        <div class="technology-description">
          Scrum | Kanban | Waterfall
        </div>
      </ItemList>

      <ItemList>
        <template #icon>
          <IconDocker />
        </template>
        <template #heading>Docker</template>

        <div class="technology-description">
          <a target="_blank" href="https://www.docker.com/">Docker</a> makes
          development efficient and predictable
        </div>
      </ItemList>

      <ItemList>
        <template #icon>
          <IconOpenAI />
        </template>
        <template #heading>Open AI</template>

        <div class="technology-description">
          Integration and work with
          <a target="_blank" href="https://openai.com/">Open AI</a>
        </div>
      </ItemList>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  gap: 20px;

  align-items: center;
}

.technology-list {
  width: 100%;
}

.technology-description {
  width: 100%;
  height: auto;

  display: flex;
  grid-gap: 5px;

  flex-wrap: wrap;
}

@media screen and (max-width: 555px) {
  .container {
    flex-direction: column;
    gap: 0;
  }
}
</style>
