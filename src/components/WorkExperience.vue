<script setup>
import ItemList from "./ItemList.vue";
import StikIcon from "./icons/work/IconStik.vue";
import UpworkIcon from "./icons/work/IconUpwork.vue";
import GeekIcon from "./icons/work/IconGeekBrains.vue";
import IconHFLabs from "@/components/icons/work/IconHFLabs.vue";
</script>

<template>
  <div>
    <ItemList>
      <template #icon>
        <IconHFLabs />
      </template>
      <template #heading
        >An IT product company
        <a target="_blank" href="https://hflabs.ru/">H F Labs</a></template
      >
      <p>04.2022 — to date</p>
      HFLabs provides customer data quality and data integration solutions and
      services in Russia.
    </ItemList>

    <ItemList>
      <template #icon>
        <StikIcon />
      </template>
      <template #heading
        >Digital agency
        <a target="_blank" href="https://stik.pro/">Stik.pro</a></template
      >
      <p>09.2021 — 03.2022</p>
      Development of online stores and D2C sites. Developed a service for
      launching projects with a machine-learning-based time-tracking system.
    </ItemList>

    <ItemList>
      <template #icon>
        <UpworkIcon />
      </template>
      <template #heading
        >Private practice at
        <a target="_blank" href="https://www.upwork.com/">Upwork</a>
      </template>
      <p>05.2021 — 09.2021</p>
      Development of Web applications, Web interfaces in accordance with
      customer requirements.
    </ItemList>

    <ItemList>
      <template #icon>
        <GeekIcon />
      </template>
      <template #heading
        >Internship at
        <a target="_blank" href="https://gb.ru/">GeekBrains</a></template
      >
      <p>02.2021 — 05.2021</p>
      Development of components and pages for new products. Setting up
      integration with external and internal services. Working with actual
      technology on practical tasks.
    </ItemList>
  </div>
</template>

<style scoped>
p {
  font-size: 12px;
  font-weight: 300;
}
</style>
