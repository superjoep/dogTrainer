<script setup lang="ts">
import lessonComp from "@/components/lessonComp.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonButton,
  IonBackButton,
  IonToolbar,
  IonButtons,
} from "@ionic/vue";
import jsonData from "../data/tempData.json";
import { computed } from "vue";
const route = useRoute();
const lessonId = route.params.id;
const lessonPage = ref(1);
let lessonData = jsonData.lessons.find((x) => x.id === lessonId);
const specificData = computed(() =>
  lessonData.lessonPart.find(
    (x) => x.lessonPartID === lessonPage.value.toString()
  )
);
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons>
            <RouterLink to="/"
              ><ion-back-button default-href="/"></ion-back-button
            ></RouterLink>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <div class="grid h-12">
        <div class="flex gap-12 justify-center relative">
          <div v-for="item in lessonData.lessonPart">
            <div
              v-if="item.lessonPartID == lessonPage"
              class="bg-blue-500 w-5 h-5 rounded-full"
            ></div>
            <div class="bg-blue-200 w-5 h-5 rounded-full" v-else></div>
          </div>
        </div>
      </div>
      <lessonComp :data="specificData" />
      <div class="grid">
        <ion-button
          @click="
            lessonPage++;
            console.log(lessonPage);
          "
          class="font-bold place-self-center w-56 m-5"
          >Next Lesson</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>
