<script setup lang="ts">
import lessonComp from "../comps/lessonComp.vue";
import { useRoute } from "vue-router";
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
const route = useRoute();
const id = route.params.id;
let lessonData = jsonData.lessons.find((x) => x.lessonID === id);
let specificData = lessonData.LessonPart.find((x) => x.lessonPartID === "1");
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
      <lessonComp :data="specificData" />
      {{ $route.params.id }}
    </ion-content>
  </ion-page>
</template>
