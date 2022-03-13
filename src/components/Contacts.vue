<script setup>
import ItemList from "./ItemList.vue";
import IconEMail from "./icons/contacts/IconEMail.vue";
import IconFacebook from "./icons/contacts/IconFacebook.vue";
import IconGitHub from "./icons/contacts/IconGitHub.vue";
import IconInst from "./icons/contacts/IconInst.vue";
import IconLinkdin from "./icons/contacts/IconLinkdin.vue";
import IconWhatsApp from "./icons/contacts/IconWhatsApp.vue";
import IconTelegram from "./icons/contacts/IconTelegram.vue";
import IconPhone from "./icons/contacts/IconPhone.vue";
</script>

<template>
  <div class="container">
    <div class="contacts-list">
      <ItemList>
        <template #icon>
          <IconFacebook />
        </template>
        <template #heading
          ><a target="_blank" href="https://www.facebook.com/art.gaidash"
            >Facebook</a
          ></template
        >
      </ItemList>

      <ItemList>
        <template #icon>
          <IconGitHub />
        </template>
        <template #heading
          ><a target="_blank" href="https://github.com/artgaid"
            >GitHub</a
          ></template
        >
      </ItemList>

      <ItemList>
        <template #icon>
          <IconInst />
        </template>
        <template #heading
          ><a target="_blank" href="https://www.instagram.com/art_gaid"
            >Instagram</a
          ></template
        >
      </ItemList>

      <ItemList>
        <template #icon>
          <IconLinkdin />
        </template>
        <template #heading
          ><a
            target="_blank"
            href="https://www.linkedin.com/in/artemgaidashweb/"
            >Linkedin</a
          ></template
        >
      </ItemList>
    </div>
    <div class="contacts-list">
      <ItemList>
        <template #icon>
          <IconEMail />
        </template>
        <template #heading
          ><a target="_blank" href="mailto:gaid94.it@gmail.com"
            >gaid94.it@gmail.com</a
          ></template
        >
      </ItemList>

      <ItemList>
        <template #icon>
          <IconWhatsApp />
        </template>
        <template #heading
          ><a target="_blank" href="https://wa.me/79775301319"
            >WhatsApp</a
          ></template
        >
      </ItemList>

      <ItemList>
        <template #icon>
          <IconTelegram />
        </template>
        <template #heading
          ><a target="_blank" href="https://t.me/ArtGaid">Telegram</a></template
        >
      </ItemList>

      <ItemList>
        <template #icon>
          <IconPhone />
        </template>
        <template #heading
          ><a target="_blank" href="tel:+79775301319"
            >+7 977 530 13 19</a
          ></template
        >
      </ItemList>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  gap: 20px;
}

.contacts-list {
  width: 100%;
}

@media screen and (max-width: 555px) {
  .container {
    flex-direction: column;
    gap: 0;
  }
}
</style>
