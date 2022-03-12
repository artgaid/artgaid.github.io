<script setup>
import ItemList from "./ItemList.vue";
import BirthDayIcon from "./icons/about/IconBirthDay.vue";
import LangIcon from "./icons/about/IconLanguages.vue";
import LightIcon from "./icons/about/IconLightbulb.vue";
import HobbyIcon from "./icons/about/IconHobby.vue";
import SpeakerIcon from "./icons/about/IconPublicSpeak.vue";
</script>

<template>
  <div>
    <ItemList>
      <template #icon>
        <BirthDayIcon />
      </template>
      <template #heading>Birth Date</template>
      23 March 1994
    </ItemList>

    <ItemList>
      <template #icon>
        <LangIcon />
      </template>
      <template #heading>Languages</template>
      English - B1
      <br />
      Russian - Native speaker
    </ItemList>

    <ItemList>
      <template #icon>
        <LightIcon />
      </template>
      <template #heading>Resourceful</template>
      I easily manage to find the best way out of a difficult situation in a
      short period of time.
    </ItemList>

    <ItemList>
      <template #icon>
        <HobbyIcon />
      </template>
      <template #heading>Hobby</template>

      <ul>
        <li>I prefer a healthy lifestyle: traveling, biking, running, etc.</li>
        <li>Learning Web Design</li>
        <li>
          In my spare time I read books, do self-development and <br />
          study foreign languages with a tutor.
        </li>
      </ul>
    </ItemList>

    <ItemList>
      <template #icon>
        <SpeakerIcon />
      </template>
      I have experience in public speaking.
    </ItemList>
  </div>
</template>
